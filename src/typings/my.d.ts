import request from "superagent";
interface MyTaskGetOptions {
}
export declare const status: {
    get: (apiToken: string) => Promise<{} | request.ResponseError | null>;
};
export declare const tasks: {
    get: (apiToken: string, options: MyTaskGetOptions) => Promise<{} | request.ResponseError | null>;
};
export {};
