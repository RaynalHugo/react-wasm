(webpackConfig, { env, paths }) => {
  return webpackConfig;
};
module.exports = {
  webpack: {
    configure: webpackConfig => ({
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
    })
  }
};
