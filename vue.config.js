module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.17.8.5:1094',
                changeOrigin: true,
                pathRewrite: { '^/api': '/' }
            }
        },
        port: 80
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `$imgUrl: "${process.env.VUE_APP_IMG_URL}";`
            }
        }
    }
};
// target: 'http://172.17.8.5:1094',
