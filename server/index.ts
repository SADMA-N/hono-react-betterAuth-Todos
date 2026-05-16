import { Hono } from "hono";
import { getTodos } from "./db/queries";
import { auth } from "./lib/auth";

const app = new Hono().basePath("/api");

const route = app
  .on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw))
  .get("/todos", async (c) => {
    try {
      const todos = await getTodos();
      return c.json(todos);
    } catch (err) {
      return c.json({ error: "Failed to fetch todos" }, 500);
    }
  })
  .get("/people", (c) => {
    return c.json([
      { id: 1, name: "Turag" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });
export type AppType = typeof route;
export default app;
