const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
   webpackFinal: async (config: any) => {
      config.resolve.plugins = [
         ...(config.resolve.plugins || []),
         new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
         }),
      ]
      return config
   },
}

export default {
   // ...
   framework: {
      // name: '@storybook/react-webpack5', // Remove this
      name: "@storybook/nextjs", // Add this
      options: {},
   },
}
