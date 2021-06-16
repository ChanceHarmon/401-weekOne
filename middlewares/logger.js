'use strict';

module.exports = ((request, response, next) => {
    console.log(request.method, request.headers, request.path)
    //Move on passed needing the response in this method
    next();
})