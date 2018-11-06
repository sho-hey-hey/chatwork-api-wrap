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
const BASE_ROOMS_URI = `${constants_1.BASE_URI}rooms`;
function get(apiToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(BASE_ROOMS_URI)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    });
}
exports.get = get;
function post(apiToken, name, members_admin_ids, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(BASE_ROOMS_URI)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({ name, members_admin_ids }, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    });
}
exports.post = post;
function getWithId(apiToken, room_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    });
}
exports.getWithId = getWithId;
function putWithId(apiToken, room_id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({}, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    });
}
exports.putWithId = putWithId;
function deleteWithId(apiToken, room_id, action_type) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send({ action_type })
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    });
}
exports.deleteWithId = deleteWithId;
exports.members = {
    get: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    put: (apiToken, room_id, members_admin_ids, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({ members_admin_ids }, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
exports.messages = {
    get: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages${service_1.objectToQuery(options)}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    post: (apiToken, room_id, body, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({ body }, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    read: {
        put: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .set(constants_1.CHATWORK_TOKEN, apiToken)
                .send(Object.assign({}, options))
                .then(service_1.requestSuccess)
                .catch(service_1.requestError);
        }),
    },
    unread: {
        put: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .set(constants_1.CHATWORK_TOKEN, apiToken)
                .send({ message_id })
                .then(service_1.requestSuccess)
                .catch(service_1.requestError);
        }),
    },
    getWithId: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    putWithId: (apiToken, room_id, message_id, body) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send({ body })
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    deleteWithId: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
exports.tasks = {
    get: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks${service_1.objectToQuery(options)}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    post: (apiToken, room_id, body, to_ids, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({ body, to_ids }, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    getWithId: (apiToken, room_id, task_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
exports.files = {
    get: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files${service_1.objectToQuery(options)}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    post: (apiToken, room_id, file, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({ file }, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    getWithId: (apiToken, room_id, file_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}${service_1.objectToQuery(options)}`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
exports.link = {
    get: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    post: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({}, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    put: (apiToken, room_id, options) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .send(Object.assign({}, options))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
    delete: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(constants_1.CHATWORK_TOKEN, apiToken)
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    }),
};
