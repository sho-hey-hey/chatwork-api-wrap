import axios from "axios";
import { BASE_URI, CHATWORK_TOKEN, Me } from "./constants";
import { requestError, requestSuccess } from "./service";

const BASE_ME_URI = `${BASE_URI}me`;

export type MeGetResponse = Me;

/**
 * Get my info.
 * https://developer.chatwork.com/reference/get-me
 */
export async function get(apiToken: string) {
  try {
    const response = await axios.get<MeGetResponse>(BASE_ME_URI, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
