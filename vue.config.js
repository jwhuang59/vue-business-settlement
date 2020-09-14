module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.10.234:1094',
                changeOrigin: true,
                pathRewrite: { '^/api': '/' }
            }
            // '/request': {
            //     target: 'https://test1-mndash.zzgqsh.com/kanban',
            //     changeOrigin: true,
            //     pathRewrite: { '^/request': '/' }
            // }
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
