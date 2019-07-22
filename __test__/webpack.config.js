/// <reference types="webpack" />

const path = require('path');

const { FileListWebpackPlugin } = require('../lib/file-list-webpack-plugin.js');

const config = {
  mode: 'none',
  entry: path.resolve(__dirname, './in/entry.js'),
  output: {
    path: path.resolve(__dirname, './out'),
  },
  plugins: [new FileListWebpackPlugin({ debug: true })],
};

module.exports = config;
