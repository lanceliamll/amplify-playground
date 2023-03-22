// fetch users and check all of the fields are fetch
const { describe, it, expect } = require("@jest/globals");
const { handler } = require("../../src");

describe("Fetch Users in the API", () => {
  const testName = "read";

  it("should fetch all of the fields in the API", async () => {
    const result = await handler(testName);
    console.log("Lambda", result);
  });
});
