import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => {
  const is_production = env('NODE_ENV') === 'production';
  const trust_proxy = env.bool('PROXY', is_production);

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', ''),
    proxy: trust_proxy ? { koa: true } : false,
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};

export default config;
