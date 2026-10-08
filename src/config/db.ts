import { Pool } from 'pg';
import { env } from './env';

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 10,
});

pool.on('error', (err) => {
  console.error('Unexpected idle client error', err);
});