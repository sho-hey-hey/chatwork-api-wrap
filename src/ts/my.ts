import request from "superagent";
import { BASE_URI, CHATWORK_TOKEN, TaskStatus } from "./constants";
import { objectToQuery, requestError, requestSuccess } from "./service";

interface MyTaskGetOptions {
    assigned_by_account_id?: number;
    status?: TaskStatus;
}

const BASE_MY_URI = `${BASE_URI}my`;

export const status = {
    get: async (apiToken: string) => {
        return request
            .get(`${BASE_MY_URI}/status`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};

export const tasks = {
    get: async (apiToken: string, options: MyTaskGetOptions = {}) => {
        return request
            .get(`${BASE_MY_URI}/tasks${objectToQuery(options)}`)
            .set(CHATWORK_TOKEN, apiToken)
            .then(requestSuccess)
            .catch(requestError);
    },
};
