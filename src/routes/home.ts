import { defineRoutes } from "@functions/utils.js";

export default defineRoutes(app => {
  app.get("/", async (_req, reply) => {
    reply.status(200).send({ message: "Hello, world!" })
  })
})