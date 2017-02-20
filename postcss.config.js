// POST CSS PLUGINS
const PostCSSConfig = function(variables = {}) {
  return [
    require('postcss-import')(),
    require('postcss-assets')(),
    require('cssnano')(),
    require('autoprefixer')()
  ]
}

module.exports = PostCSSConfig
