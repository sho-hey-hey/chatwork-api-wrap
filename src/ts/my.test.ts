import dotenv from "dotenv";
import { status, tasks } from "./my";

const config = dotenv.config().parsed ?? {};

describe("my", () => {
  describe("status", () => {
    it("get", async () => {
      const data = await status.get(config["CHATWORK_TOKEN"]);
      if (!data) throw new Error("data is null.");

      expect(typeof data.mention_num).toBe("number");
      expect(typeof data.mention_room_num).toBe("number");
      expect(typeof data.mytask_num).toBe("number");
      expect(typeof data.mytask_room_num).toBe("number");
      expect(typeof data.unread_num).toBe("number");
      expect(typeof data.unread_room_num).toBe("number");
    });
  });
  describe("tasks", () => {
    it("get", async () => {
      const data = await tasks.get(config["CHATWORK_TOKEN"]);
      if (data && data.length > 0) {
        expect(Array.isArray(data)).toBeTruthy();
        expect(typeof data[0].assigned_by_account).toBe("object");
        expect(typeof data[0].body).toBe("string");
        expect(typeof data[0].limit_time).toBe("number");
        expect(typeof data[0].limit_type).toBe("string");
        expect(typeof data[0].message_id).toBe("string");
        expect(typeof data[0].room).toBe("object");
        expect(typeof data[0].status).toBe("string");
        expect(typeof data[0].task_id).toBe("number");
      } else {
        expect(data).toBeNull();
      }
    });
  });
});
