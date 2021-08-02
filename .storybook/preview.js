import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Color Palette', 'Typography'],
    },
  },
  /** To remove default padding storybook canvas */
  layout: 'fullscreen',
};

/**
 * Container for implementing tailwind dark mode
 */
export const decorators = [
  Story => (
    <main className="dark:bg-dark p-7">
      <Story />
    </main>
  ),
];
