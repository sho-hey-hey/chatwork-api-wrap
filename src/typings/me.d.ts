import { Me } from "./constants";
export type MeGetResponse = Me;
/**
 * Get my info.
 * https://developer.chatwork.com/reference/get-me
 */
export declare function get(apiToken: string): Promise<Me | null>;
