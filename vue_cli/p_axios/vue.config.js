const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    https:true,
    publicpath:'',
    proxy:{
      '/myApi':{
        target:'https://www.baidu.com/',
        changeOrigin:true,
        secure:false,
        pathRewrite:{ 
          '^/myApi':''
        }
      }
    }
  }
})
