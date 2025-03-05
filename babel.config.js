module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'], // Corrigido "babel-present-expo" para "babel-preset-expo"
        plugins: [
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    allowUndefined: false,
                },
            ],
        ],
    };
};
