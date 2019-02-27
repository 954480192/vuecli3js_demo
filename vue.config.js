
const path = require('path')
const vuxLoader = require('vux-loader')
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    runtimeCompiler: true,// 包含运行时编译器的 Vue 构建版本
    // css相关配置
    css: {
        // 配置高于chainWebpack中关于css loader的配置
        modules: true, // 是否开启支持‘foo.module.css’样式
        extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: { // css预设器配置项
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            stylus: {}
        }
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: 'localhost',
        port: 8080,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        proxy: {                                        // 配置跨域
            '/api':{
                target:'http://123.45.678.123/api/user', //源地址
                changeOrigin:true,                  //改变源
                ws:true,                            //是否代理websockets
                pathRewrite:{
                    '^/api':''
                }
            }
        },                                           // 配置跨域处理,只有一个代理
        before: app => { }
    },
    // webpack配置
    chainWebpack: () => { },
    // vux 相关配置,使用vux-ui
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
        vuxLoader.merge(config, {
            options: {},
            plugins: [{
                name: 'vux-ui'
            },{
                name: 'duplicate-style'
            }]
        })
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: ['.js', '.vue', '.json',".css"],
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components')
                }
            }
        })
    },
    // 第三方插件配置
    pluginOptions: {}
}