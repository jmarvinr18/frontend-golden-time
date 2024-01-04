// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Golden Time Food Suplement',
      link: [
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/npm/instantsearch.css@8.1.0/themes/reset-min.css"
        },
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
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js',
        }
      ]
    }
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/algolia'
  ],
  algolia: {
    apiKey: 'b3a5bb09f2b7b1862b1870e078bb7f74',
    applicationId: 'QEI3QTVDIN',
    instantSearch: {
      theme: 'algolia'
    }
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
})
