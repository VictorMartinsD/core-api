import request from "supertest";
import { app } from "./app.js";

describe("products", () => {
  it("it should list products", async () => {
    const response = await request(app).get("/products");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
