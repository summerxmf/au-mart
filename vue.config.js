// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath:'./',//vue-cli3.3+新版本使用
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  chainWebpack: config => {
    //路径配置
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("styles", resolve("src/assets/scss"))
      .set("api", resolve("src/api"))
      .set("components", resolve("src/components"))
      .set("pages", resolve("src/pages"))
      .set("api", resolve("src/api"))
      .set("store", resolve("src/store"))
      .set("config", resolve("src/config"));
  },

 
 


};
