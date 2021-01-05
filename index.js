const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (api, { pluginOptions } = {}) => {
  const pdfjsPath = pluginOptions && pluginOptions.pdfjsPath || 'public/pdfjs/'
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('copy-pdfjs-viewer')
      .use(CopyPlugin, [[
          {
            from: path.join(__dirname, './assets'),
            to: path.join(api.service.context, pdfjsPath)
          }
      ]])
  })
}
