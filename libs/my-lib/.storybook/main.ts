import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: '@storybook/angular',
        options: {},
    },
    staticDirs: [{ from: '../assets', to: '/assets'}],
    docs: {
        defaultName: 'Docs',
    }
};

export default config;
