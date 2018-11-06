import request from "superagent";
export declare function get(apiToken: string): Promise<{} | request.ResponseError | null>;
export declare function putWithId(apiToken: string, request_id: string): Promise<{} | request.ResponseError | null>;
export declare function deleteWithId(apiToken: string, request_id: string): Promise<{} | request.ResponseError | null>;
