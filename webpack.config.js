const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app_bundle.js",

    // Tells webpack where to fallback too, see devServer comment below
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  // Gets process.env.NODE_ENV from npm scripts, when webpack in prod mode will do minification
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],

  /* when going "/" in browser react and router hasn't been loaded. Below, this tells 
  webpack instead of trying to handle it like a server just redirect all request to index,
  which will load React + Router and handle it */
  devServer: {
    historyApiFallback: true
  }
};
