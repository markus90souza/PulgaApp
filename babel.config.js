module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@contracts": "./src/contracts",
          },
        },
      ],
    ],
  };
};
