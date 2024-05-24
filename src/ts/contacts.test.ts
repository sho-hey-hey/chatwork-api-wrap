import dotenv from "dotenv";
import { get } from "./contacts";

const config = dotenv.config().parsed ?? {};

describe("contacts", () => {
  it("get", async () => {
    const data = await get(config["CHATWORK_TOKEN"]);
    if (data === null) throw new Error("data is not found.");
    if (data.length === 0) throw new Error("data length is 0.");

    expect(Array.isArray(data)).toBeTruthy();
    expect("account_id" in data[0]).toBeTruthy();
    expect("room_id" in data[0]).toBeTruthy();
    expect("name" in data[0]).toBeTruthy();
    expect("chatwork_id" in data[0]).toBeTruthy();
    expect("organization_id" in data[0]).toBeTruthy();
    expect("organization_name" in data[0]).toBeTruthy();
    expect("department" in data[0]).toBeTruthy();
    expect("avatar_image_url" in data[0]).toBeTruthy();
  });
});
