const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs/register'],
  presets: [path.resolve(__dirname, './next-preset.js')]
};