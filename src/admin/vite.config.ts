import { mergeConfig } from 'vite';

export default (config: Record<string, unknown>) => {
  const allowed_hosts = process.env.VITE_ALLOWED_HOSTS?.split(',').map((h) => h.trim()).filter(Boolean);

  if (!allowed_hosts?.length) {
    return config;
  }

  return mergeConfig(config, {
    server: {
      allowedHosts: allowed_hosts,
    },
  });
};
