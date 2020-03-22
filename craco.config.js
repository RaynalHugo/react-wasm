(webpackConfig, { env, paths }) => {
  return webpackConfig;
};
module.exports = {
  webpack: {
    configure: webpackConfig => (
      console.log(webpackConfig),
      console.log(webpackConfig.module.rules),
      {
        ...webpackConfig,
        module: {
          ...webpackConfig.module,
          rules: [
            {
              test: /\.wasm$/,
              type: "javascript/auto"
            },
            {
              test: /\.worker$/,
              use: { loader: "worker-loader" }
            },
            ...webpackConfig.module.rules
          ]
        }
      }
    )
  }
};
