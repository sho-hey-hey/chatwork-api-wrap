import request from "superagent";
import { BASE_URI } from "./constants";
import { requestSuccess } from "./service";
import { withToken } from "./request";

const BASE_ME_URI = `${BASE_URI}me`;

export async function get(apiToken: string) {
    return request
        .get(`${BASE_ME_URI}`)
        .use(withToken(apiToken))
        .then(requestSuccess);
}
