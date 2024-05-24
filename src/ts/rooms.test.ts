// import dotenv from "dotenv";
// import { get, post, getWithId, putWithId, deleteWithId, members, messages, tasks, files, link } from "./rooms";

// const config = dotenv.config().parsed ?? {};

describe("rooms", () => {
  it.todo("get");
  it.todo("getWithId");
  it.todo("post");
  it.todo("putWithId");
  it.todo("deleteWithId");

  describe("members", () => {
    it.todo("get");
    it.todo("put");
  });

  describe("messages", () => {
    it.todo("get");
    it.todo("getWithId");
    it.todo("post");
    it.todo("deleteWithId");
    it.todo("putWithId");

    describe("read", () => {
      it.todo("put");
    });

    describe("unread", () => {
      it.todo("put");
    });
  });

  describe("tasks", () => {
    it.todo("get");
    it.todo("getWithId");
    it.todo("post");

    describe("status", () => {
      it.todo("put");
    });
  });

  describe("files", () => {
    it.todo("get");
    it.todo("getWithId");
    it.todo("post");
  });

  describe("link", () => {
    it.todo("get");
    it.todo("post");
    it.todo("put");
    it.todo("delete");
  });
});
