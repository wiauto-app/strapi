import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL'),
  port: env.int('PORT', 1337),
  proxy: { koa: true },
  app: {
    keys: env.array('APP_KEYS'),
  },
  mcp: {
    enabled: env.bool('MCP_ENABLED', true),
    connectTimeoutMs: env.int('MCP_CONNECT_TIMEOUT_MS', 5000),
    requestTimeoutMs: env.int('MCP_REQUEST_TIMEOUT_MS', 60000),
  },
});

export default config;
