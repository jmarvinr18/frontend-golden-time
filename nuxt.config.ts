// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      dir: '~/static_pages',
      publicDir: '~/static_pages'
    }
  },
  app: {
    head: {
      title: 'Golden Time Food Suplement',
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.quilljs.com/1.3.6/quill.bubble.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/utils.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.quilljs.com/1.3.6/quill.js',
          body: true
        }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
})
