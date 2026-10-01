import { z } from "zod";

const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

const clientEnvSchema = z.object({});

const serverEnv = serverEnvSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
});

const clientEnv = clientEnvSchema.parse({});

export const env = {
  ...serverEnv,
  ...clientEnv,
};