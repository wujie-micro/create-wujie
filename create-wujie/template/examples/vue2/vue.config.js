module.exports = {
  transpileDependencies: ["element-ui", "ant-design-vue"],
  publicPath: "./",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "6100",
  },
  lintOnSave: false,
};
