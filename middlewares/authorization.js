'use strict';

module.exports = ((request, response, next) => {
    if (!req.headers.authorization) {
        // response.status(403).send('Error: Not Authorized') 
        // A different way to handle error middleware
        next({ 'Error': 'Not Authorized' })
    }
    else {
        next();
    }
})