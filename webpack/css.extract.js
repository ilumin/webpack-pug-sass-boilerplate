const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextWebpackPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextWebpackPlugin('./css/[name].css')
        ]
    }
};