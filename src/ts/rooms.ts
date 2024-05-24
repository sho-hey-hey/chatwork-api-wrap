import axios, { AxiosResponse } from "axios";
import {
  BASE_URI,
  CHATWORK_TOKEN,
  IconPresetType,
  RoomDeleteActionType,
  Room,
  RoomDetail,
  TaskStatus,
  RoomAccount,
  Message,
  Task,
  TaskLimitType,
  FileData,
  InvitationLink,
} from "./constants";
import { objectToQuery, requestError, requestSuccess } from "./service";

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

const BASE_ROOMS_URI = `${BASE_URI}rooms`;

/**
 * Get chat room list.
 * https://developer.chatwork.com/reference/get-rooms
 */
export async function get(apiToken: string) {
  try {
    const response = await axios.get<RoomsGetResponse>(BASE_ROOMS_URI, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
/**
 * Create chat room.
 * https://developer.chatwork.com/reference/post-rooms
 */
export async function post(apiToken: string, data: RoomsPostRequest) {
  try {
    const response = await axios.post<RoomsPostResponse, AxiosResponse<RoomsPostResponse>, RoomsPostRequest>(
      BASE_ROOMS_URI,
      data,
      {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      },
    );
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
/**
 * Get chat room info.
 * https://developer.chatwork.com/reference/get-rooms-room_id
 */
export async function getWithId(apiToken: string, room_id: number) {
  try {
    const response = await axios.get<RoomsGetWithIdResponse>(`${BASE_ROOMS_URI}/${room_id}`, {
      headers: {
        [CHATWORK_TOKEN]: apiToken,
      },
    });
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
/**
 * Change chat room info.
 * https://developer.chatwork.com/reference/put-rooms-room_id
 */
export async function putWithId(apiToken: string, room_id: number, options: RoomsPutWithIdRequest = {}) {
  try {
    const response = await axios.put<
      RoomsPutWithIdResponse,
      AxiosResponse<RoomsPutWithIdResponse>,
      RoomsPutWithIdRequest
    >(
      `${BASE_ROOMS_URI}/${room_id}`,
      {
        ...options,
      },
      {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      },
    );
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}
/**
 * Delete chat room.
 * https://developer.chatwork.com/reference/delete-rooms-room_id
 */
export async function deleteWithId(apiToken: string, room_id: number, action_type: RoomDeleteActionType) {
  try {
    const response = await axios.delete<"", AxiosResponse<"">, RoomsDeleteWithIdRequest>(
      `${BASE_ROOMS_URI}/${room_id}`,
      {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
        data: {
          action_type,
        },
      },
    );
    return requestSuccess(response);
  } catch (e) {
    throw requestError(e);
  }
}

export const members = {
  /**
   * Get chat room member list.
   * https://developer.chatwork.com/reference/get-rooms-room_id-members
   */
  get: async (apiToken: string, room_id: number) => {
    try {
      const response = await axios.get<RoomsMembersGetResponse>(`${BASE_ROOMS_URI}/${room_id}/members`, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Change chat room members.
   * https://developer.chatwork.com/reference/put-rooms-room_id-members
   */
  put: async (apiToken: string, room_id: number, data: RoomsMembersPutRequest) => {
    try {
      const response = await axios.put<
        RoomsMembersPutResponse,
        AxiosResponse<RoomsMembersPutResponse>,
        RoomsMembersPutRequest
      >(`${BASE_ROOMS_URI}/${room_id}/members`, data, {
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

export const messages = {
  /**
   * Get chat room messages.
   * https://developer.chatwork.com/reference/get-rooms-room_id-messages
   */
  get: async (apiToken: string, room_id: number, data: RoomsMessagesGetRequest = {}) => {
    try {
      const response = await axios.get<RoomsMessagesGetResponse>(
        `${BASE_ROOMS_URI}/${room_id}/messages?${objectToQuery(data)}`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Post message to chat room.
   * https://developer.chatwork.com/reference/get-rooms-room_id-messages
   */
  post: async (apiToken: string, room_id: number, data: RoomsMessagesPostRequest) => {
    try {
      const response = await axios.post<
        RoomsMessagesPostResponse,
        AxiosResponse<RoomsMessagesPostResponse>,
        RoomsMessagesPostRequest
      >(`${BASE_ROOMS_URI}/${room_id}/messages`, data, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  read: {
    /**
     * Read message.
     * https://developer.chatwork.com/reference/put-rooms-room_id-messages-read
     */
    put: async (apiToken: string, room_id: number, data: RoomsMessagesReadPutRequest = {}) => {
      try {
        const response = await axios.put<
          RoomsMessagesReadPutResponse,
          AxiosResponse<RoomsMessagesReadPutResponse>,
          RoomsMessagesReadPutRequest
        >(`${BASE_ROOMS_URI}/${room_id}/messages/read`, data, {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        });
        return requestSuccess(response);
      } catch (e) {
        throw requestError(e);
      }
    },
  },
  unread: {
    /**
     * Unread message.
     * https://developer.chatwork.com/reference/put-rooms-room_id-messages-unread
     */
    put: async (apiToken: string, room_id: number, data: RoomsMessagesUnreadPutRequest) => {
      try {
        const response = await axios.put<
          RoomsMessagesUnreadPutResponse,
          AxiosResponse<RoomsMessagesUnreadPutResponse>,
          RoomsMessagesUnreadPutRequest
        >(`${BASE_ROOMS_URI}/${room_id}/messages/unread`, data, {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        });
        return requestSuccess(response);
      } catch (e) {
        throw requestError(e);
      }
    },
  },
  /**
   * Get chat message.
   * https://developer.chatwork.com/reference/get-rooms-room_id-messages-message_id
   */
  getWithId: async (apiToken: string, room_id: number, message_id: string) => {
    try {
      const response = await axios.get<RoomsMessagesGetWithIdResponse>(
        `${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Update chat message body.
   * https://developer.chatwork.com/reference/put-rooms-room_id-messages-message_id
   */
  putWithId: async (apiToken: string, room_id: number, message_id: string, data: RoomsMessagesPutWithIdRequest) => {
    try {
      const response = await axios.put<
        RoomsMessagesPutWithIdResponse,
        AxiosResponse<RoomsMessagesPutWithIdResponse>,
        RoomsMessagesPutWithIdRequest
      >(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`, data, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Delete chat message.
   * https://developer.chatwork.com/reference/delete-rooms-room_id-messages-message_id
   */
  deleteWithId: async (apiToken: string, room_id: number, message_id: string) => {
    try {
      const response = await axios.delete<
        RoomsMessagesDeleteWithIdResponse,
        AxiosResponse<RoomsMessagesDeleteWithIdResponse>
      >(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`, {
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
   * Get task list.
   * https://developer.chatwork.com/reference/get-rooms-room_id-tasks
   */
  get: async (apiToken: string, room_id: number, data: RoomsTasksGetRequest = {}) => {
    try {
      const response = await axios.get<RoomsTasksGetResponse>(
        `${BASE_ROOMS_URI}/${room_id}/tasks?${objectToQuery(data)}`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Add task.
   * https://developer.chatwork.com/reference/post-rooms-room_id-tasks
   */
  post: async (apiToken: string, room_id: number, data: RoomsTasksPostRequest) => {
    try {
      const response = await axios.post<
        RoomsTasksPostResponse,
        AxiosResponse<RoomsTasksPostResponse>,
        RoomsTasksPostRequest
      >(`${BASE_ROOMS_URI}/${room_id}/tasks`, data, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Get task info.
   * https://developer.chatwork.com/reference/get-rooms-room_id-tasks-task_id
   */
  getWithId: async (apiToken: string, room_id: number, task_id: string) => {
    try {
      const response = await axios.get<RoomsTasksGetWithIdResponse>(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  status: {
    /**
     * Update task status.
     * https://developer.chatwork.com/reference/put-rooms-room_id-tasks-task_id-status
     */
    put: async (apiToken: string, room_id: number, task_id: string, data: RoomsTasksStatusPutRequest) => {
      try {
        const response = await axios.put<
          RoomsTasksStatusPutResponse,
          AxiosResponse<RoomsTasksStatusPutResponse>,
          RoomsTasksStatusPutRequest
        >(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}/status`, data, {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        });
        return requestSuccess(response);
      } catch (e) {
        throw requestError(e);
      }
    },
  },
};

export const files = {
  /**
   * Get file list.
   * https://developer.chatwork.com/reference/get-rooms-room_id-files
   */
  get: async (apiToken: string, room_id: number, data: RoomsFilesGetRequest = {}) => {
    try {
      const response = await axios.get<RoomsFilesGetResponse>(
        `${BASE_ROOMS_URI}/${room_id}/files?${objectToQuery(data)}`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Upload file.
   * https://developer.chatwork.com/reference/post-rooms-room_id-files
   */
  post: async (apiToken: string, room_id: number, data: RoomsFilesPostRequest) => {
    try {
      const response = await axios.post<
        RoomsFilesPostResponse,
        AxiosResponse<RoomsFilesPostResponse>,
        RoomsFilesPostRequest
      >(`${BASE_ROOMS_URI}/${room_id}/files`, data, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Get file info.
   * https://developer.chatwork.com/reference/get-rooms-room_id-files-file_id
   */
  getWithId: async (apiToken: string, room_id: number, file_id: string, options: RoomsFilesGetWithIdRequest = {}) => {
    try {
      const response = await axios.get<RoomsFilesGetWithIdResponse>(
        `${BASE_ROOMS_URI}/${room_id}/files/${file_id}?${objectToQuery(options)}`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
};

export const link = {
  /**
   * Get invitation link.
   * https://developer.chatwork.com/reference/get-rooms-room_id-link
   */
  get: async (apiToken: string, room_id: string) => {
    try {
      const response = await axios.get<RoomsLinkGetResponse>(`${BASE_ROOMS_URI}/${room_id}/link`, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Create invitation link.
   * https://developer.chatwork.com/reference/post-rooms-room_id-link
   */
  post: async (apiToken: string, room_id: number, data: RoomsLinkPostRequest = {}) => {
    try {
      const response = await axios.post<
        RoomsLinkPostResponse,
        AxiosResponse<RoomsLinkPostResponse>,
        RoomsLinkPostRequest
      >(`${BASE_ROOMS_URI}/${room_id}/link`, data, {
        headers: {
          [CHATWORK_TOKEN]: apiToken,
        },
      });
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Update invitation link.
   * https://developer.chatwork.com/reference/put-rooms-room_id-link
   */
  put: async (apiToken: string, room_id: number, data: RoomsLinkPutRequest = {}) => {
    try {
      const response = await axios.put<RoomsLinkPutResponse, AxiosResponse<RoomsLinkPutResponse>, RoomsLinkPutRequest>(
        `${BASE_ROOMS_URI}/${room_id}/link`,
        data,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
  /**
   * Delete invitation link.
   * https://developer.chatwork.com/reference/delete-rooms-room_id-link
   */
  delete: async (apiToken: string, room_id: number) => {
    try {
      const response = await axios.delete<RoomsLinkDeleteResponse, AxiosResponse<RoomsLinkDeleteResponse>>(
        `${BASE_ROOMS_URI}/${room_id}/link`,
        {
          headers: {
            [CHATWORK_TOKEN]: apiToken,
          },
        },
      );
      return requestSuccess(response);
    } catch (e) {
      throw requestError(e);
    }
  },
};
