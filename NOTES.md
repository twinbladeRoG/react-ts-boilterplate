# Notes

The purpose of this document is to note down any challenges during development faced by the developers so that it can be passed down to the other developers who might work on it in the future.

## 2021-06-20

### Tailwind CSS classes do not work right out of the box with Storybook.

As Tailwind CSS uses post-css and autoprefixer to build which we manually configure using craco. Same needs to be done for Storybook to be able to use tailwind css.

We need to modify the webpack config in `.storybook/main.js`, then import our css files in `./storybook/preview.js`.

---

### Current Headless UI has less props for customization as in v1. Check for future releases

As tailwind CSS has on javascript involved like bootstrap, so it has no interactive element build in like modals, dropdown, etc. For this we have @headless-ui, but it lacks many functionalities.