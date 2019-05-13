# SQL Design Note

## BasicData

```
CREATE TABLE IF NOT EXISTS "webpages_basicdata" 
(
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "name" varchar(11) NOT NULL, 
    "address" varchar(50) NOT NULL, 
    "company_phone" varchar(15) NOT NULL, 
    "company" varchar(50) NOT NULL, 
    "job_title" varchar(30) NOT NULL, 
    "career" integer NOT NULL, 
    "birthday" varchar(10) NOT NULL, 
    "person_house_phone" varchar(15) NOT NULL, 
    "person_phone" varchar(15) NOT NULL, 
    "company_address" varchar(50) NOT NULL, 
    "description" text NOT NULL, 
    "identity" varchar(15) NOT NULL
);
```

## BankDepositData

```
CREATE TABLE IF NOT EXISTS "webpages_bankdepositdata" 
(   
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "name" varchar(15) NOT NULL, 
    "account" varchar(20) NOT NULL, "performance" integer NOT NULL, 
    "opnning_data" datetime NOT NULL, 
    "a_year_average_balance" integer NOT NULL, "six_month_average_balance" integer NOT NULL, "refund_record" integer NOT NULL, 
    "seizure_deposit" integer NOT NULL, 
    "suspicious_account" bool NOT NULL
);
```