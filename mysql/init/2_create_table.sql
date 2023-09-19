CREATE TABLE IF NOT EXISTS `mydb`.`m_company` (
  `company_id` INT NOT NULL COMMENT 'PK',
  `company_name` VARCHAR(45) NOT NULL COMMENT '会社名',
  `url` VARCHAR(45) NULL COMMENT 'HPなど',
  `postal_code` INT NULL COMMENT '郵便番号',
  `pref_code` INT NOT NULL COMMENT '都道府県',
  `address` VARCHAR(45) NULL COMMENT '都道府県以降の住所',
  `image` VARCHAR(45) NULL COMMENT '会社ロゴ',
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB
