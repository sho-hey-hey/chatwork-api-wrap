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
exports.link = exports.files = exports.tasks = exports.messages = exports.members = void 0;
exports.get = get;
exports.post = post;
exports.getWithId = getWithId;
exports.putWithId = putWithId;
exports.deleteWithId = deleteWithId;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const BASE_ROOMS_URI = `${constants_1.BASE_URI}rooms`;
/**
 * Get chat room list.
 * https://developer.chatwork.com/reference/get-rooms
 */
function get(apiToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(BASE_ROOMS_URI, {
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
/**
 * Create chat room.
 * https://developer.chatwork.com/reference/post-rooms
 */
function post(apiToken, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(BASE_ROOMS_URI, data, {
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
/**
 * Get chat room info.
 * https://developer.chatwork.com/reference/get-rooms-room_id
 */
function getWithId(apiToken, room_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}`, {
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
/**
 * Change chat room info.
 * https://developer.chatwork.com/reference/put-rooms-room_id
 */
function putWithId(apiToken_1, room_id_1) {
    return __awaiter(this, arguments, void 0, function* (apiToken, room_id, options = {}) {
        try {
            const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}`, Object.assign({}, options), {
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
/**
 * Delete chat room.
 * https://developer.chatwork.com/reference/delete-rooms-room_id
 */
function deleteWithId(apiToken, room_id, action_type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${BASE_ROOMS_URI}/${room_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
                data: {
                    action_type,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    });
}
exports.members = {
    /**
     * Get chat room member list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-members
     */
    get: (apiToken, room_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/members`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Change chat room members.
     * https://developer.chatwork.com/reference/put-rooms-room_id-members
     */
    put: (apiToken, room_id, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/members`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
};
exports.messages = {
    /**
     * Get chat room messages.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages
     */
    get: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/messages?${(0, service_1.objectToQuery)(data)}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Post message to chat room.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages
     */
    post: (apiToken, room_id, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${BASE_ROOMS_URI}/${room_id}/messages`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    read: {
        /**
         * Read message.
         * https://developer.chatwork.com/reference/put-rooms-room_id-messages-read
         */
        put: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
            try {
                const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/messages/read`, data, {
                    headers: {
                        [constants_1.CHATWORK_TOKEN]: apiToken,
                    },
                });
                return (0, service_1.requestSuccess)(response);
            }
            catch (e) {
                throw (0, service_1.requestError)(e);
            }
        }),
    },
    unread: {
        /**
         * Unread message.
         * https://developer.chatwork.com/reference/put-rooms-room_id-messages-unread
         */
        put: (apiToken, room_id, data) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`, data, {
                    headers: {
                        [constants_1.CHATWORK_TOKEN]: apiToken,
                    },
                });
                return (0, service_1.requestSuccess)(response);
            }
            catch (e) {
                throw (0, service_1.requestError)(e);
            }
        }),
    },
    /**
     * Get chat message.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages-message_id
     */
    getWithId: (apiToken, room_id, message_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Update chat message body.
     * https://developer.chatwork.com/reference/put-rooms-room_id-messages-message_id
     */
    putWithId: (apiToken, room_id, message_id, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Delete chat message.
     * https://developer.chatwork.com/reference/delete-rooms-room_id-messages-message_id
     */
    deleteWithId: (apiToken, room_id, message_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
};
exports.tasks = {
    /**
     * Get task list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-tasks
     */
    get: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/tasks?${(0, service_1.objectToQuery)(data)}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Add task.
     * https://developer.chatwork.com/reference/post-rooms-room_id-tasks
     */
    post: (apiToken, room_id, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${BASE_ROOMS_URI}/${room_id}/tasks`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Get task info.
     * https://developer.chatwork.com/reference/get-rooms-room_id-tasks-task_id
     */
    getWithId: (apiToken, room_id, task_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    status: {
        /**
         * Update task status.
         * https://developer.chatwork.com/reference/put-rooms-room_id-tasks-task_id-status
         */
        put: (apiToken, room_id, task_id, data) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}/status`, data, {
                    headers: {
                        [constants_1.CHATWORK_TOKEN]: apiToken,
                    },
                });
                return (0, service_1.requestSuccess)(response);
            }
            catch (e) {
                throw (0, service_1.requestError)(e);
            }
        }),
    },
};
exports.files = {
    /**
     * Get file list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-files
     */
    get: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/files?${(0, service_1.objectToQuery)(data)}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Upload file.
     * https://developer.chatwork.com/reference/post-rooms-room_id-files
     */
    post: (apiToken, room_id, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${BASE_ROOMS_URI}/${room_id}/files`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Get file info.
     * https://developer.chatwork.com/reference/get-rooms-room_id-files-file_id
     */
    getWithId: (apiToken_1, room_id_1, file_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, file_id_1, ...args_1], void 0, function* (apiToken, room_id, file_id, options = {}) {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}?${(0, service_1.objectToQuery)(options)}`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
};
exports.link = {
    /**
     * Get invitation link.
     * https://developer.chatwork.com/reference/get-rooms-room_id-link
     */
    get: (apiToken, room_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_ROOMS_URI}/${room_id}/link`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Create invitation link.
     * https://developer.chatwork.com/reference/post-rooms-room_id-link
     */
    post: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
        try {
            const response = yield axios_1.default.post(`${BASE_ROOMS_URI}/${room_id}/link`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Update invitation link.
     * https://developer.chatwork.com/reference/put-rooms-room_id-link
     */
    put: (apiToken_1, room_id_1, ...args_1) => __awaiter(void 0, [apiToken_1, room_id_1, ...args_1], void 0, function* (apiToken, room_id, data = {}) {
        try {
            const response = yield axios_1.default.put(`${BASE_ROOMS_URI}/${room_id}/link`, data, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
    /**
     * Delete invitation link.
     * https://developer.chatwork.com/reference/delete-rooms-room_id-link
     */
    delete: (apiToken, room_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${BASE_ROOMS_URI}/${room_id}/link`, {
                headers: {
                    [constants_1.CHATWORK_TOKEN]: apiToken,
                },
            });
            return (0, service_1.requestSuccess)(response);
        }
        catch (e) {
            throw (0, service_1.requestError)(e);
        }
    }),
};
