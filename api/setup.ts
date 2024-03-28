import Elysia from "elysia";
import { type BasePath, basePath } from "./config";

export const setup = <T = Elysia<BasePath>>(_router_: Elysia) =>
	new Elysia().group(basePath, (api) => api.use(_router_)) as T;

export const mount =
	(router: Elysia<BasePath>) => (req: Request, _: Response) =>
		router.handle(req);
