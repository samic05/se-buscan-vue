const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      '^/missing/':{
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      },
    }
  }
});
