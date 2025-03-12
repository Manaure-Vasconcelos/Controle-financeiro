import fastify, { FastifyInstance } from 'fastify'
import cors from "@fastify/cors"
import autoload from "@fastify/autoload"
import path, { dirname } from 'node:path';
import "@settings/env.js"
import { env } from '@settings/env.js';
import { fileURLToPath } from 'node:url';

const server: FastifyInstance = fastify();

server.register(cors, {
  origin: "*"
})

const __dirname = dirname(fileURLToPath(import.meta.url));
server.register(autoload, {
  dir: path.join(__dirname, "routes"),
  routeParams: true
})

server.addHook("onRoute", ({ method, path }) => {
  if (method === "HEAD" || method === "OPTIONS") return
  console.log(`Route ${method} ${path}`)
})

const port = env.PORT || 3000

server.listen({ port, host: "0.0.0.0" }).catch(err => {
  console.error(err)
  process.exit(1)
}).then(() => {
  console.log(`Server listening on port ${port}`)
})