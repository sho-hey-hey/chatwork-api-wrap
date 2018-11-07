import request from "superagent";
import { BASE_URI, CHATWORK_TOKEN } from "./constants";
import { requestError, requestSuccess } from "./service";

const BASE_INCOMING_REQUESTS_URI = `${BASE_URI}incoming_requests`;

export async function get(apiToken: string) {
    return request
        .get(BASE_INCOMING_REQUESTS_URI)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

export async function putWithId(apiToken: string, request_id: string) {
    return request
        .put(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}

export async function deleteWithId(apiToken: string, request_id: string) {
    return request
        .delete(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
