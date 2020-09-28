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
                target: 'http://10.20.30.16:2010',
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
