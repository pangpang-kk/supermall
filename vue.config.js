/**
 * Created by liukui on 2020/9/15.
 */
module.exports ={
  configureWebpack: {
    resolve:{
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}