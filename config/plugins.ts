export default ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
    'content-type-builder': {
        enabled: true,
      },
  });
  