const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
     module: {
         rules: [
           {
             test: /\.js$|jsx/,
             use: 'babel-loader',
             exclude: /node_modules/,
           },
           {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
          },
                   {
                    test: /\.html$/,
                    use: 'html-loader'
                      },
                            {
                              test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
                             type: 'asset/resource',
                           },
                           {
                             test: /\.svg$/,
                             type: 'asset/resource',
                             generator: {
                               filename: path.join('icons', '[name].[contenthash][ext]'),
                             },
                           },
                           {
                                   test: /\.(woff2?|eot|ttf|otf)$/i,
                                   type: 'asset/resource',
                                 },

                                 
                                 
         ],
       },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    
    new FileManagerPlugin({
         events: {
        onStart: {
        delete: ['dist'],
                },
               },
             }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
            }),
          
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};