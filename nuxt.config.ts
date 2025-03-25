// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  css: ['assets/style.scss'],

  app: {
    baseURL: process.env.BASE_URL,
    head: {
      charset: 'utf-8',
      title: 'あつまれどうぶつの森の時計風オーバーレイ',
      meta: [
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@ririo08' },
        {
          name: 'twitter:title',
          content: 'あつまれどうぶつの森の時計風オーバーレイ',
        },
        {
          name: 'twitter:description',
          content:
            'あつ森をプレイ中に出てくる左下の時計風のOBS向けオーバーレイです！',
        },
        {
          name: 'twitter:image',
          content:
            'https://ririo08.github.io/Atsumori-clock-Overlay/img/summary.jpg',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      isDev: '',
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
