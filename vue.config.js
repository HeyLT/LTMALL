module.exports = {
  //这个配置是在执行build后，解决dist文件路径错误的问题
  publicPath: './',
  configureWebpack: {
    resolve: {
      //设置路径别名，避免出现../../../
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'conponents': '@/conponents',
        'network': '@/network',
        'views': '@/views',
      },
    },
  },
};

