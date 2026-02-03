# Release Guide

This guide covers how to release `@jengaicons/react` and `@jengaicons/svelte` packages to npm.

## Prerequisites

- Node.js 20.x or later
- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- npm account with publish access to `@jengaicons` scope
- Logged in to npm (`npm login`)

## Version Management

Before releasing, update the version in the respective `package.json` files:

- `packages/jengaicons-react/package.json` for React package
- `packages/jengaicons-svelte/package.json` for Svelte package

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

---

## Local Release

### Release All Packages

```bash
# 1. Install dependencies
bun install

# 2. Build and publish both packages
bun run release
```

### Release React Package Only

```bash
# 1. Install dependencies
bun install

# 2. Build and publish React package
bun run release:react
```

### Release Svelte Package Only

```bash
# 1. Install dependencies
bun install

# 2. Build and publish Svelte package
bun run release:svelte
```

### Step-by-Step Local Release

If you prefer manual control:

```bash
# 1. Install dependencies
bun install

# 2. Generate icons (if assets changed)
bun run generate:optimized

# 3. Build specific package
bun run build:react
# or
bun run build:svelte

# 4. Verify the build
ls packages/jengaicons-react/dist
# or
ls packages/jengaicons-svelte/dist

# 5. Publish to npm
npm publish --workspace=@jengaicons/react
# or
npm publish --workspace=@jengaicons/svelte
```

### Publishing a Beta/Dev Release

```bash
# Publish with a tag (e.g., beta, dev, next)
npm publish --workspace=@jengaicons/react --tag beta
npm publish --workspace=@jengaicons/svelte --tag beta
```

Users can install beta versions with:
```bash
npm install @jengaicons/react@beta
```

---

## GitHub Actions Release

### Method 1: Tag-based Release (Recommended)

Creating a version tag automatically triggers the release workflow.

```bash
# 1. Update version in package.json files
# Edit packages/jengaicons-react/package.json
# Edit packages/jengaicons-svelte/package.json

# 2. Commit the version change
git add .
git commit -m "chore: bump version to 1.10.0"

# 3. Create and push a version tag
git tag v1.10.0
git push origin main
git push origin v1.10.0
```

The GitHub Action will automatically:
1. Install dependencies
2. Build all packages
3. Publish to npm

### Method 2: Manual Workflow Dispatch

You can trigger a release manually from the GitHub Actions UI:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Release** workflow from the left sidebar
4. Click **Run workflow** button
5. Select the package to release:
   - `all` - Release both React and Svelte packages
   - `react` - Release only React package
   - `svelte` - Release only Svelte package
6. Click **Run workflow**

---

## GitHub Actions Setup

### Required Secrets

Ensure these secrets are configured in your repository settings (`Settings > Secrets and variables > Actions`):

| Secret | Description |
|--------|-------------|
| `NPM_AUTH_TOKEN` | npm access token with publish permission |

### Getting an npm Token

1. Go to [npmjs.com](https://www.npmjs.com/)
2. Log in to your account
3. Click your profile picture → **Access Tokens**
4. Click **Generate New Token** → **Classic Token**
5. Select **Automation** type
6. Copy the token and add it as `NPM_AUTH_TOKEN` secret in GitHub

---

## Release Checklist

- [ ] All tests pass locally
- [ ] Version updated in `package.json`
- [ ] Changelog/release notes prepared (if applicable)
- [ ] Changes committed and pushed to `main`
- [ ] Tag created and pushed (for automated release)
- [ ] Verify release on [npmjs.com](https://www.npmjs.com/package/@jengaicons/react)

---

## Troubleshooting

### "You must be logged in to publish"

```bash
npm login
```

### "You do not have permission to publish"

Ensure your npm account has publish access to the `@jengaicons` scope. Contact the package owner to be added as a collaborator.

### "Cannot publish over existing version"

You cannot republish the same version. Bump the version number in `package.json` and try again.

### GitHub Action fails with auth error

1. Verify `NPM_AUTH_TOKEN` secret is set correctly
2. Ensure the token has not expired
3. Regenerate the token if needed

### Build fails before publish

```bash
# Clean and rebuild
bun run clean
bun install
bun run build:react
bun run build:svelte
```

---

## Package URLs

- React: https://www.npmjs.com/package/@jengaicons/react
- Svelte: https://www.npmjs.com/package/@jengaicons/svelte
