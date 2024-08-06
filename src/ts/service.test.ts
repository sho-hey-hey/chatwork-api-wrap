import { objectToQuery, requestError, requestSuccess } from "./service";
import { AxiosResponse } from "axios";
import { AxiosHeaders } from "axios";

const createAxiosResponse = <T>(status: number, data: T): AxiosResponse<T> => {
  const headers = new AxiosHeaders();
  return {
    config: {
      headers,
    },
    data,
    headers,
    status,
    statusText: "",
  };
};

describe("services", () => {
  describe("requestSuccess", () => {
    it("status is 199", async () => {
      expect(requestSuccess(createAxiosResponse(199, "NG"))).toBeNull();
    });
    it("status is 200", async () => {
      expect(requestSuccess(createAxiosResponse(200, "OK"))).toBe("OK");
    });
    it("status is 299", async () => {
      expect(requestSuccess(createAxiosResponse(200, "OK"))).toBe("OK");
    });
    it("status is 300", async () => {
      expect(requestSuccess(createAxiosResponse(300, "NG"))).toBeNull();
    });
  });
  describe("requestError", () => {
    it("object", async () => {
      const obj = { message: "message" };
      expect(requestError(obj)).toBe(obj);
    });
  });
  describe("objectToQuery", () => {
    it.each`
      obj                                  | result
      ${{}}                                | ${""}
      ${{ a: 1 }}                          | ${"a=1"}
      ${{ a: 1, b: "2" }}                  | ${"a=1&b=2"}
      ${{ a: 1, b: 2, c: [] }}             | ${"a=1&b=2&c="}
      ${{ a: 1, b: 2, c: [1, "2", true] }} | ${"a=1&b=2&c=1%2C2%2Ctrue"}
      ${{ a: 1, b: 2, c: [], d: true }}    | ${"a=1&b=2&c=&d=1"}
      ${{ a: 1, b: 2, c: [], d: false }}   | ${"a=1&b=2&c=&d=0"}
    `('$obj tobe "$result"', async ({ obj, result }) => {
      expect(objectToQuery(obj)).toBe(result);
    });
  });
});
