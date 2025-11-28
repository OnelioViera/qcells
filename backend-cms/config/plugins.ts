export default ({ env }) => ({
  // SEO Plugin
  seo: {
    enabled: true,
  },
  
  // Config Sync Plugin
  'config-sync': {
    enabled: true,
    config: {
      syncDir: 'config/sync/',
      minify: false,
      soft: false,
      importOnBootstrap: false,
    },
  },
  
  // Upload Plugin with Cloudinary (for production)
  upload: {
    config: {
      provider: env('UPLOAD_PROVIDER', 'local'), // Default to local for development
      providerOptions: env('UPLOAD_PROVIDER') === 'cloudinary' ? {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      } : {},
    },
  },
});

