export type TaskStatus = "open" | "done";
export type TaskLimitType = "none" | "data" | "time";
export type RoomType = "my" | "direct" | "group";
export type RoomDeleteActionType = "leave" | "delete";
export type Role = "admin" | "member" | "readonly";
export type IconPresetType =
  | "group"
  | "check"
  | "document"
  | "meeting"
  | "event"
  | "project"
  | "business"
  | "study"
  | "security"
  | "star"
  | "idea"
  | "heart"
  | "magcup"
  | "beer"
  | "music"
  | "sports"
  | "travel";
export interface Me {
  account_id: number;
  room_id: number;
  name: string;
  chatwork_id: string;
  organization_id: number;
  organization_name: string;
  department: string;
  title: string;
  url: string;
  introduction: string;
  mail: string;
  tel_organization: string;
  tel_extension: string;
  tel_mobile: string;
  skype: string;
  facebook: string;
  twitter: string;
  avatar_image_url: string;
  login_mail: string;
}
export interface SimpleRoom {
  room_id: number;
  name: string;
  icon_path: string;
}
export interface Room extends SimpleRoom {
  type: RoomType;
  role: Role;
  sticky: boolean;
  unread_num: number;
  mention_num: number;
  mytask_num: number;
  message_num: number;
  file_num: number;
  task_num: number;
  last_update_time: number;
}
export interface RoomDetail extends Room {
  description: string;
}
export interface SimpleAccount {
  account_id: number;
  name: string;
  avatar_image_url: string;
}
interface AccountBase extends SimpleAccount {
  chatwork_id: string;
  organization_id: number;
  organization_name: string;
  department: string;
}
export interface RoomAccount extends AccountBase {
  role: Role;
}
export interface Contact extends AccountBase {
  room_id: number;
}
interface TaskBase {
  task_id: number;
  assigned_by_account: SimpleAccount;
  message_id: string;
  body: string;
  limit_time: number;
  status: TaskStatus;
  limit_type: TaskLimitType;
}
export interface Task extends TaskBase {
  account: SimpleAccount;
}
export interface MyTask extends TaskBase {
  room: SimpleRoom;
}
export interface Message {
  message_id: string;
  account: SimpleAccount;
  body: string;
  send_time: number;
  update_time: number;
}
export interface FileData {
  file_id: number;
  account: SimpleAccount;
  message_id: string;
  filename: string;
  filesize: number;
  upload_time: number;
}
export interface InvitationLink {
  public: boolean;
  url?: string;
  need_acceptance?: boolean;
  description?: string;
}
export interface IncomingRequestBase {
  request_id: number;
  account_id: number;
  message: string;
  name: string;
  chatwork_id: string;
  organization_id: number;
  organization_name: string;
  department: string;
  avatar_image_url: string;
}
export interface IncomingRequest extends IncomingRequestBase {
  request_id: number;
}

export const CHATWORK_TOKEN = "X-ChatWorkToken";
export const BASE_URI = "https://api.chatwork.com/v2/";
export const STATUS_CODE = {
  "200_OK": 200,
  "204_NO_CONTENT": 204,
  "300_MULTIPLE_CHOICES": 300,
  "400_BAD_REQUEST": 400,
  "401_UNAUTHORIZED": 401,
  "403_FORBIDDEN": 403,
  "404_NOT_FOUND": 404,
  "429_TOO_MANY_REQUESTS": 429,
} as const;
