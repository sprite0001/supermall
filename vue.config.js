
//自定义配置文件 和默认配置文件取交集
module.exports = {
  configureWebpack:{
    resolve:{
      //别名
      alias:{
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views":"@/views"
      }
    }
  }
}
