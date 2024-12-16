import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devServer, { defaultOptions } from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/bun'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    devServer({
      adapter,
      entry: './server.ts',
      exclude: [...defaultOptions.exclude, '/assets/**', '/app/**'],
      injectClientScript: false
    })
  ],
});
