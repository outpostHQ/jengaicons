# Jenga-Icons

> 🚨&nbsp;&nbsp;Jenga-Icons is still in early stages of development, so this means you can expect some bugs.
> As much as we'll try not to break
> existing API's, occasionally it _might_ happen.

Jenga-Icons is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

- 1000+ icons and counting (all the icons will be added soon)
- Regular, Fill, and Duotone
- Designed at 16 x 16px to read well small and scale up big
- Raw stroke information retained to fine-tune the style

## Usage

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ActivityFill, ActivityRegular } from '@jengaicons/react'

const App = () => {
  return (
    <div>
      <Horse />
      <ActivityFill color='#AE2983' size={32} />
      <ActivityRegular color='teal' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.
- **alt?**: `string` – Add accessible alt text to an icon.

### Context

Phosphor takes advantage of React Context to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import {
  JengaIconContext,
  ActivityFill,
  ActivityRegular,
} from '@jengaicons/react'

const App = () => {
  return (
    <JengaIconContext.Provider
      value={{
        color: 'red',
        size: 32,
        mirrored: false,
      }}
    >
      <div>
        <ActivityFill /> {/* I'm red, 32px, mirrored!*/}
        <ActivityRegular /> {/* Me too! */}
      </div>
    </JengaIconContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

> **Note:** The context will also pass any provided SVG props down to icon instances, which can be useful E.G. in adding accessible `aria-label`s, `classNames`, etc.

### Composability

<img src="../../meta/cube-rotate.svg" width="128" align="right" />

Components can accept arbitrary SVG elements as children, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```jsx
const RotatingCube = () => {
  return (
    <Cube color='darkorchid' weight='duotone'>
      <animate
        attributeName='opacity'
        values='0;1;0'
        dur='4s'
        repeatCount='indefinite'
      ></animate>
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='5s'
        from='0 0 0'
        to='360 0 0'
        repeatCount='indefinite'
      ></animateTransform>
    </Cube>
  )
}
```

> **Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 32x32 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "@jengaui/react";
...
<Icon.ActivityFill />
<Icon.ActivityRegular size="24px" />
```

## Getting Started

Export your SVGs that are in your Figma project easily via CLI.

## Pre-requisties

- You will need a DEV_TOKEN (See Step 5 of Setup)
- Your Icons are in a single Frame
- Each icon is a Figma Component (Select Icon and use the shortcut key ⌥⌘K)

### Output

Your SVGs will be generated in `assets` folder

### Setup

1. `yarn install`
2. Select the frame your icons are in
3. Copy the URL in the browser; it should look similar to `https://www.figma.com/file/xxxxxxxxxxxxxxxxxxxxxx/Jenga-Icons?node-id=6362%3A2`
4. Run `yarn env` and paste in your URL copied from step 3 when prompted. This will generate a `.env` file
5. Generate a DEV_TOKEN a.k.a Personal Access Token by going to Help and Account > Account Settings > Personal Access Token
6. Add your DEV_TOKEN from step 5 into `.env` file
7. Run `yarn fetch` and your SVGs will be generated into `assets` folder

### Filtering Private Components (starting with a . or a \_)

1. If you want to ignore / filter private components that start with a . or \_, change the FILTER_PRIVATE_COMPONENTS variable to `true`.

### Limitations

Figma API has a fixed number of requests (rate limits) you can call per minute. This script will process a 20 requests per 45 seconds to avoid hitting that limit.

## License

Jenga-UI is a project by [Outpost](https://outpost.run).

Released under the MIT License.
