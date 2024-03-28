import { treaty } from "@elysiajs/eden";
import { router } from "./routes";

const api = treaty(router);

const env = await api.env({ mode: "development" }).get();
await api.env({ mode: "development" }).post({
	key: "port",
	value: "3000",
});
await api.env({ mode: "development" }).post({
	key: "hostname",
	value: "localhost",
});
const newEnv = await api.env({ mode: "development" }).get();

console.log("old env", env.data);
console.log("new env", newEnv.data);
