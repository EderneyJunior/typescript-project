import { z } from 'zod';
const envSchema = z.object({
    PORT: z.coerce.number().optional()
});
const parsedEnv = envSchema.parse(process.env);
process.env = Object.create({ ...process.env, ...parsedEnv });
