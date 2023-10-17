const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    main: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [new HtmlWebpackPlugin()],

  devServer: {
    compress: true,
    port: 3000,
  },
};
