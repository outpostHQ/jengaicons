# Jenga Icons

Jenga Icons is a collection of adaptable icons designed for use in interfaces, diagrams, and other applications.

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
- **mirrored?**: `boolean` flips the icon horizontally, which can be helpful in languages that use RTL text orientation.
- **alt?**: `string` provides accessible alt text for the icon.

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
