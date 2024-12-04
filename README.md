# bun-hono-remix (beta) 🚀

Free from the constraints of serverless architectures, rising from the realms of Node.js and leaving behind the legendary Express middleware, emerges a Remix application, flourishing on the Bun runtime, riding on the lightweight and futuristic Hono middleware, serving the world wide web with greater will from it's even tinier server.

Includes the following configuration:

- Remix v2.15
- Bun runtime + Bun server
- Hono v4 middleware
- Vite v6
- Prettier
- ESlint
- React 18.3
- Tailwind CSS
- Production ready Docker (image size ~79mb)
- Fly.io (deploy at ~$2 per month)
- Quick deploys with GitHub Actions (avg. duration ~35s)
- Vite HMR + Watch Bun server with one script
- Launch & debug dev server with "Bun for Visual Studio Code" extension

## Development

Install Bun, recommended: v1.1.38

Experience the fastest way to install node modules, run:

```shellscript
bun i
```

Run the dev server:

```shellscript
bun run dev
```

This starts the Vite dev server and also listens for changes on the Bun server. 

## Production

Ensure you have set the `NODE_ENV` environment variable to `production` in the `.env` file:

```dotenv
NODE_ENV=production
```

Build and start the production server:

```shellscript
bun run build
```

```shellscript
bun run start
```

## Deployment

Deploy the Bun app using the production-ready Dockerfile 🐳 on Fly.io with:

```sh
fly launch
```

Works fine with the bare minimum machine configuration (shared-cpu-1x / 256mb RAM). Less than 100mb memory footprint.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
