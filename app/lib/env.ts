import * as z from "zod"; 


const EnvScheme = z.object({
    NODE_ENV: z.string(),
    TURSO_DATABASE_URL: z.string(),
    TURSO_AUTH_TOKEN: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),

})

export type EnvScheme = z.infer<typeof EnvScheme>;

export default EnvScheme.parse(process.env)