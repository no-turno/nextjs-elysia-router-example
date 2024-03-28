import Elysia from "elysia";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const setup = (_router_: Elysia<any>) =>
	new Elysia().group("/api", (api) => api.use(_router_));
