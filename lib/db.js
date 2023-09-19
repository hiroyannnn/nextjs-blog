if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const mysql = require('serverless-mysql')

const config = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
}
const db = mysql({ config })

exports.query = async query => {
  try {
    db.connect()
    const config = db.getConfig()
    const results = await db.query(query)
    await db.end()
    return {config,results}
  } catch (error) {
    return { config,error }
  }
}

