# Dragonfly Website

This repository contains the source code for [d7y.io](https://d7y.io).
It's built by [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Add or Update Docs

When you add or modify the docs, these five files(`docs/`, `docs/resource/`, `i18n/zh/docusaurus-plugin-content-docs/current/`, `i18n/zh/docusaurus-plugin-content-docs/current/current.json` and `sidebars.js`) should be taken into consideration.

1. Create a markdown file in the directory `docs/`. All markdown files need to follow the format,
   that the title at the beginning should be in the following format:

   ```markdown
   ---
   title: Title Name
   ---
   ```

2. If you need image resources in markdown, put the image in the `docs/resource/` directory.
   you should put the image resources here and use a relative path like below:

   ```markdown
   ![alt](./resources/example.png)
   ```

3. Generate Chinese documents and put it in `i18n/zh/docusaurus-plugin-content-docs/current/` directory.

   ```markdown
   ---
   title: 标题
   ---
   ```

4. `sidebars.js`, this file contain the navigation information.
   Please read [the official docs of docusaurus](https://docusaurus.io/docs/sidebar) to learn how to write `sidebar.js`.

   ```js
   module.exports = {
     docs: [
       {
         type: "category",
         label: "Markdown Features",
         link: {
           type: "doc",
           id: "guides/markdown-features/introduction",
         },
         items: [
           "guides/markdown-features/react",
           "guides/markdown-features/tabs",
           "guides/markdown-features/code-blocks",
           "guides/markdown-features/admonitions",
           "guides/markdown-features/headings",
           "guides/markdown-features/inline-toc",
           "guides/markdown-features/assets",
           "guides/markdown-features/plugins",
           "guides/markdown-features/math-equations",
           "guides/markdown-features/head-metadata",
         ],
       },
     ],
   }
   ```

5. Generate sidebars i18n `i18n/zh/docusaurus-plugin-content-docs/current/current.json` file.

```shell
npm run write-translations
```

6. Translate the sidebars content in the `i18n/zh/docusaurus-plugin-content-docs/current/current.json`.

```json
{
  "version.label": {
    "message": "下一页",
    "description": "The label for version current"
  },
  "sidebar.docs.category.Getting Started": {
    "message": "快速开始",
    "description": "The label for category Getting Started in sidebar docs"
  },
  "sidebar.docs.category.Tutorial": {
    "message": "实践教程",
    "description": "The label for category Tutorial in sidebar docs"
  }
}
```

## Website Development

### Installation

```shell
yarn install
```

### Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
