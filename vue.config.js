// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
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

  // webpack-dev-server 相关配置
  devServer: {
    // 调试端口
    // port: 8989
  }
  //其他配置....
};
