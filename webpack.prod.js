const path = require("path");

const config = {
    mode: "production",
    entry: {
        script:         path.resolve(__dirname, "./src/js/script.js"),
        "index-script": path.resolve(__dirname, "./src/js/index-script.js"),
    },
    output: {
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = config;