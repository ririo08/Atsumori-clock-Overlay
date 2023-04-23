// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/style.scss'],
  app: {
    head: {
      charset: 'utf-8',
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
})
