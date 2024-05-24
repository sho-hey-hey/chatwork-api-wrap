import { IconPresetType, RoomDeleteActionType, Room, RoomDetail, TaskStatus, RoomAccount, Message, Task, TaskLimitType, FileData, InvitationLink } from "./constants";
export type RoomsGetResponse = Array<Room>;
export interface RoomsPostRequest {
    name: string;
    members_admin_ids: string;
    description?: string;
    icon_preset?: IconPresetType;
    link?: boolean;
    link_code?: string;
    link_need_acceptance?: boolean;
    members_member_ids?: string;
    members_readonly_ids?: string;
}
export interface RoomsPostResponse {
    room_id: number;
}
export type RoomsGetWithIdResponse = RoomDetail;
export interface RoomsPutWithIdRequest {
    name?: string;
    description?: string;
    icon_preset?: IconPresetType;
}
export interface RoomsPutWithIdResponse {
    room_id: number;
}
export interface RoomsDeleteWithIdRequest {
    action_type: RoomDeleteActionType;
}
export type RoomsMembersGetResponse = Array<RoomAccount>;
export interface RoomsMembersPutRequest {
    members_admin_ids: string;
    members_member_ids?: string;
    members_readonly_ids?: string;
}
export interface RoomsMembersPutResponse {
    admin: number[];
    member: number[];
    readonly: number[];
}
export interface RoomsMessagesGetRequest {
    force?: boolean;
}
export type RoomsMessagesGetResponse = Array<Message>;
export interface RoomsMessagesPostRequest {
    body: string;
    self_unread?: boolean;
}
export interface RoomsMessagesPostResponse {
    message_id: string;
}
export interface RoomsMessagesReadPutRequest {
    message_id?: string;
}
export interface RoomsMessagesReadPutResponse {
    unread_num: number;
    mention_num: number;
}
export interface RoomsMessagesUnreadPutRequest {
    message_id: string;
}
export interface RoomsMessagesUnreadPutResponse {
    unread_num: number;
    mention_num: number;
}
export type RoomsMessagesGetWithIdResponse = Message;
export interface RoomsMessagesPutWithIdRequest {
    body: string;
}
export interface RoomsMessagesPutWithIdResponse {
    message_id: string;
}
export interface RoomsMessagesDeleteWithIdResponse {
    message_id: string;
}
export interface RoomsTasksGetRequest {
    account_id?: number;
    assigned_by_account_id?: number;
    status?: TaskStatus;
}
export type RoomsTasksGetResponse = Array<Task>;
export interface RoomsTasksPostRequest {
    body: string;
    to_ids: string;
    limit?: number;
    limit_type?: TaskLimitType;
}
export interface RoomsTasksPostResponse {
    task_ids: number[];
}
export type RoomsTasksGetWithIdResponse = Task;
export interface RoomsTasksStatusPutRequest {
    body: string;
}
export interface RoomsTasksStatusPutResponse {
    task_id: string;
}
export interface RoomsFilesGetRequest {
    account_id?: number;
}
export type RoomsFilesGetResponse = FileData;
export interface RoomsFilesPostRequest {
    file: File;
    message?: string;
}
export interface RoomsFilesPostResponse {
    file_id: number;
}
export interface RoomsFilesGetWithIdRequest {
    create_download_url?: boolean;
}
export type RoomsFilesGetWithIdResponse = FileData;
export type RoomsLinkGetResponse = InvitationLink;
export interface RoomsLinkPostRequest {
    /**
     * minLength: 1
     * maxLength: 50
     * pattern: ^[A-Za-z0-9_-]+$
     */
    code?: string;
    need_acceptance?: number;
    description?: string;
}
export type RoomsLinkPostResponse = InvitationLink;
export interface RoomsLinkPutRequest {
    /**
     * minLength: 1
     * maxLength: 50
     * pattern: ^[A-Za-z0-9_-]+$
     */
    code?: string;
    need_acceptance?: number;
    description?: string;
}
export type RoomsLinkPutResponse = InvitationLink;
export type RoomsLinkDeleteResponse = InvitationLink;
/**
 * Get chat room list.
 * https://developer.chatwork.com/reference/get-rooms
 */
export declare function get(apiToken: string): Promise<RoomsGetResponse | null>;
/**
 * Create chat room.
 * https://developer.chatwork.com/reference/post-rooms
 */
export declare function post(apiToken: string, data: RoomsPostRequest): Promise<RoomsPostResponse | null>;
/**
 * Get chat room info.
 * https://developer.chatwork.com/reference/get-rooms-room_id
 */
export declare function getWithId(apiToken: string, room_id: number): Promise<RoomDetail | null>;
/**
 * Change chat room info.
 * https://developer.chatwork.com/reference/put-rooms-room_id
 */
export declare function putWithId(apiToken: string, room_id: number, options?: RoomsPutWithIdRequest): Promise<RoomsPutWithIdResponse | null>;
/**
 * Delete chat room.
 * https://developer.chatwork.com/reference/delete-rooms-room_id
 */
