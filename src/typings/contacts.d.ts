import { Contact } from "./constants";
export type ContactsGetResponse = Array<Contact>;
/**
 * Get contact list.
 * https://developer.chatwork.com/reference/get-contacts
 */
export declare function get(apiToken: string): Promise<ContactsGetResponse | null>;
