# @jengaicons/react

## 0.9.0

### Minor Changes

- [#50](https://github.com/OutpostHQ/jengaicons/pull/50)
  [`39eb811b`](https://github.com/OutpostHQ/jengaicons/commit/39eb811b0eac5261e230c1ab677086b7d34a7009)
  Thanks [@sahilshahane](https://github.com/sahilshahane)! - - Added `SWC`
  bundler that resulted in very fast builds
  - Changed build output structure - `cjs` and `esm` types will have their own
    directory
  - Added Next.js 13 App-Directory support
  - Added Next.js 13
    [Modularize Import](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports)
    support to fix tree shaking for app-directory
    - This also fixes memory issues, only the icons that are being used are
      loaded in runtime ( significantly reduces time to compile pages during
      development)

## 0.8.0

### Minor Changes

- [#44](https://github.com/OutpostHQ/jengaicons/pull/44)
  [`53a4cc64`](https://github.com/OutpostHQ/jengaicons/commit/53a4cc645b4fe43a66dda14ee1f3f7acc0b474b3)
  Thanks [@shubham-kaushal](https://github.com/shubham-kaushal)! - - Updated
  icons styles
  - Removed icons padding
  - Added new icons
  - Optimized Icons

## 0.7.0

### Minor Changes

- [#42](https://github.com/OutpostHQ/jengaicons/pull/42)
  [`0e7b9b73`](https://github.com/OutpostHQ/jengaicons/commit/0e7b9b7384e7fb05b9aa0982857aed35c8800704)
  Thanks [@sahilshahane](https://github.com/sahilshahane)! - - Added `cjs` build
  - Added Remix example for `cjs` import

## 0.6.0

### Minor Changes

- [#39](https://github.com/OutpostHQ/jengaicons/pull/39)
  [`2f2646d9`](https://github.com/OutpostHQ/jengaicons/commit/2f2646d9941e4ce4cad9e8a03e8cc86cf39b2e7e)
  Thanks [@sahilshahane](https://github.com/sahilshahane)! - - added
  `currentColor`
  - added `jengaIconFill` and `jengaIconCommon` Props
  - example update for `currentColor`
  - upgrade dependencies
  - added doc for context provider
