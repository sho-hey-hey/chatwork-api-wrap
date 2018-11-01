const request = require('superagent');
const { BASE_URI, CHATWORK_TOKEN } = require('./constants');
const { requestSuccess, requestError } = require('./service');
const BASE_INCOMING_REQUESTS_URI = `${BASE_URI}incoming_requests`;

async function get(apiToken) {
    return request
        .get(BASE_INCOMING_REQUESTS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

async function putWithId(apiToken, request_id) {
    return request
        .put(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

async function deleteWithId(apiToken, request_id) {
    return request
        .delete(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

module.exports = {
    get,
    putWithId,
    deleteWithId,
};
