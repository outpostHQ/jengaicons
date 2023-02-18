# Jenga Icons

Jenga Icons is a collection of adaptable icons designed for use in interfaces, diagrams, and other applications.

[![NPM Version](https://img.shields.io/npm/v/@jengaicons/react.svg?style=flat)](https://www.npmjs.com/package/@jengaicons/react)
[![Discord](https://img.shields.io/discord/793832892781690891?color=7389D8&label=chat%20on%20Discord&logo=Discord&logoColor=ffffff)](https://discord.gg/sHnHPnAPZj)

## Installation

```sh
# with npm
npm install @jengaicons/react

# with yarn
yarn add @jengaicons/react

# with pnpm
pnpm add @jengaicons/react
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import { Activity, ActivityFill } from "@jengaicons/react";

const App = () => {
  return (
    <div>
      <Activity />
      <ActivityFill color="#6864d4" size={32} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Props

The icon components can receive all the props that a standard SVG element can, which includes inline `style` objects, `onClick` handlers, and other properties. Generally, the key props used to style the icons are:

- **color?**: `string` determines the color of the icon's stroke and fill. It accepts CSS color strings, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, and `currentColor`.
- **size?**: `number | string` specifies the height and width of the icon. It accepts values as a number or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, or `in`.
- **weight?**: `number | string` changes the thinkness / stroke-width of icons. Default is `2px`
- **mirrored?**: `boolean` flips the icon horizontally, which can be helpful in languages that use RTL text orientation.
- **alt?**: `string` provides accessible alt text for the icon.
- **style?**: `object` specifies the style prop object which will be passed to underlying `<svg />` element

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
