FROM oven/bun:1
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN bun install
RUN bun run build
EXPOSE 3000
WORKDIR /app
CMD ["bun", "run", "server.ts"]