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
  layout: 'fullscreen',
};

export const decorators = [
  Story => (
    <main className="dark:bg-dark min-h-screen p-7">
      <Story />
    </main>
  ),
];
