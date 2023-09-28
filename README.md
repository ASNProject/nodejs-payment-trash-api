# nodejs-payment-trash-api

# Payment-Trash-API

## Clone & Run
Clone this project
```
https://github.com/ASNProject/nodejs-payment-trash-api.git
```
Dependencies
```
npm install --save express
npm install nodemon
npm install sequelize mysql2
npm install --save mysql
npm install http
npm install save
npm install morgan
npm install --save cors
npm install --save body-parser
npm install dotenv 
```
Run program
```
nodemon server.js
```
Documentation
```
- Download database
/doc/mysql_database/db_payment_trash_api.sql

- Download Postman file
/doc/postman/Payment Trash.postman_collection.json
```

Routes

Customer Routes
```
- Get All
localhost:3000/customer (for search: /customer?keyword=xxxx)

- Get by ID
localhost:3000/customer/xxx

- Post Data
localhost:3000/customer

- Put Data
localhost:3000/customer/xxx

-Delete Data
localhost:3000/customer/xxx
```


Type Waste Routes
```
- Get All
localhost:3000/type-waste (for search: /type-waste?keyword=xxxx)

- Get by ID
localhost:3000/type-waste/xxx

- Post Data
localhost:3000/type-waste

- Put Data
localhost:3000/type-waste/xxx

-Delete Data
localhost:3000/type-waste/xxx
```


Load Routes
```
- Get All
localhost:3000/load (for search: /load?keyword=xxxx)

- Get by ID
localhost:3000/load/xxx

- Post Data
localhost:3000/load

- Put Data
localhost:3000/load/xxx

-Delete Data
localhost:3000/load/xxx
```

Debit Routes
```
- Get All
localhost:3000/debit (for search: /debit?keyword=xxxx)

- Get by ID
localhost:3000/debit/xxx

- Post Data
localhost:3000/debit

- Put Data
localhost:3000/debit/xxx

-Delete Data
localhost:3000/debit/xxx
```

Credit Routes
```
- Get All
localhost:3000/credit (for search: /credit?keyword=xxxx)

- Get by ID
localhost:3000/credit/xxx

- Post Data
localhost:3000/credit

- Put Data
localhost:3000/credit/xxx

-Delete Data
localhost:3000/credit/xxx
```


