# React Starter Boilerplate

 - [x] React 17
 - [x] ESLint Setup
 - [x] Tailwind CSS Setup
 - [x] TypeScript Integration
 - [x] Husky Integration
 - [x] Stylelint Setup
 - [x] Tailwind CSS Components
 - [x] Dark Mode
 - [ ] Headless UI Integration
 - [ ] Storybook
 - [ ] React Table
 - [ ] React Hook Form
 - [ ] React Query + Fetch API
 - [ ] E2E Testing
 - [ ] Unit Testing

## Documentation

 - [React Modal](http://reactcommunity.org/react-modal/)
 - [React Popper](https://popper.js.org/react-popper/)
 - [React Query](https://react-query.tanstack.com/overview)
 - [Tailwind CSS](https://tailwindcss.com/docs)
 - [React Hook Form](https://react-hook-form.com/get-started)
 - [React Table](https://react-table.tanstack.com/docs/overview)
 - [React Transition Group](https://reactcommunity.org/react-transition-group/)
 - [React Spinners](https://loading.io/css/)
 - [React tooltop](https://wwayne.github.io/react-tooltip/)

## React Components
 - [x] Accordian
 - [x] Badge
 - [x] Breadcrumb
 - [x] Buttons
 - [x] Cards
 - [x] Carousel
 - [x] Dropdowns
 - [x] Forms
 - [x] InputGroup
 - [x] Modals
 - [x] Navbar
 - [x] Spinners
 - [x] Tabs
 - [x] Table
 - [x] Tooltips
 - [ ] Sidebars / Offcanvas

## Issues to keep an eye on

1. **babel-loader** version mismatch between **create-react-app** and **storybook**


  > *Cause:* Storybook requires babel-loader **v8.2.2** but React requires **v8.1.0**
  >
  > *Solution:* Current resolution is to use yarn resolution to downgrade *babel-loader* to **v8.1.0**
  >
  > Storybook Repo Issue: https://github.com/storybookjs/storybook/issues/5183
  > React Repo Issue: https://github.com/facebook/create-react-app/issues/10123

2. Storybook server start fails due error in **react-docgen-typescript**

  > *Error:*
  > `node_modules/react-docgen-typescript/lib/parser.js:475`
  > `var trimmedText = (tag.text || '').trim();`
  >
  > *Cause:* Due to mismatch in TypeScript and TS type JSDocGen
  >
  > *Solution:* Current solution is to disable **react-docgen-typescript** in storybook config in *./storybook/main.js*. [See More](https://github.com/storybookjs/storybook/issues/10790)
  >
  > Storybook Repo Issue: https://github.com/storybookjs/storybook/issues/10790
  > React Docgen Typescript Repo Issue: https://github.com/styleguidist/react-docgen-typescript/issues/356


## NOTES

1. Tailwind CSS classes do not work right out of the box with Storybook.

> As Tailwind CSS used post-css and autoprefixer to build which we manually configure using craco. Same needs to be done for Storybook to be able to use tailwind css.
>
> We need to modify the webpack config in `.storybook/main.js`, then import our css files in `./storybook/preview.js`.