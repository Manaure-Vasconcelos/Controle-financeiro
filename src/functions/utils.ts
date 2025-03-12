import { DefineRoutesHandler } from "@settings/types.js";
import { FastifyInstance } from "fastify";

export function defineRoutes(handler: DefineRoutesHandler) {
  return function (server: FastifyInstance, _: {}, done: Function) {
    handler(server)
    done()
  }
}