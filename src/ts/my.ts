import axios from "axios";
import { BASE_URI, CHATWORK_TOKEN, MyTask, TaskStatus } from "./constants";
import { objectToQuery, requestError, requestSuccess } from "./service";

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

const BASE_MY_URI = `${BASE_URI}my`;

export const status = {
  /**
   * Get my status.
   * https://developer.chatwork.com/reference/get-my-status
   */
  get: async (apiToken: string) => {
    try {
      const response = await axios.get<MyStatusGetResponse>(`${BASE_MY_URI}/status`, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
};

export const tasks = {
  /**
   * Get my task list.
   * https://developer.chatwork.com/reference/get-my-tasks
   */
  get: async (apiToken: string, data: MyTasksGetRequest = {}) => {
    try {
      const response = await axios.get<MyTasksGetResponse>(`${BASE_MY_URI}/tasks?${objectToQuery(data)}`, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
};
