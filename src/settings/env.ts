import { z } from "zod";

const envSchema = z.object({
  PORT: z.number({ coerce: true }),
})

export const env = envSchema.parse(process.env)