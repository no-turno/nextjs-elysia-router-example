import type { Elysia } from "elysia";
import { router } from "./routes";
import { setup } from "./setup";

const app = setup(router as unknown as Elysia<"/api">);

export default app;
