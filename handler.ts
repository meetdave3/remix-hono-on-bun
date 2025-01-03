import type { AppLoadContext, ServerBuild } from "react-router";
import type { Context } from "hono";

import { createRequestHandler } from "react-router";
import { createMiddleware } from "hono/factory";

export interface RemixMiddlewareOptions {
	build: ServerBuild;
	mode?: "development" | "production";
	getLoadContext?(c: Context): Promise<AppLoadContext> | AppLoadContext;
}

export function remix({
	mode,
	build,
	getLoadContext = (c) => c.env as unknown as AppLoadContext,
}: RemixMiddlewareOptions) {
	return createMiddleware(async (c) => {
		const requestHandler = createRequestHandler(build, mode);
		const loadContext = getLoadContext(c);
		return await requestHandler(
			c.req.raw,
			loadContext instanceof Promise ? await loadContext : loadContext,
		);
	});
} 
