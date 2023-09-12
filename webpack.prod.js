const config = {
    mode: 'production',
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
};

module.exports = config;