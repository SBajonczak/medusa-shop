const { loadEnv, defineConfig } = require('@medusajs/framework/utils');
const path = require('path');

// loadEnv(process.env.NODE_ENV || 'development', process.cwd());
loadEnv(process.env.NODE_ENV || 'development', process.cwd());

module.exports = defineConfig({
  admin: {
    disable: false,
    vite: config => {
      config.server.allowedHosts = ['YOUR-DOMAIN']
      return config
    }
  },
  projectConfig: {
    projectConfig: {
      databaseDriverOptions: { connection: { ssl: { rejectUnauthorized: false } } }
    },

    databaseUrl: process.env.DATABASE_URL || "postgres://postgres:supersecret@172.17.0.2/postgres?sslmode=require",
    http: {
      storeCors: process.env.STORE_CORS || 'http://localhost:8000,https://docs.medusajs.com',
      adminCors: process.env.ADMIN_CORS || 'http://localhost:5173,http://localhost:9000,https://docs.medusajs.com',
      authCors: process.env.AUTH_CORS || 'http://localhost:5173,http://localhost:9000,http://localhost:8000,https://docs.medusajs.com',
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    workerMode:'shared',
    redisUrl: process.env.REDIS_URL || '',

  },
  plugins: [
   
    {
      resolve: 'medusa-payment-manual',
      options: {
        manualPayment: true
      }
    }
  ]
});