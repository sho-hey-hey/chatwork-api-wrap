const request = require('superagent');
const { BASE_URI, CHATWORK_TOKEN } = require('./constants');
const { requestSuccess, requestError } = require('./service');
const BASE_CONTACTS_URI = `${BASE_URI}contacts`;

async function get(apiToken) {
    return request
        .get(`${BASE_CONTACTS_URI}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

module.exports = { get };
