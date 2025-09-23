import { defineConfig } from 'drizzle-kit';
import env from './app/lib/env.ts'


export default defineConfig({
  out: './app/lib/db/migrations',
  schema: './app/lib/db/schema/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === 'development'? undefined : env.TURSO_AUTH_TOKEN!
  },
  casing:'snake_case',
});
