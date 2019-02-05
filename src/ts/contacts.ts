import request from "superagent";
import { BASE_URI } from "./constants";
import { requestSuccess } from "./service";
import { withToken } from "./request";

const BASE_CONTACTS_URI = `${BASE_URI}contacts`;

export async function get(apiToken: string) {
    return request
        .get(`${BASE_CONTACTS_URI}`)
        .use(withToken(apiToken))
        .then(requestSuccess);
}
