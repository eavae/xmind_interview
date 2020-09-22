module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
    resolve: {
      extensions: ['.ts', '.js', '.vue'],
    },
  },
}
