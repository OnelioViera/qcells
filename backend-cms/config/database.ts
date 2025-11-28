import path from 'path';

export default ({ env }) => {
  // Use PostgreSQL in production, SQLite in development
  const client = env('DATABASE_CLIENT', env('NODE_ENV') === 'production' ? 'postgres' : 'sqlite');

  const connections = {
    postgres: {
      connection: env('DATABASE_URL') ? {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', true) && env('NODE_ENV') === 'production' ? {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
        } : false,
      } : {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'password'),
        ssl: env.bool('DATABASE_SSL', false) ? {
          rejectUnauthorized: false,
        } : false,
        schema: env('DATABASE_SCHEMA', 'public'),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
