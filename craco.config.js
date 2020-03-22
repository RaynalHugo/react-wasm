module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.wasm$/,
            type: "javascript/auto"
            //   loaders: ["arraybuffer-loader"]
          },
          {
            test: /\.worker\.js$/,
            use: { loader: "worker-loader" }
          }
        ]
      },
      resolve: {
        extensions: [".js", ".wasm"]
      }
    },
    plugins: []
  }
};
