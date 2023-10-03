# nodejs-payment-trash-api

Test API 
```
https://app-574b3b2b-05f4-4a14-a811-fd215c1e4fdf.cleverapps.io/
```


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
localhost:3000/customer/id_user

- Post Data
localhost:3000/customer

- Put Data
localhost:3000/customer/id_user

-Delete Data
localhost:3000/customer/id_user
```


Type Waste Routes
```
- Get All
localhost:3000/type-waste (for search: /type-waste?keyword=xxxx)

- Get by ID
localhost:3000/type-waste/id_type

- Post Data
localhost:3000/type-waste

- Put Data
localhost:3000/type-waste/id_type

-Delete Data
localhost:3000/type-waste/id_type
```


Load Routes
```
- Get All
localhost:3000/load (for search: /load?keyword=xxxx)

- Get by ID
localhost:3000/load/id

- Post Data
localhost:3000/load

- Put Data
localhost:3000/load/id

-Delete Data
localhost:3000/load/id
```

Debit Routes
```
- Get All
localhost:3000/debit (for search: /debit?keyword=xxxx)

- Get by ID
localhost:3000/debit/id_user

- Post Data
localhost:3000/debit

- Put Data
localhost:3000/debit/id_user

-Delete Data
localhost:3000/debit/id_user
```

Credit Routes
```
- Get All
localhost:3000/credit (for search: /credit?keyword=xxxx)

- Get by ID
localhost:3000/credit/id_user

- Post Data
localhost:3000/credit

- Put Data
localhost:3000/credit/id_user

-Delete Data
localhost:3000/credit/id_user
```

Database Structure

<img width="1146" alt="struktur database" src="https://github.com/ASNProject/nodejs-payment-trash-api/assets/49858542/139c4dcf-19a6-4c7b-bd7c-fcd05e949e5d">


