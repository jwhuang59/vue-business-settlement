module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
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
