# Backend tongji test project

## GETTING STARTED
To launch the project
```bash
$ npm i
$ npm start # to launch the server
$ npm test # to test obviously
```

## Routes
Our server follows the [REST API guidelines](https://idratherbewriting.com/learnapidoc/) .

It has 5 main routes:

| HTTP verb | endpoint  | HTTP Code returns  |
| --------- | --------- | ------------------ |
| GET       | /blog     | 200, 404           |
| GET       | /blog/:id | 200, 404           |
| POST      | /blog     | 200, 401, 500      |
| DELETE    | /blog/:id | 200, 401           |
| PUT       | /blog/:id | 200, 401, 404, 500 |

## Database
For the seak of simplicity, we use the `lowdb` package as a database. 

### Pros
- No server installation (compared to MongoDB, MariaDB, mysql and so on)
- Ease of use
- Rapid prototype

### Cons
- Not good for huge project (can be slow)
- Not secure

## Tests
Packages used:
- [Jest](https://jestjs.io/) *from Facebook*
- [Supertest](https://github.com/visionmedia/supertest) 

We have a folder `tests` to store all our tests. All our files follow this convention for the name of the file: 
`*.test.js`.