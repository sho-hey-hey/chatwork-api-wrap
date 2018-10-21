const request = require('superagent');
const { BASE_URI } = require('./constants');
const { requestSuccess, requestError } = require('./service');

async function statusGet(apiToken) {
    return request
        .get(`${BASE_URI}my/status`)
        .set('X-ChatWorkToken', apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

async function tasksGet(apiToken, assignedByAccountId, status) {
    return request
        .get(`${BASE_URI}my/status?assigned_by_account_id=${assignedByAccountId}&status=${status}`)
        .set('X-ChatWorkToken', apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

module.exports = { statusGet, tasksGet };
