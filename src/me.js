const request = require('superagent');
const { BASE_URI } = require('./constants');
const { requestSuccess, requestError } = require('./service');

async function get(apiToken) {
    return request
        .get(`${BASE_URI}me`)
        .set('X-ChatWorkToken', apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

module.exports = { get };
