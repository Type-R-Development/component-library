/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, options) {
    // Add your configuration here
    // config.server = { fs: { strict: false } };
    // config.build = { assetsDir: 'test' };
    config.base = 'https://type-r-development.github.io/component-library/';
    return config;
  },
};
export default config;
