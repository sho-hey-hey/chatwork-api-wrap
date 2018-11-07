"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.requestSuccess = (res) => {
    if (res.status === constants_1.STATUS_CODE_200) {
        return res.body;
    }
    return null;
};
exports.requestError = (err) => {
    throw err;
};
exports.objectToQuery = (obj) => {
    const keys = Object.keys(obj);
    const query = keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => {
        const value = obj[k];
        const v = typeof value === "boolean"
            ? +value
            : Array.isArray(value)
                ? value.join(",")
                : value;
        return `${k}=${encodeURIComponent(v)}`;
    })
        .join("&");
    return query;
};
