module.exports = {
    entry: './src/index.js',
    module: {
        experiments: {
            topLevelAwait: true,
        }
    }
};