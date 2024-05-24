"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQuery = exports.requestError = exports.requestSuccess = void 0;
const constants_1 = require("./constants");
const requestSuccess = (res) => {
    if (constants_1.STATUS_CODE["200_OK"] <= res.status && res.status < constants_1.STATUS_CODE["300_MULTIPLE_CHOICES"]) {
        return res.data || null;
    }
    return null;
};
exports.requestSuccess = requestSuccess;
const requestError = (err) => {
    return err;
};
exports.requestError = requestError;
const objectToQuery = (obj) => {
    const keys = Object.keys(obj);
    const query = keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => {
        const value = obj[k];
        const v = typeof value === "boolean" ? +value : Array.isArray(value) ? value.join(",") : value;
        return `${k}=${encodeURIComponent(v)}`;
    })
        .join("&");
    return query;
};
exports.objectToQuery = objectToQuery;
