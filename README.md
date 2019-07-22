# file-list-webpack-plugin

A webpack plugin to show your build file(s).

[![build status][travis-ci]][travis-ci-url]

## 📦 Install

```bash
npm i -D @lovelope/file-list-webpack-plugin
# or
yarn add -D @lovelope/file-list-webpack-plugin
```

## 🔨 Usage

```js
// webpack.config.js
const { FileListWebpackPlugin } = require('@lovelope/file-list-webpack-plugin');

module.exports = {
  plugins: [new FileListWebpackPlugin()],
};
```

## 🔧 Options

|         Name          |    Type     | Default | Description                   |
| :-------------------: | :---------: | :-----: | ----------------------------- |
| **[`debug`](#debug)** | `{Boolean}` | `false` | Enables/Disables `debug` mode |

### `debug`

Type: `Boolean`
Default: `false`

Enables/Disables `debug` mode

Examples output:

```
[FileListWebpackPlugin]:  empty fileList FileList shown:


[FileListWebpackPlugin]:  fileList in loop FileList shown:

 main.js
[FileListWebpackPlugin]:  all fileList  FileList shown:

- main.js
```

## 😄 Contributing

Please join us.

## 🔑 License

[MIT](./LICENSE)

[travis-ci]: https://travis-ci.org/lovelope/file-list-webpack-plugin.svg?branch=master
[travis-ci-url]: https://travis-ci.org/lovelope/file-list-webpack-plugin
