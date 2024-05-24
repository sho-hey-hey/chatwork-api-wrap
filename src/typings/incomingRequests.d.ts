import { IncomingRequest, IncomingRequestBase } from "./constants";
export type IncomingRequestsGetResponse = Array<IncomingRequest> | null;
export type IncomingRequestsPutResponse = IncomingRequestBase;
export type IncomingRequestsDeleteResponse = null;
/**
 * Get incoming request list.
 * https://developer.chatwork.com/reference/get-incoming_requests
 */
export declare function get(apiToken: string): Promise<IncomingRequestsGetResponse>;
/**
 * Approve incoming request.
 * https://developer.chatwork.com/reference/put-incoming_requests-request_id
 */
export declare function putWithId(apiToken: string, request_id: string): Promise<IncomingRequestBase | null>;
/**
 * Reject incoming request.
 * https://developer.chatwork.com/reference/delete-incoming_requests-request_id
 */
export declare function deleteWithId(apiToken: string, request_id: string): Promise<null>;
