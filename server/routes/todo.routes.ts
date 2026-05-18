import { Hono } from "hono";
import { getTodosByUserID } from "../db/queries";
import { authMiddleware } from "../middleware/auth.middleware";
import { HonoEnv } from "../type";

export const todos = new Hono<HonoEnv>()
  .use(authMiddleware)

  .get("/", async (c) => {
    const user = c.get("user");
    try {
      const todos = await getTodosByUserID(user.id);
      return c.json(todos);
    } catch (error) {
      console.error("Failed to fetch todos: ", error);
      return c.json({ error: "Failed to fetch todos" }, 500);
    }
  });
