'use strict';

module.exports = (err, request, response, next) => {
    console.log(err)
    response.status(500).send(error)
}