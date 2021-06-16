'use strict';

module.exports = (request, response, next) => {
    if (!request.query.name) {
        next('No name on query.')
    } else {
        next();
    }
};