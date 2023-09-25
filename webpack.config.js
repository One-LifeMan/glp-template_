const config = {
    mode: 'none',
    entry: {
        script: './src/js/script.js',
        "index-script": './src/js/index-script.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'eval-source-map',
};

module.exports = config;