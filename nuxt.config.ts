// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  app: {
    head: {
      script: [
        {
          defer: true,
          src: 'https://plausible.io/js/plausible.js',
        },
      ]
    }
  }
})
