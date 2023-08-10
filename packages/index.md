---
title: starter-ts入手指南
titleTemplate: npm库的起始模板
---

# starter-ts

starter-ts是一个npm库的起始模板

## ✨ 特性

- 🏄🏼‍♂️ 结构简洁实用
- 📦 配置了eslint|commitlint|husky|vitest等
- 📖 集成vitepress, 使用github pages搭建项目文档
- 🔨 使用github actions自动化部署文档、发包
- 🎯 使用 vite + typeScript + pnpm 构建

## 📦 安装

```bash
git clone https://github.com/coderhyh/starter-ts.git

cd starter-ts

pnpm run init
```

## 🔨 构建

```bash
pnpm run build
```

## 📝 目录结构

```js
starter-ts
├─.cz-config.js
├─.czrc
├─.eslintrc.js
├─.gitignore
├─.prettierrc
├─LICENSE
├─README.md
├─auto-imports.d.ts
├─commitlint.config.js
├─components.d.ts
├─package.json
├─pnpm-lock.yaml
├─tsconfig.json
├─unocss.config.ts
├─vite.config.ts
├─packages // 项目根目录
|    ├─index.md
|    ├─index.ts // 入口文件
|    ├─useSum
|    |   ├─demo.vue
|    |   ├─index.md
|    |   ├─index.test.ts
|    |   └index.ts
|    ├─public
|    |   └logo.svg
|    ├─.vitepress // vitepress配置
|    |     ├─config.ts
|    |     ├─nav.ts
|    |     ├─sidebar.ts
|    |     ├─theme
|    |     |   ├─base.css
|    |     |   └index.ts
├─.vscode
|    ├─extensions.json
|    └settings.json
├─.husky
|   ├─commit-msg
|   ├─pre-commit
|   ├─_
|   | ├─.gitignore
|   | └husky.sh
├─.github // github actions
|    ├─workflows
|    |     ├─docs.yml
|    |     └publish.yml
```
