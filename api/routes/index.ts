import { Elysia, t } from "elysia";

export const router = new Elysia()
	.state("env", {
		development: {} as Record<string, string>,
		production: {} as Record<string, string>,
	})
	.get("/", () => "hi")
	.get("/test", () => "Hello from Elysia :)")
	.post(
		"/env/:mode",
		({ store, params: { mode }, body: { value, key } }) => {
			store.env[mode as keyof typeof store.env][key] = value;
			return {
				status: 200,
			};
		},
		{
			params: t.Object({
				mode: t.String({
					pattern: "development|production",
					examples: "development",
				}),
			}),
			body: t.Object({
				value: t.String(),
				key: t.String(),
			}),
		},
	)
	.get(
		"/env/:mode",
		({ params: { mode }, store }) => store.env[mode as keyof typeof store.env],
	);
