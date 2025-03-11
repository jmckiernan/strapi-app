export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env('API_KEY_1') && env('API_KEY_2')
      ? [env('API_KEY_1'), env('API_KEY_2')] // ✅ Use Render API keys in production
      : ['localKey1', 'localKey2'], // ✅ Use local keys only in development
  },
});
