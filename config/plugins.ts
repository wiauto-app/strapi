import type { Core } from '@strapi/strapi';

/**
 * Upload → Cloudflare R2 (S3-compatible) vía @strapi/provider-upload-aws-s3.
 *
 * Escrituras: R2_S3_ENDPOINT (API de cuenta).
 * Lecturas/URLs en CMS: R2_PUBLIC_URL (CDN / media.wiauto.es).
 *
 * Importante R2:
 * - region: "auto"
 * - ACL debe ir explícitamente a undefined (si se omite, el provider pone public-read y R2 falla)
 * - forcePathStyle + checksum WHEN_REQUIRED (mismo criterio que Nest)
 */
const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('R2_PUBLIC_URL'),
        rootPath: env('R2_ROOT_PATH', 'strapi'),
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
          endpoint: env('R2_S3_ENDPOINT'),
          region: 'auto',
          forcePathStyle: true,
          requestChecksumCalculation: 'WHEN_REQUIRED',
          responseChecksumValidation: 'WHEN_REQUIRED',
          params: {
            Bucket: env('R2_BUCKET_NAME'),
            // R2 no soporta ACLs; hay que declarar la clave para evitar el default public-read
            ACL: undefined,
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;
