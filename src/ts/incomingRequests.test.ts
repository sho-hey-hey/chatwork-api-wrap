import dotenv from "dotenv";
import { get } from "./incomingRequests";

const config = dotenv.config().parsed ?? {};

describe("incomingRequests", () => {
  it("get", async () => {
    const data = await get(config["CHATWORK_TOKEN"]);
    if (data) {
      expect(Array.isArray(data)).toBeTruthy();
    } else {
      expect(data).toBeNull();
    }
  });
  it.todo("put");
  it.todo("delete");
});
