import axios from "axios";
import { BASE_URI, CHATWORK_TOKEN, IncomingRequest, IncomingRequestBase } from "./constants";
import { requestError, requestSuccess } from "./service";

export type IncomingRequestsGetResponse = Array<IncomingRequest> | null;
export type IncomingRequestsPutResponse = IncomingRequestBase;
export type IncomingRequestsDeleteResponse = null;

const BASE_INCOMING_REQUESTS_URI = `${BASE_URI}incoming_requests`;

/**
 * Get incoming request list.
 * https://developer.chatwork.com/reference/get-incoming_requests
 */
export async function get(apiToken: string) {
  try {
    const response = await axios.get<IncomingRequestsGetResponse>(BASE_INCOMING_REQUESTS_URI, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}

/**
 * Approve incoming request.
 * https://developer.chatwork.com/reference/put-incoming_requests-request_id
 */
export async function putWithId(apiToken: string, request_id: string) {
  try {
    const response = await axios.put<IncomingRequestsPutResponse>(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}

/**
 * Reject incoming request.
 * https://developer.chatwork.com/reference/delete-incoming_requests-request_id
 */
export async function deleteWithId(apiToken: string, request_id: string) {
  try {
    const response = await axios.delete<IncomingRequestsDeleteResponse>(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
