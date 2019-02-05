import request from "superagent";
import { BASE_URI, IconPresetType, RoomDeleteActionType, TaskStatus } from "./constants";
import { objectToQuery, requestSuccess } from "./service";
import { withToken } from "./request";

interface RoomsPostOptions {
    description?: string;
    icon_preset?: IconPresetType;
    link?: boolean;
    link_code?: string;
    link_need_acceptance?: boolean;
    members_member_ids?: number[];
    members_readonly_ids?: number[];
}
interface RoomsPutWithIdOptions {
    description?: string;
    icon_preset?: IconPresetType;
    name?: string;
}
interface RoomsMembersPutOptions {
    members_member_ids?: number[];
    members_readonly_ids?: number[];
}
interface RoomsMessagesGetOptions {
    force?: boolean;
}
interface RoomsMessagesPostOptions {
    self_unread?: boolean;
}
interface RoomsMessagesReadPutOptions {
    message_id?: string;
}
interface RoomsTasksGetOptions {
    account_id?: number;
    assigned_by_account_id?: number;
    status?: TaskStatus;
}
interface RoomsTasksPostOptions {
    limit?: number;
}
interface RoomsFilesGetOptions {
    account_id?: number;
}
interface RoomsFilesPostOptions {
    message?: string;
}
interface RoomsFilesGetWithIdOptions {
    create_download_url?: boolean;
}
interface RoomsLinkPostOptions {
    code?: string;
    description?: string;
    need_acceptance?: boolean;
}
interface RoomsLinkPutOptions {
    code?: string;
    description?: string;
    need_acceptance?: boolean;
}

const BASE_ROOMS_URI = `${BASE_URI}rooms`;

export async function get(apiToken: string) {
    return request
        .get(BASE_ROOMS_URI)
        .use(withToken(apiToken))
        .then(requestSuccess);
}
export async function post(
    apiToken: string, name: string, members_admin_ids: number[], options: RoomsPostOptions = {},
) {
    return request
        .post(BASE_ROOMS_URI)
        .use(withToken(apiToken))
        .send(objectToQuery({ name, members_admin_ids, ...options }))
        .then(requestSuccess);
}
export async function getWithId(apiToken: string, room_id: number) {
    return request
        .get(`${BASE_ROOMS_URI}/${room_id}`)
        .use(withToken(apiToken))
        .then(requestSuccess);
}
export async function putWithId(apiToken: string, room_id: number, options: RoomsPutWithIdOptions = {}) {
    return request
        .put(`${BASE_ROOMS_URI}/${room_id}`)
        .use(withToken(apiToken))
        .send(objectToQuery({ ...options }))
        .then(requestSuccess);
}
export async function deleteWithId(apiToken: string, room_id: number, action_type: RoomDeleteActionType) {
    return request
        .delete(`${BASE_ROOMS_URI}/${room_id}`)
        .use(withToken(apiToken))
        .send(objectToQuery({ action_type }))
        .then(requestSuccess);
}

export const members = {
    get: async (apiToken: string, room_id: number) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    put: async (
        apiToken: string, room_id: number, members_admin_ids: number[], options: RoomsMembersPutOptions = {},
    ) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use(withToken(apiToken))
            .send(objectToQuery({ members_admin_ids, ...options }))
            .then(requestSuccess);
    },
};

export const messages = {
    get: async (apiToken: string, room_id: number, options: RoomsMessagesGetOptions = {}) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages?${objectToQuery(options)}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    post: async (apiToken: string, room_id: number, body: string, options: RoomsMessagesPostOptions = {}) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .use(withToken(apiToken))
            .send(objectToQuery({ body, ...options }))
            .then(requestSuccess);
    },
    read: {
        put: async (apiToken: string, room_id: number, options: RoomsMessagesReadPutOptions = {}) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .use(withToken(apiToken))
                .send(objectToQuery({ ...options }))
                .then(requestSuccess);
        },
    },
    unread: {
        put: async (apiToken: string, room_id: number, message_id: string) => {
            return request
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .use(withToken(apiToken))
                .send(objectToQuery({ message_id }))
                .then(requestSuccess);
        },
    },
    getWithId: async (apiToken: string, room_id: number, message_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    putWithId: async (apiToken: string, room_id: number, message_id: string, body: string) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(withToken(apiToken))
            .send(objectToQuery({ body }))
            .then(requestSuccess);
    },
    deleteWithId: async (apiToken: string, room_id: number, message_id: string) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};

export const tasks = {
    get: async (apiToken: string, room_id: number, options: RoomsTasksGetOptions = {}) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks?${objectToQuery(options)}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    post: async (
        apiToken: string, room_id: number, body: string, to_ids: number[], options: RoomsTasksPostOptions = {},
    ) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .use(withToken(apiToken))
            .send(objectToQuery({ body, to_ids, ...options }))
            .then(requestSuccess);
    },
    getWithId: async (apiToken: string, room_id: number, task_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};

export const files = {
    get: async (apiToken: string, room_id: number, options: RoomsFilesGetOptions = {}) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files?${objectToQuery(options)}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    post: async (apiToken: string, room_id: number, file: File, options: RoomsFilesPostOptions = {}) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .use(withToken(apiToken))
            .send(objectToQuery({ file, ...options }))
            .then(requestSuccess);
    },
    getWithId: async (apiToken: string, room_id: number, file_id: string, options: RoomsFilesGetWithIdOptions = {}) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}?${objectToQuery(options)}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};

export const link = {
    get: async (apiToken: string, room_id: string) => {
        return request
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
    post: async (apiToken: string, room_id: number, options: RoomsLinkPostOptions = {}) => {
        return request
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(withToken(apiToken))
            .send(objectToQuery({ ...options }))
            .then(requestSuccess);
    },
    put: async (apiToken: string, room_id: number, options: RoomsLinkPutOptions = {}) => {
        return request
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(withToken(apiToken))
            .send(objectToQuery({ ...options }))
            .then(requestSuccess);
    },
    delete: async (apiToken: string, room_id: number) => {
        return request
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};
