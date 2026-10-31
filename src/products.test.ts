import request from "supertest";
import { app } from "./app.js";

describe("products", () => {
  it("it should list products", async () => {
    const response = await request(app).get("/products");
    console.log(response.body);
  });
});
