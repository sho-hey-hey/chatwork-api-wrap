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
exports.get = get;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const BASE_ME_URI = `${constants_1.BASE_URI}me`;
/**
 * Get my info.
 * https://developer.chatwork.com/reference/get-me
 */
function get(apiToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(BASE_ME_URI, {
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
