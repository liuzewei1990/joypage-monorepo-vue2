const path = require("path");
const createThemeColorReplacerPlugin = require("./config/plugin.config");
function resolve(dir) {
    return path.join(__dirname, dir);
}

const isProd = process.env.NODE_ENV === "production";
// const assetsCDN = {
//     externals: {
//         vue: "Vue",
//         "vue-router": "VueRouter",
//         vuex: "Vuex",
//         axios: "axios"
//     },
//     css: [],
//     js: [
//         "//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
//         "//cdn.jsdelivr.net/npm/vue-router@3.5.1/dist/vue-router.min.js",
//         "//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js",
//         "//cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"
//     ]
// };

const vueConfig = {
    configureWebpack: {
        plugins: []
        // output: {
        //     library: `minapp1`,
        //     libraryTarget: "umd", // 把微应用打包成 umd 库格式
        //     uniqueName: `webpackJsonp_minapp1`
        // }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set("@$", resolve("src"));
        config.resolve.alias.set("@", resolve("node_modules/vpdsmart/src"));
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    "border-radius-base": "2px"
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },

    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    productionSourceMap: false,
    lintOnSave: undefined,
    transpileDependencies: []
};

if (!isProd) {
    vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin());
}

module.exports = vueConfig;
