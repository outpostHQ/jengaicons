# Jenga Icons

Jenga Icons is a collection of adaptable icons designed for use in interfaces, diagrams, and other applications.

## Installation

```sh
# with npm
npm install @jengaicons/react

# with yarn
yarn add @jengaicons/react

# with pnpm# with pnpm
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

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
