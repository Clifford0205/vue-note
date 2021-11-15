module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH, // 預設為/ 所有html下的js css 連結都會是/js/xx,在輸出到web server 路徑會有問題,需用./
  css: {
    sourceMap: process.env.NODE_ENV === 'production' ? false : true // 开启 CSS source maps
  },
  configureWebpack: {
    performance: {
      maxEntrypointSize: 3120000,
      maxAssetSize: 3120000
    }
  }
};
