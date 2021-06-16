'use strict';
const logger = require("../middlewares/logger");
const getUser = require('../middlewares/getUser')

describe('testing middleware functions', () => {
    test('logger logs method and headers, calls next', () => {
        let requestObject = {
            headers: 'test',
            method: 'test'
        };
        let responseObject = {};
        let nextFunction = jest.fn();

        console.log = jest.fn();


        logger(requestObject, responseObject, nextFunction);

        expect(nextFunction).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('test', 'test')
    })

    test('getUser attaches user to request object', () => {
        let requestObject = {};
        let responseObject = {};
        let nextFunction = jest.fn();
        console.log('testing')
        getUser(requestObject, responseObject, nextFunction)

        expect(nextFunction).toHaveBeenCalled();
        expect(requestObject).toHaveProperty('user')
        expect(requestObject.user.name).toEqual('Chance')
    })
})