const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   mode: 'development',
   output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
   },
   resolve: {
      extensions: ['.js'],
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
            use: ['style-loader','css-loader', 'sass-loader'],
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         injet: true,
         template: path.resolve(__dirname, 'public/index.html'),
         filename: './index.html',
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
   },
};
