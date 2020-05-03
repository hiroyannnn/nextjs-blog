const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // const count = await db.query(escape`
  //     SELECT COUNT(*)
  //     AS profilesCount
  //     FROM m_company
  //   `)
  const count = await db.query(escape`
      select * from mydb.m_company;
    `)
  res.status(200).json({ count })
}
