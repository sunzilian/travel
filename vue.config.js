module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/': { //使用"/api"来代替"http://baidu.com"
                // target: 'http://118.24.102.119:18080', //源地址
                // target: 'http://0d05825f.ngrok.io:8080', //源地址
                target: 'http://172.22.38.163', //源地址
                changeOrigin: true, //改变源
                pathRewrite: {
                    '^/': '/' //路径重写
                }
            }
        }
    }
}