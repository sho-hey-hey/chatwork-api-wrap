const request = require('superagent');
const { BASE_URI, CHATWORK_TOKEN } = require('./constants');
const { requestSuccess, requestError } = require('./service');
const BASE_ME_URI = `${BASE_URI}me`;

async function get(apiToken) {
    return request
        .get(`${BASE_ME_URI}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

module.exports = { get };
