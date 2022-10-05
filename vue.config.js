const path = require("path");
const cdn = require("./cdn.js");
const createThemeColorReplacerPlugin = require("./config/plugin.config");

function resolve(dir) {
    return path.join(__dirname, dir);
}
const isProd = process.env.NODE_ENV === "production";

const vueConfig = {
    configureWebpack: {
        plugins: [],
        externals: cdn.externals
    },
    chainWebpack: (config) => {
        config.resolve.alias.set("@$", resolve("src"));
        // config.resolve.alias.set("@", resolve("node_modules/vpdsmart/src"));
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
