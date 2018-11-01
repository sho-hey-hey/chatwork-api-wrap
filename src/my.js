const request = require('superagent');
const { BASE_URI, CHATWORK_TOKEN } = require('./constants');
const { requestSuccess, requestError, objectToQuery } = require('./service');
const BASE_MY_URI = `${BASE_URI}my`;

const status = {
    get: async (apiToken) => {
        return request
            .get(`${BASE_MY_URI}/status`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    }
};

const tasks = {
    get: async (apiToken, options) => {
        return request
            .get(`${BASE_MY_URI}/tasks${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    }
}

module.exports = { status, tasks };
