const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "boilerplate";
      return args;
    });
  },
  configureWebpack: {
    devtool: "source-map",
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/css/color.scss"; 
      
        `,
      },
    },
  },
});
