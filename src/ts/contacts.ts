import request from "superagent";
import { BASE_URI, CHATWORK_TOKEN } from "./constants";
import { requestError, requestSuccess } from "./service";

const BASE_CONTACTS_URI = `${BASE_URI}contacts`;

export async function get(apiToken: string) {
    return request
        .get(`${BASE_CONTACTS_URI}`)
        .set(CHATWORK_TOKEN, apiToken)
        .then(requestSuccess)
        .catch(requestError);
}
