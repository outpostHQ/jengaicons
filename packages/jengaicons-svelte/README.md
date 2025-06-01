# Jenga Icons

Jenga Icons is a collection of adaptable icons designed for use in interfaces,
diagrams, and other applications.

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

```tsx
import React from "react"
import ReactDOM from "react-dom"
import { Activity, ActivityFill } from "@jengaicons/react"

const App = () => {
  return (
    <div>
      <Activity />
      <ActivityFill color='#6864d4' size={32} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

## Optimization

Tired of icons hogging your memory by loading all icons ? \
Solution for NextJS is to use [modularizeImports feature](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports)

```ts
// next.config.mjs
import { nextJsModularizeImport } from "@jengaicons/react"

const nextConfig = {
  modularizeImports: {
    "@jengaicons/react": nextJsModularizeImport,
  },
}

export default nextConfig
```

At Outpost, we use nextjs as our primary frontend framework so we've added
solution only for it but we would love to know, what framework you use so we can
add support for those too! Just create a issue

## Global Configuration (uses React Context API)

Jenga Icons simplifies the process of applying a default style to all icons by
utilizing React Context. By creating an `JengaIconContext.Provider` at the root
of the application or at a higher level in the component tree than the icons,
you can pass a configuration object with properties that will serve as the
default style for all icons.

```tsx
import React from "react"
import ReactDOM from "react-dom"
import { Activity, ActivityFill, JengaIconContext } from "@jengaicons/react"

const App = () => {
  return (
    <div>
      <JengaIconContext.Provider
        value={{
          color: "red",
        }}
      >
        <Activity /> {/** icon with red color */}
        <ActivityFill color='blue' /> {/** icon with blue color */}
      </JengaIconContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

In order to style icons differently in different areas of an application, you
have the option to create multiple Contexts. Each Context will define a specific
styling for icons within its respective region. Icons will utilize the nearest
Context above them in the component tree to determine their individual style.

> Important: The context will additionally transmit any supplied SVG props to
> icon instances, offering utility in tasks such as including accessible
> `aria-label`s, `classNames`, and more.

## Props

The icon components can receive all the props that a standard SVG element can,
which includes inline `style` objects, `onClick` handlers, and other properties.
Generally, the key props used to style the icons are:

- **color?**: `string` determines the color of the icon's stroke and fill. It
  accepts CSS color strings, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`,
  named colors. `currentColor` is the default color.
- **size?**: `number | string` specifies the height and width of the icon. It
  accepts values as a number or a string with units in `px`, `%`, `em`, `rem`,
  `pt`, `cm`, `mm`, or `in`.
- **weight?**: `number | string` changes the thinkness / stroke-width of icons.
  Default is `2px` (only applies to regular icons)
- **mirrored?**: `boolean` flips the icon horizontally, which can be helpful in
  languages that use RTL text orientation.
- **alt?**: `string` provides accessible alt text for the icon.
- **style?**: `object` specifies the style prop object which will be passed to
  underlying `<svg />` element

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
