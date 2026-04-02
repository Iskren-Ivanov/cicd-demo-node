const request = require("supertest");
const app = require("../app");

describe("CI/CD Demo App", () => {
  test("GET / should return app message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("CI/CD Demo App is running!");
  });

  test("GET /health should return status ok", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});
