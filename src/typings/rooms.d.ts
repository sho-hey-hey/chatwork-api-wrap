import request from "superagent";
declare type DeleteActionType = "leave" | "delete";
interface RoomsPostOptions {
}
interface RoomsPutWithIdOptions {
}
interface RoomsMembersPutOptions {
}
interface RoomsMessagesGetOptions {
}
interface RoomsMessagesPostOptions {
}
interface RoomsMessagesReadPutOptions {
}
interface RoomsTasksGetOptions {
}
interface RoomsTasksPostOptions {
}
interface RoomsFilesGetOptions {
}
interface RoomsFilesPostOptions {
}
interface RoomsFilesGetWithIdOptions {
}
interface RoomsLinkPostOptions {
}
interface RoomsLinkPutOptions {
}
export declare function get(apiToken: string): Promise<{} | request.ResponseError | null>;
export declare function post(apiToken: string, name: string, members_admin_ids: number[], options: RoomsPostOptions): Promise<{} | request.ResponseError | null>;
export declare function getWithId(apiToken: string, room_id: number): Promise<{} | request.ResponseError | null>;
export declare function putWithId(apiToken: string, room_id: number, options: RoomsPutWithIdOptions): Promise<{} | request.ResponseError | null>;
export declare function deleteWithId(apiToken: string, room_id: number, action_type: DeleteActionType): Promise<{} | request.ResponseError | null>;
export declare const members: {
    get: (apiToken: string, room_id: number) => Promise<{} | request.ResponseError | null>;
    put: (apiToken: string, room_id: number, members_admin_ids: number[], options: RoomsMembersPutOptions) => Promise<{} | request.ResponseError | null>;
};
export declare const messages: {
    get: (apiToken: string, room_id: number, options: RoomsMessagesGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, body: string, options: RoomsMessagesPostOptions) => Promise<{} | request.ResponseError | null>;
    read: {
        put: (apiToken: string, room_id: number, options: RoomsMessagesReadPutOptions) => Promise<{} | request.ResponseError | null>;
    };
    unread: {
        put: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
    };
    getWithId: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
    putWithId: (apiToken: string, room_id: number, message_id: string, body: string) => Promise<{} | request.ResponseError | null>;
    deleteWithId: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
};
export declare const tasks: {
    get: (apiToken: string, room_id: number, options: RoomsTasksGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, body: string, to_ids: number[], options: RoomsTasksPostOptions) => Promise<{} | request.ResponseError | null>;
    getWithId: (apiToken: string, room_id: number, task_id: string) => Promise<{} | request.ResponseError | null>;
};
export declare const files: {
    get: (apiToken: string, room_id: number, options: RoomsFilesGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, file: File, options: RoomsFilesPostOptions) => Promise<{} | request.ResponseError | null>;
    getWithId: (apiToken: string, room_id: number, file_id: string, options: RoomsFilesGetWithIdOptions) => Promise<{} | request.ResponseError | null>;
};
export declare const link: {
    get: (apiToken: string, room_id: string) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, options: RoomsLinkPostOptions) => Promise<{} | request.ResponseError | null>;
    put: (apiToken: string, room_id: number, options: RoomsLinkPutOptions) => Promise<{} | request.ResponseError | null>;
    delete: (apiToken: string, room_id: number) => Promise<{} | request.ResponseError | null>;
};
export {};
