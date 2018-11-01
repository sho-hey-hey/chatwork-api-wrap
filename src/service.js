const { STATUS_CODE_200 } = require('./constants');

const requestSuccess = (res) => {
    if (res.statusCode == STATUS_CODE_200)
        return res.body;
    return null;
}

const requestError = (err) => {
    return err;
}

const objectToQuery = (obj) => {
    const keys = Object.keys(obj);
    const query = keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => {
            const value = obj[k];
            const v = typeof value === 'boolean' ? +value : value;
            return `${k}=${v}`
        })
        .join('&');

    return `?${query}`;
}

module.exports = {
    requestSuccess,
    requestError,
    objectToQuery,
};
