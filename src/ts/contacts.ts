import axios from "axios";
import { BASE_URI, CHATWORK_TOKEN, Contact } from "./constants";
import { requestError, requestSuccess } from "./service";

export type ContactsGetResponse = Array<Contact>;

const BASE_CONTACTS_URI = `${BASE_URI}contacts`;

/**
 * Get contact list.
 * https://developer.chatwork.com/reference/get-contacts
 */
export async function get(apiToken: string) {
  try {
    const response = await axios.get<ContactsGetResponse>(BASE_CONTACTS_URI, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
