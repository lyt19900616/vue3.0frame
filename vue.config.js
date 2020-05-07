module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://192.168.52.181:8086', //接口域名
            changeOrigin: true,             //是否跨域
            ws: true,                       //是否代理 websockets
            secure: false,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/api': ''
              }
            }
          }
      } 
}