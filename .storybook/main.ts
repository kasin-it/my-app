import type { StorybookConfig } from "@storybook/nextjs"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const config: StorybookConfig = {
   stories: [
      "../stories/**/*.mdx",
      "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
   ],
   addons: [
      "@storybook/addon-onboarding",
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@chromatic-com/storybook",
      "@storybook/addon-interactions",
   ],
   webpackFinal: async (config: any) => {
      config.resolve.plugins = [
         ...(config.resolve.plugins || []),
         new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
         }),
      ]
      return config
   },
   framework: {
      name: "@storybook/nextjs",
      options: {},
   },
   docs: {
      autodocs: "tag",
   },
   staticDirs: ["..\\public"],
}
export default config
