const path = require('path');

const WORKSPACE = path.resolve(__dirname);
const devConfig = {
    mode: 'development',
    entry: {
        entry: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.join(WORKSPACE, 'dist/'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 7777
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ]
            }
        ]
    },
    resolve: {

    },
};

module.exports = devConfig;
