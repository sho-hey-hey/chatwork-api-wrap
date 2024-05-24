"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWithId = exports.putWithId = exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const BASE_INCOMING_REQUESTS_URI = `${constants_1.BASE_URI}incoming_requests`;
/**
 * Get incoming request list.
 * https://developer.chatwork.com/reference/get-incoming_requests
 */
function get(apiToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(BASE_INCOMING_REQUESTS_URI, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    });
}
exports.get = get;
/**
 * Approve incoming request.
 * https://developer.chatwork.com/reference/put-incoming_requests-request_id
 */
function putWithId(apiToken, request_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.put(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    });
}
exports.putWithId = putWithId;
/**
 * Reject incoming request.
 * https://developer.chatwork.com/reference/delete-incoming_requests-request_id
 */
function deleteWithId(apiToken, request_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    });
}
exports.deleteWithId = deleteWithId;
