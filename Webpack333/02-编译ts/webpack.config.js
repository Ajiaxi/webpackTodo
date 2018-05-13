module.exports = {
  entry: {
    app: "./src/app.ts"
  },

  output: {
    filename: "[name].[hash:8].js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        //use: "babel-loader",
        use: {
          loader: "ts-loader"
        },
        exclude: "/node_modules/"
      }
    ]
  }
};
