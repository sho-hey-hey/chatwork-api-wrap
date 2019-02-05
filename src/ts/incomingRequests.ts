import request from "superagent";
import { BASE_URI } from "./constants";
import { requestSuccess } from "./service";
import { withToken } from "./request";

const BASE_INCOMING_REQUESTS_URI = `${BASE_URI}incoming_requests`;

export async function get(apiToken: string) {
    return request
        .get(BASE_INCOMING_REQUESTS_URI)
        .use(withToken(apiToken))
        .then(requestSuccess);
}

export async function putWithId(apiToken: string, request_id: string) {
    return request
        .put(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .use(withToken(apiToken))
        .then(requestSuccess);
}

export async function deleteWithId(apiToken: string, request_id: string) {
    return request
        .delete(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .use(withToken(apiToken))
        .then(requestSuccess);
}
