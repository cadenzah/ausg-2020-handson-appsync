# React Project Bolierplate

## Features

- Image Loading
- Redux
  - `redux-thunk`
- React Router
- Sass supported
- Code Splitting
  - Create a Component, `import` it in `/pages/index.js` using `withSplitting()`
- Environment Variables
  - Set it in `webpack.config.js`
- Webpack Dev Server
- Storybook for React
- Other optimizations when building

## Index

### `public`
- `index.html` for initial entry point to users
- `/assets` for all static resources used in this web page

### `src`
- `/components` for presentational unit components
  - `/base` for large components
  - `/common` for minimal component unit
    - `index.js`
    - `component.css`
    - `component.test.js`
- `/containers` for container components
- `/pages` for page per each routings
  - All routings indexed in `App.js`
- `/utils` for utility functions
- `/redux` for redux store and reducers settings in Ducks pattern

## How to build

1. Run `npm run build`
2. Use a build output from `/build` directory

## How to run `webpack-dev-server`

1. Run `npm run dev`
2. Visit `http://localhost:3000` (Automatically opens)

## How to run **Storybook**

1. Run `npm run storybook`
2. Visit Storybook UI (Automatically opens)

## Update Report

### v1.7 (2019-12-27)
- added Sass support
  - added `webpack.config.js` for Storybook config 
- changed `.css` to `.scss`

### v1.6 (2019-12-11)
- added build option for production build

### v1.5 (2019-11-22)
- added `url-loader` and support for image loading from server's directory

### v1.4 (2019-11-21)
- added tips for using react-router's `withRouter()` HoC.

### v1.3 (2019-11-15)
- added `/templates` directory: general purpose template components
  - example: `<Article />` component
- bugfix when using `react-router` with `wds`
- added example for `react-router`
- added **Tips** section:
  - relevant tips

### v1.2 (2019-11-14)
- added comments with core logic explanations
- added `redux-thunk`, loaders for style
- added **Storybook** features

### v1.1 (2019-11-11)
- added `redux` basic sample codes
- changed directory structures

### v1.0 (2019-11-9)
Initial boilerplate checkout

## Appendix

### If you want to use images in pages

You can simply load static images which are uploaded in web server's directory by using specific URI indicating the resources.

```js
<img src="assets/images/BlueMountains.jpg" />
```

Files have to be located in `public/assets` directory, and the URI should include prefix of `assets/`. Subdirectories are able to customized. See `webpack.config.js` for more detailed configurations.

### Tips for using React Router

#### Webpack Dev Server

As Webpack Dev Server(WDS) does not serve `index.html` for routes except `/` as default config, we should set relevant configuration.

```js
// webpack.config.js
module.exports = {
  output: {
    publicPath: '/'
  },

  // ...
  devServer: {
    histroyApiFallback: true
  }
}
```

You should set `publicPath` property to `/`, so that the WDS can understand real root (/) even when you are on subroutes. [See this article](https://stackoverflow.com/a/50179280/9341051).

#### Storybook

If your component use `withRouter()` HoC and use relevant props within itself(i.e. `history.push()`), that component has to be wrapped with `<Router />`. You can use `<MemoryRouter />` to mock the routing environment.

```js
// Component.stories.js
import { MemoryRouter } from 'react-router'

storiesOf('MainButton', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('default', () => (
      <ComponentWithRouter />
    )
  )
```
