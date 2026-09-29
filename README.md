# eMotorSolution Documentation

User manual and Python API reference for eMotorSolution, built with [Docusaurus](https://docusaurus.io/).

**Live site:** [https://EMSolution-SSIL.github.io/eMotorSolutionDoc/](https://EMSolution-SSIL.github.io/eMotorSolutionDoc/) (Japanese by default, English under `/en/`)

# For Developers

## 1. Initial Setup
1. Install [Node.js](https://nodejs.org/en/download/) (LTS version recommended) and check it:
    ```bash
    node -v
    ```
2. Clone the repository and install the dependencies:
    ```bash
    git clone https://github.com/EMSolution-SSIL/eMotorSolutionDoc.git
    cd eMotorSolutionDoc
    npm install
    ```

## 2. Running the Development Server
Japanese (default):
```bash
npm run start
```
English:
```bash
npm run start -- --locale en
```
The dev server runs one language at a time, so the language switcher does not work there. To test the full site (both languages, version dropdown), build it and serve the result:
```bash
npm run build
npm run serve
```

## 3. Where Things Are

| Path | Contents |
|---|---|
| `docs/docs/` | User manual (Japanese), the **Next** (unreleased) version |
| `docs/api/` | Python API reference, the **Next** (unreleased) version |
| `i18n/en/docusaurus-plugin-content-docs/current/` | English translation of `docs/` |
| `versioned_docs/version-X.Y.Z/` | Frozen docs of released version X.Y.Z |
| `i18n/en/docusaurus-plugin-content-docs/version-X.Y.Z/` | Frozen English translation of version X.Y.Z |
| `versions.json` | List of released versions, newest first |
| `sidebars.js` | Sidebars for Next (`versioned_sidebars/` holds the frozen ones) |
| `src/pages/index.js` | Homepage |
| `docusaurus.config.js` | Site configuration (navbar, languages, versions) |

## 4. Editing the Documentation

- **Docs for the upcoming release:** edit `docs/` and its English translation in `i18n/en/docusaurus-plugin-content-docs/current/`. On the site this appears as **Next** (`/docs/next/...`), with an "unreleased" banner.
- **Fixing an already released version:** edit the files in `versioned_docs/version-X.Y.Z/` (and `i18n/en/docusaurus-plugin-content-docs/version-X.Y.Z/`). Changes in `docs/` do not affect released versions.
- **Links:** prefer relative file links (`./script.md`) over absolute URLs (`/docs/docs/script`). Relative links stay inside the same version; absolute ones always point to the latest version.

## 5. Releasing a New Version
When the docs in `docs/` are ready for release X.Y.Z:

1. Create a snapshot of the current docs (both languages):
    ```bash
    npm run docusaurus docs:version X.Y.Z
    ```
    This copies `docs/` into `versioned_docs/version-X.Y.Z/`, the English translation into `i18n/en/.../version-X.Y.Z/`, and adds X.Y.Z to `versions.json`. The new version becomes the default on the site.
2. Commit, open a pull request to `main`, and merge it.
3. Tag the release commit and push the tag:
    ```bash
    git tag -a vX.Y.Z -m "eMotorSolution documentation vX.Y.Z"
    git push origin vX.Y.Z
    ```

Each version is a full copy of the docs, so old versions can be removed later by deleting their folders and their entry in `versions.json`.

## 6. Deployment
Deployment is automatic via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

- **Pull request to `main`:** the site is built to check for errors (e.g. broken links). Nothing is published.
- **Merge to `main`:** the site is built and published to GitHub Pages. It may take a few minutes to appear.
- **Manual:** Actions tab → "Build and deploy docs" → "Run workflow".

# Additional Information
For more on Docusaurus (including [versioning](https://docusaurus.io/docs/versioning) and [i18n](https://docusaurus.io/docs/i18n/introduction)), see the [Docusaurus documentation](https://docusaurus.io/docs).
