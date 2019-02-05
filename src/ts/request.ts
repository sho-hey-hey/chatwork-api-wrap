import request from "superagent";
import { AUTHORIZATION_TOKEN, CHATWORK_TOKEN } from "./constants";

export const withToken = (apiToken: string) => (request: request.Request) : request.Request => {
    request.set(CHATWORK_TOKEN, apiToken)
        .set(AUTHORIZATION_TOKEN, `Bearer ${apiToken}`);
    return request;
};
