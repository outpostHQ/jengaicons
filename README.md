# Jenga-Icons

> 🚨&nbsp;&nbsp;Jenga-Icons is still in early stages of development, so this means you can expect some bugs.
> As much as we'll try not to break
> existing API's, occasionally it _might_ happen.

Jenga-Icons is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

- 1000+ icons and counting (all the icons will be added soon)
- Regular, Fill, and Duotone
- Designed at 16 x 16px to read well small and scale up big
- Raw stroke information retained to fine-tune the style

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

Jenga-UI is a project by [Forneu](https://outpost.run).

Released under the MIT License.
