'use strict';

module.exports = (request, response, next) => {
    console.log('user middleware')
    let User = {
        name: 'Chance',
        age: 35
    }
    request.user = User
    next();
}