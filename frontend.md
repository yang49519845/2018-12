# git 生成 ssh

cd ~/.ssh

ssh-keygen -t rsa -C "your_email@example.com"

# 前端页面制作规范

## 项目构建工具

- [node](https://nodejs.org/en/) 点击下载 node
- [gulp](https://github.com/gulpjs/gulp) 构建工具介绍
- [sass](http://www.w3cplus.com/sassguide/syntax.html) sass 入门语法
- [csscomb](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json) csscomb config

## 运行项目

- 确保已安装 nodejs，版本 7.5.0 or 8.x.x
- npm install 安装项目依赖
- 根据 package.json 文件的 script 区域查看项目启动  命令

## 目录结构

- 暂未定义

## 团队协作必要工具插件(插件配置留个备份)

### Visual Studio Code

- 用户设置

```js
{
    // 常用设置
    "editor.tabSize": 2,
    "editor.fontSize": 13,
    // 编辑器
    "editor.minimap.enabled": false,
    "editor.formatOnSave": true,
    "editor.quickSuggestions": {
        "strings": true
    },
    // 工作台
    "workbench.colorTheme": "Quiet Light",
    "workbench.iconTheme": "vscode-great-icons",
    // 文件
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.autoSave": "off",
    "files.associations": {
        "*.wxml": "wxml"
    },
    // prettier - code formatter
    "prettier.printWidth": 120,
    "prettier.singleQuote": true,
    "prettier.semi": false,
    // beautify
    "beautify.language": {
        "js": [],
        "css": [],
        "html": [
            "htm",
            "html"
        ]
    },
    // csscomb
    "csscomb.ignoreFilesOnSave": [
        "node_modules/**/*"
    ],
    "csscomb.formatOnSave": true,
    "csscomb.preset": "~/.csscomb.json",
    // markdownlint
    "[markdown]": {
        "editor.wordWrap": "on",
        "editor.quickSuggestions": true
    },
    "markdownlint.config": {
        "MD033": {
            "allowed_elements": [
                "a"
            ]
        },
        "MD029": {
            "style": "ordered"
        }
    },
    "git.autofetch": true,
    "element-helper.version": "2.3",
}
```

- 编辑器插件

  - VSCode Great Icons

  - Prettier - Code formatter
  - Beautify
  - CSScomb ("csscomb.preset": "~/.csscomb.json")

  - Beble ES6/ES7
  - ESLint
  - TSLint
  - EditorConfig for VS Code
  - markdownlint

  - Sass
  - Vetur
  - vscode wxml
  - vscode-element-helper

  - Vue 2 Snippets
  - JavaScript(ES6) code snippets

  - Complete JSDoc Tags
  - Auto Rename Tag
  - Auto Close Tag

### sublime

- Preferences/ Settings - User / 中贴入如下配置项

```json
{
  "tab_size": 4,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "ensure_newline_at_eof_on_save": true,
  "font_size": 12,
  "color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
  "show_encoding": true,
  "ignored_packages": ["node_modules"]
}
```

- 编辑器插件

  - CSScomb
  - JsFormat
  - HTML/CSS/JS Prettify
  - Pretty JSON
  - DocBlockr
  - Emmet
  - CSS3
  - Bracket Highlighter
  - SublimeLinter

- 为了团队协作，格式化插件必须安装，其中 CSScomb 安装后，修改下配置项

```js
    // Set space before `{`.
    "space-before-opening-brace": " ",
    此处默认是"\n"换行，修改成空格" "即可
```
