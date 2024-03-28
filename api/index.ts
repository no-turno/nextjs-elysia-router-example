import type { Elysia } from "elysia";
import { router } from "./routes";
import { setup } from "./setup";
import type { BasePath } from "./config";

const app = setup<Elysia<BasePath>>(router as unknown as Elysia);

export { app as api };
