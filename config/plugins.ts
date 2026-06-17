import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1566,
        large: 1280,
        medium: 768,
        small: 640,
      },
      optimizeSettings: {
        jpeg: {
          quality: 85,
        },
        png: {
          compressionLevel: 9,
          effort: 6,
        },
        webp: {
          quality: 80,
          effort: 6,
        },
        avif: {
          quality: 60,
          effort: 8,
          chromaSubsampling: '4:2:0',
        },
      },
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
    },
  }
});

export default config;
