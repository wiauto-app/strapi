import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("MINIO_ACCESS_KEY"),
            secretAccessKey: env("MINIO_SECRET_KEY"),
          },
          endpoint: env("MINIO_ENDPOINT"),
          region: "us-east-1",
          forcePathStyle: true,
          params: {
            Bucket: env("MINIO_BUCKET"),
          },
        },
      },
    }
  }
});

export default config;
