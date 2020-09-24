module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/thirdapi': {
                target: 'http://192.168.10.234:1094',
                changeOrigin: true,
                pathRewrite: { '^/thirdapi': '/' }
            },
            '/ssoapi': {
                target: 'http://172.17.8.56:2010',
                changeOrigin: true,
                pathRewrite: { '^/ssoapi': '/' }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `$imgUrl: "${process.env.VUE_APP_IMG_URL}";`
            }
        }
    }
};
