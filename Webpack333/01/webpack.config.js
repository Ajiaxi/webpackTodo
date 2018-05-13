module.exports = {
  entry: {
    app: "./app.js"
  },

  output: {
    filename: "[name].[hash:8].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        //use: "babel-loader",
        use: {
          loader: "babel-loader",
          options: {
            // presets: [
            //   "@babel/preset-env", //babel语法支持
            //   {
            //     targets: {
            //       browsers: ["last 2 versions"]
            //       //chrome: "52"
            //     }
            //   }
            // ] //规则
          }
        },
        exclude: "/node_modules/"
      }
    ]
  }
};
