const { STATUS_CODE_200 } = require('./constants');

const requestSuccess = (res) => {
    if (res.statusCode == STATUS_CODE_200)
        return res.body;
    return null;
}

const requestError = (err) => {
    return err;
}

module.exports = { requestSuccess, requestError };
