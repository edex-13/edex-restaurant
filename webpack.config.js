const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   mode: 'production',
   output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@images': path.resolve(__dirname, 'public/img/'),
      },
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
                  options: {minimize: true},
               },
            ],
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            type: "asset",
            test: /\.(png|jpg)$/i
         }
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         injet: true,
         template: path.resolve(__dirname, 'public/index.html'),
         filename: './index.html',
      }),
   ],
};
