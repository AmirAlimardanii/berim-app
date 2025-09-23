import { drizzle } from 'drizzle-orm/libsql';
import env from '~/lib/env'

const db = drizzle({ 
  connection: { 
    url: env.TURSO_DATABASE_URL!, 
    authToken: env.TURSO_AUTH_TOKEN!
  }
});

export default db