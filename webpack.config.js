const path = require('path');

module.exports = {
  mode : "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    ],
  },
  devServer : {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true
    },
  }
};