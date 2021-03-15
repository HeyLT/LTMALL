module.exports = {
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
