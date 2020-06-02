module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'RNaveen99',
    theme_color: '#1a1c1b',
    iconPaths: [
      {
        src: './img/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: './img/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    start_url: '.',
    display: 'standalone',
    background_color: 'black',
  },
}
