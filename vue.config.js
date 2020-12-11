let path = require('path')
let glob = require('glob')

function getEntry(globPath) {
  let entries = {}, basename, tmp, pathname, appname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = basename; // 正确输出js和html的路径
    // console.log(pathname)
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      filename: tmp[2]
    };
  });
  return entries;
}

let resolve = dir => path.resolve(__dirname, dir)
let htmls = getEntry('./src/pages/**/*.html');
// console.log(htmls);
module.exports = {
  productionSourceMap: false,
  pages: htmls,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        options.limit = 10000
        return options
      })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('#/mock', resolve('mock'))
  },
  devServer: {
    port: 8050,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
}

