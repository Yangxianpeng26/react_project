const path = require("path");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  webpack: {
    // 配置路径别名：将来写路径可以简写
    alias: {
      "@redux": path.resolve(__dirname, "/src/redux/"),
      "@uitils": path.resolve(__dirname, "/src/uitils/"),
      "@config": path.resolve(__dirname, "/src/config/"),
    },
  },
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 375,
        }),
      ],
    },
  },
};
