import type { IncomingMessage, ServerResponse } from "node:http";
import { URL } from "node:url";

const products = [
  { id: 1, name: "Camiseta", price: 29.99 },
  { id: 2, name: "Jaqueta", price: 129.99 },
  { id: 3, name: "Sapato", price: 59.99 },
];

function sendJson(response: ServerResponse, statusCode: number, body: object) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

export function app(request: IncomingMessage, response: ServerResponse) {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);

  if (request.method === "GET" && requestUrl.pathname === "/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/products") {
    response.setHeader("Content-Type", "application/json");

    sendJson(response, 200, products);
    return;
  }

  sendJson(response, 404, { error: "Route not found" });
}
