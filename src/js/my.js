"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const BASE_MY_URI = `${constants_1.BASE_URI}my`;
exports.status = {
    get: (apiToken) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_MY_URI}/status`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
exports.tasks = {
    get: (apiToken, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_MY_URI}/tasks?${service_1.objectToQuery(options)}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
