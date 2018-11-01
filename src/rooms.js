const request = require('superagent');
const { BASE_URI, CHATWORK_TOKEN } = require('./constants');
const { requestSuccess, requestError, objectToQuery } = require('./service');
const BASE_ROOMS_URI = `${BASE_URI}rooms`;

async function get(apiToken) {
    return request
        .get(BASE_ROOMS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
async function post(apiToken, name, members_admin_ids, options) {
    return request
        .post(BASE_ROOMS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ name, members_admin_ids, ...options })
        .then(requestSuccess)
        .catch(requestError);
}
async function getWithId(apiToken, room_id) {
    return request
        .get(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
async function putWithId(apiToken, room_id, options) {
    return request
        .post(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ ...options })
        .then(requestSuccess)
        .catch(requestError);
}
async function deleteWithId(apiToken, room_id, action_type) {
    return request
        .delete(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ action_type })
        .then(requestSuccess)
        .catch(requestError);
}

const members = {
    get: async (apiToken, room_id) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    put: async (apiToken, room_id, members_admin_ids, options) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ members_admin_ids, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
};

const messages = {
    get: async (apiToken, room_id, options) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken, room_id, body, options) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    read: {
        put: async (apiToken, room_id, options) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .set(CHATWORK_TOKEN, apiToken)
                .send({ ...options })
                .then(requestSuccess)
                .catch(requestError);
        },
    },
    unread: {
        put: async (apiToken, room_id, message_id) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .set(CHATWORK_TOKEN, apiToken)
                .send({ message_id })
                .then(requestSuccess)
                .catch(requestError);
        },
    },
    getWithId: async (apiToken, room_id, message_id) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    putWithId: async (apiToken, room_id, message_id, body) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body })
            .then(requestSuccess)
            .catch(requestError);
    },
    deleteWithId: async (apiToken, room_id, message_id) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};

const tasks = {
    get: async (apiToken, room_id, options) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken, room_id, body, to_ids, options) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body, to_ids, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    getWithId: async (apiToken, room_id, task_id) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
}

const files = {
    get: async (apiToken, room_id, options) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken, room_id, file, options) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ file, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    getWithId: async (apiToken, room_id, file_id, options) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
}

const link = {
    get: async (apiToken, room_id) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken, room_id, options) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    put: async (apiToken, room_id, options) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    delete: async (apiToken, room_id) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
}

module.exports = {
    get,
    post,
    getWithId,
    putWithId,
    deleteWithId,
    members,
    messages,
    tasks,
    files,
    link
};
