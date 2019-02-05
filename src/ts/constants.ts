export type TaskStatus = "open" | "done";
export type RoomDeleteActionType = "leave" | "delete";
export type IconPresetType = "group" | "check" |
    "document" | "meeting" | "event" |
    "project" | "business" | "study" |
    "security" | "star" | "idea" | "heart" |
    "magcup" | "beer" | "music" | "sports" |
    "travel";

export const CHATWORK_TOKEN = "X-ChatWorkToken";
export const AUTHORIZATION_TOKEN = "Authorization";
export const BASE_URI = "https://api.chatwork.com/v2/";
export const STATUS_CODE_200 = 200;
