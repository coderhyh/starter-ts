---
title: starter-ts入手指南
titleTemplate: npm库的起始模板
---

# starter-ts

starter-ts是一个npm库的起始模板

## ✨ 特性

- 🏄🏼‍♂️ 结构简洁实用
- 📦 配置了eslint|husky规范; vitest测试
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
├─commitlint.config.js
├─package.json
├─auto-imports.d.ts
├─components.d.ts
├─pnpm-lock.yaml
├─tsconfig.json
├─vite.config.ts
├─packages // 项目根目录
|    ├─index.md
|    ├─index.ts // 入口文件
|    ├─public // 静态资源
|    |   └logo.svg
|    ├─.vitepress // vitepress配置
|    |     ├─config.ts
|    |     ├─nav.ts
|    |     ├─sidebar.ts
|    |     ├─theme
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
