import dotenv from "dotenv";
import { get } from "./me";

const config = dotenv.config().parsed ?? {};

describe("me", () => {
  it("get", async () => {
    const data = await get(config["CHATWORK_TOKEN"]);
    if (data === null) throw new Error("data is not found.");

    expect("account_id" in data).toBeTruthy();
    expect("room_id" in data).toBeTruthy();
    expect("name" in data).toBeTruthy();
    expect("chatwork_id" in data).toBeTruthy();
    expect("organization_id" in data).toBeTruthy();
    expect("organization_name" in data).toBeTruthy();
    expect("department" in data).toBeTruthy();
    expect("title" in data).toBeTruthy();
    expect("url" in data).toBeTruthy();
    expect("introduction" in data).toBeTruthy();
    expect("mail" in data).toBeTruthy();
    expect("tel_organization" in data).toBeTruthy();
    expect("tel_extension" in data).toBeTruthy();
    expect("tel_mobile" in data).toBeTruthy();
    expect("skype" in data).toBeTruthy();
    expect("facebook" in data).toBeTruthy();
    expect("twitter" in data).toBeTruthy();
    expect("avatar_image_url" in data).toBeTruthy();
    expect("login_mail" in data).toBeTruthy();
  });
});
