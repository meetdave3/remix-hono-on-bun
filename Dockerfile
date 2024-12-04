FROM oven/bun:slim as builder
WORKDIR /app

# Copy only the files needed for installation
COPY package.json bun.lockb ./

# Install all dependencies (including devDependencies) for build
RUN bun install --frozen-lockfile

# Copy necessary files for build
COPY . .

# Build the application
RUN bun run build

# Production image
FROM oven/bun:slim
WORKDIR /app

# Copy only production dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production --no-cache

# Copy build output and server
COPY --from=builder /app/build ./build
COPY handler.ts .
COPY server.ts .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "run", "server.ts"]