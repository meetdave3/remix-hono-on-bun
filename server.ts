import { Hono } from "hono";
import { Serve } from "bun";
import { ServerBuild } from "@remix-run/node";
import { serveStatic } from "hono/bun";
import * as build from "./build/server/index";
import { remix } from "./handler";

const server = new Hono();

server.use("*", serveStatic({ root: "./build/client/" }));

let finalBuild: ServerBuild = build as unknown as ServerBuild;

if (process.env.NODE_ENV === "development") {
  finalBuild = await import('virtual:remix/server-build') 
}

server.use(
  "*",
  remix({
    build: finalBuild as unknown as ServerBuild,
    mode: process.env.NODE_ENV as "development" | "production",
  })
);

export default {
  port: 3000,
  fetch: server.fetch,
} satisfies Serve;
