const {
  override,
  addBabelPlugin,
  addLessLoader,
  fixBabelImports
} = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  addBabelPlugin('react-hot-loader/babel'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)
