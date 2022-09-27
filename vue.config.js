const { defineConfig } = require("@vue/cli-service");
// const cdn = require("./cdn.js");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        // externals: cdn.externals
    },
    chainWebpack: (config) => {
        config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
    }
});
