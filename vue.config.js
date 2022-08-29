module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Lotus',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    short_name: "Lotus",
    icons: [
      {
        "src": "./public/img/icons/android-chrome-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    start_url: "https://lotus-0.web.app/",
    display: "standalone",

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/registerServiceWorker.js',
      // ...other Workbox options...
    }
  }
}
