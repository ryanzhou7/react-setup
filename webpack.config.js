const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
    }),

    /* Allow us to copy a file to our webpack output, we need this to tell netify where to redirect to
    when we have deployed. This will copy the _redirects to the dist folder */
    new CopyPlugin([{ from: "_redirects" }])
  ],

  /* when going "/" in browser react and router hasn't been loaded. Below, this tells 
  webpack instead of trying to handle it like a server just redirect all request to index,
  which will load React + Router and handle it */
  devServer: {
    historyApiFallback: true
  }
};
