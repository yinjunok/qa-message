const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'main.js',
    libraryTarget: 'umd',
    pathinfo: false
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'babel-loader',
          'react-hot-loader/webpack',
        ]
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "example"),
          path.resolve(__dirname, "src")
        ],
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          }, {
            loader: "postcss-loader"
          }, {
            loader: "less-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
}