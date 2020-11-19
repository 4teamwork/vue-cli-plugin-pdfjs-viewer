const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('copy-pdfjs-viewer')
      .use(CopyPlugin, [[
          {
            from: path.join(__dirname, './assets'),
            to: path.join(api.service.context, 'public/pdfjs/')
          }
      ]])
  })
}
