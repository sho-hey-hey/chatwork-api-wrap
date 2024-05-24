import { MyTask, TaskStatus } from "./constants";
export interface MyStatusGetResponse {
    unread_room_num: number;
    mention_room_num: number;
    mytask_room_num: number;
    unread_num: number;
    mention_num: number;
    mytask_num: number;
}
export interface MyTasksGetRequest {
    assigned_by_account_id?: number;
    status?: TaskStatus;
}
export type MyTasksGetResponse = Array<MyTask> | null;
export declare const status: {
    /**
     * Get my status.
     * https://developer.chatwork.com/reference/get-my-status
     */
    get: (apiToken: string) => Promise<MyStatusGetResponse | null>;
};
export declare const tasks: {
    /**
     * Get my task list.
     * https://developer.chatwork.com/reference/get-my-tasks
     */
    get: (apiToken: string, data?: MyTasksGetRequest) => Promise<MyTasksGetResponse>;
};
