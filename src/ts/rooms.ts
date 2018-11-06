import request from "superagent";
import { BASE_URI, CHATWORK_TOKEN } from "./constants";
import { objectToQuery, requestError, requestSuccess } from "./service";

type DeleteActionType = "leave" | "delete";

// tslint:disable:no-empty-interface
interface RoomsPostOptions { }
interface RoomsPutWithIdOptions { }
interface RoomsMembersPutOptions { }
interface RoomsMessagesGetOptions { }
interface RoomsMessagesPostOptions { }
interface RoomsMessagesReadPutOptions { }
interface RoomsTasksGetOptions { }
interface RoomsTasksPostOptions { }
interface RoomsFilesGetOptions { }
interface RoomsFilesPostOptions { }
interface RoomsFilesGetWithIdOptions { }
interface RoomsLinkPostOptions { }
interface RoomsLinkPutOptions { }
// tslint:enable:no-empty-interface

const BASE_ROOMS_URI = `${BASE_URI}rooms`;

export async function get(apiToken: string) {
    return request
        .get(BASE_ROOMS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
export async function post(apiToken: string, name: string, members_admin_ids: number[], options: RoomsPostOptions) {
    return request
        .post(BASE_ROOMS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ name, members_admin_ids, ...options })
        .then(requestSuccess)
        .catch(requestError);
}
export async function getWithId(apiToken: string, room_id: number) {
    return request
        .get(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
export async function putWithId(apiToken: string, room_id: number, options: RoomsPutWithIdOptions) {
    return request
        .post(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ ...options })
        .then(requestSuccess)
        .catch(requestError);
}
export async function deleteWithId(apiToken: string, room_id: number, action_type: DeleteActionType) {
    return request
        .delete(`${BASE_ROOMS_URI}/${room_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .send({ action_type })
        .then(requestSuccess)
        .catch(requestError);
}

export const members = {
    get: async (apiToken: string, room_id: number) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    put: async (apiToken: string, room_id: number, members_admin_ids: number[], options: RoomsMembersPutOptions) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ members_admin_ids, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
};

export const messages = {
    get: async (apiToken: string, room_id: number, options: RoomsMessagesGetOptions) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken: string, room_id: number, body: string, options: RoomsMessagesPostOptions) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    read: {
        put: async (apiToken: string, room_id: number, options: RoomsMessagesReadPutOptions) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .set(CHATWORK_TOKEN, apiToken)
                .send({ ...options })
                .then(requestSuccess)
                .catch(requestError);
        },
    },
    unread: {
        put: async (apiToken: string, room_id: number, message_id: string) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .set(CHATWORK_TOKEN, apiToken)
                .send({ message_id })
                .then(requestSuccess)
                .catch(requestError);
        },
    },
    getWithId: async (apiToken: string, room_id: number, message_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    putWithId: async (apiToken: string, room_id: number, message_id: string, body: string) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body })
            .then(requestSuccess)
            .catch(requestError);
    },
    deleteWithId: async (apiToken: string, room_id: number, message_id: string) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};

export const tasks = {
    get: async (apiToken: string, room_id: number, options: RoomsTasksGetOptions) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken: string, room_id: number, body: string, to_ids: number[], options: RoomsTasksPostOptions) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ body, to_ids, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    getWithId: async (apiToken: string, room_id: number, task_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};

export const files = {
    get: async (apiToken: string, room_id: number, options: RoomsFilesGetOptions) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken: string, room_id: number, file: File, options: RoomsFilesPostOptions) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ file, ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    getWithId: async (apiToken: string, room_id: number, file_id: string, options: RoomsFilesGetWithIdOptions) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};

export const link = {
    get: async (apiToken: string, room_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
    post: async (apiToken: string, room_id: number, options: RoomsLinkPostOptions) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    put: async (apiToken: string, room_id: number, options: RoomsLinkPutOptions) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .send({ ...options })
            .then(requestSuccess)
            .catch(requestError);
    },
    delete: async (apiToken: string, room_id: number) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};