export declare function deleteWithId(apiToken: string, room_id: number, action_type: RoomDeleteActionType): Promise<"" | null>;
export declare const members: {
    /**
     * Get chat room member list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-members
     */
    get: (apiToken: string, room_id: number) => Promise<RoomsMembersGetResponse | null>;
    /**
     * Change chat room members.
     * https://developer.chatwork.com/reference/put-rooms-room_id-members
     */
    put: (apiToken: string, room_id: number, data: RoomsMembersPutRequest) => Promise<RoomsMembersPutResponse | null>;
};
export declare const messages: {
    /**
     * Get chat room messages.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages
     */
    get: (apiToken: string, room_id: number, data?: RoomsMessagesGetRequest) => Promise<RoomsMessagesGetResponse | null>;
    /**
     * Post message to chat room.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages
     */
    post: (apiToken: string, room_id: number, data: RoomsMessagesPostRequest) => Promise<RoomsMessagesPostResponse | null>;
    read: {
        /**
         * Read message.
         * https://developer.chatwork.com/reference/put-rooms-room_id-messages-read
         */
        put: (apiToken: string, room_id: number, data?: RoomsMessagesReadPutRequest) => Promise<RoomsMessagesReadPutResponse | null>;
    };
    unread: {
        /**
         * Unread message.
         * https://developer.chatwork.com/reference/put-rooms-room_id-messages-unread
         */
        put: (apiToken: string, room_id: number, data: RoomsMessagesUnreadPutRequest) => Promise<RoomsMessagesUnreadPutResponse | null>;
    };
    /**
     * Get chat message.
     * https://developer.chatwork.com/reference/get-rooms-room_id-messages-message_id
     */
    getWithId: (apiToken: string, room_id: number, message_id: string) => Promise<Message | null>;
    /**
     * Update chat message body.
     * https://developer.chatwork.com/reference/put-rooms-room_id-messages-message_id
     */
    putWithId: (apiToken: string, room_id: number, message_id: string, data: RoomsMessagesPutWithIdRequest) => Promise<RoomsMessagesPutWithIdResponse | null>;
    /**
     * Delete chat message.
     * https://developer.chatwork.com/reference/delete-rooms-room_id-messages-message_id
     */
    deleteWithId: (apiToken: string, room_id: number, message_id: string) => Promise<RoomsMessagesDeleteWithIdResponse | null>;
};
export declare const tasks: {
    /**
     * Get task list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-tasks
     */
    get: (apiToken: string, room_id: number, data?: RoomsTasksGetRequest) => Promise<RoomsTasksGetResponse | null>;
    /**
     * Add task.
     * https://developer.chatwork.com/reference/post-rooms-room_id-tasks
     */
    post: (apiToken: string, room_id: number, data: RoomsTasksPostRequest) => Promise<RoomsTasksPostResponse | null>;
    /**
     * Get task info.
     * https://developer.chatwork.com/reference/get-rooms-room_id-tasks-task_id
     */
    getWithId: (apiToken: string, room_id: number, task_id: string) => Promise<Task | null>;
    status: {
        /**
         * Update task status.
         * https://developer.chatwork.com/reference/put-rooms-room_id-tasks-task_id-status
         */
        put: (apiToken: string, room_id: number, task_id: string, data: RoomsTasksStatusPutRequest) => Promise<RoomsTasksStatusPutResponse | null>;
    };
};
export declare const files: {
    /**
     * Get file list.
     * https://developer.chatwork.com/reference/get-rooms-room_id-files
     */
    get: (apiToken: string, room_id: number, data?: RoomsFilesGetRequest) => Promise<FileData | null>;
    /**
     * Upload file.
     * https://developer.chatwork.com/reference/post-rooms-room_id-files
     */
    post: (apiToken: string, room_id: number, data: RoomsFilesPostRequest) => Promise<RoomsFilesPostResponse | null>;
    /**
     * Get file info.
     * https://developer.chatwork.com/reference/get-rooms-room_id-files-file_id
     */
    getWithId: (apiToken: string, room_id: number, file_id: string, options?: RoomsFilesGetWithIdRequest) => Promise<FileData | null>;
};
export declare const link: {
    /**
     * Get invitation link.
     * https://developer.chatwork.com/reference/get-rooms-room_id-link
     */
    get: (apiToken: string, room_id: string) => Promise<InvitationLink | null>;
    /**
     * Create invitation link.
     * https://developer.chatwork.com/reference/post-rooms-room_id-link
     */
    post: (apiToken: string, room_id: number, data?: RoomsLinkPostRequest) => Promise<InvitationLink | null>;
    /**
     * Update invitation link.
     * https://developer.chatwork.com/reference/put-rooms-room_id-link
     */
    put: (apiToken: string, room_id: number, data?: RoomsLinkPutRequest) => Promise<InvitationLink | null>;
    /**
     * Delete invitation link.
     * https://developer.chatwork.com/reference/delete-rooms-room_id-link
     */
    delete: (apiToken: string, room_id: number) => Promise<InvitationLink | null>;
};
