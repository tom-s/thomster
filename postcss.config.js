// POST CSS PLUGINS
const PostCSSConfig = function(variables = {}) {
  return [
    require('postcss-import')(),
    require('postcss-assets')(),
    require('postcss-cssnext'),
    require('cssnano')()
  ]
}

module.exports = PostCSSConfig
