import request from "superagent";
import { BASE_URI, TaskStatus } from "./constants";
import { objectToQuery, requestSuccess } from "./service";
import { withToken } from "./request";

interface MyTaskGetOptions {
    assigned_by_account_id?: number;
    status?: TaskStatus;
}

const BASE_MY_URI = `${BASE_URI}my`;

export const status = {
    get: async (apiToken: string) => {
        return request
            .get(`${BASE_MY_URI}/status`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};

export const tasks = {
    get: async (apiToken: string, options: MyTaskGetOptions = {}) => {
        return request
            .get(`${BASE_MY_URI}/tasks?${objectToQuery(options)}`)
            .use(withToken(apiToken))
            .then(requestSuccess);
    },
};
