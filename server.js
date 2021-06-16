'use strict';

const express = require('express');
const logger = require('./middlewares/logger.js')
const validator = require('./middlewares/validator.js')
const auth = require('./middlewares/authorization.js')
const getUser = require('./middlewares/getUser.js')
const error = require('./middlewares/error.js')

const Person = require('./Person.js');

const app = express();

//Middleware

app.use(logger);
// app.use(auth);
app.use(error)

//Routes

app.get('/', (req, res) => {
    res.status(200).send({ "message": "thanks" });
});

app.get('/data', getUser, (request, response) => {
    console.log(request.user)
    response.status(200).send('Hello from data route')
})

app.get('/person', (request, response) => {
    response.status(200).send('Hello from person route')
})



//Mondays data route
// app.get('/data', (req, res) => {
//     // should respond with a 'Person"
//     res.status(200).send(new Person('Chance', 35));
// });


//No routes hit
app.use('*', (request, response) => {
    response.status(404).send('No route found.')
})
module.exports = {
    app: app,
    start: (PORT) => {
        app.listen(PORT, () => console.log(`Server is up on ${PORT}`))
    }
}