/* eslint-disable import/prefer-default-export */
import { Compiler, compilation as compilationType } from 'webpack';

type Compilation = compilationType.Compilation;

const NAME = 'file-list-webpack-plugin';
const WIKI = 'https://github.com/lovelope/file-list-webpack-plugin/wiki';

export interface Options {
  /**
   * open debug mode
   *
   * default: false
   */
  debug?: boolean;
}

function isPlainObject(value: unknown): boolean {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.getPrototypeOf({});
}

function log(...args: any) {
  // eslint-disable-next-line no-console
  return console.log.apply(console, ['[FileListWebpackPlugin]: ', ...args]);
}

class FileListWebpackPlugin {
  private readonly debug: boolean;

  constructor(options: Options = {}) {
    if (!isPlainObject(options)) {
      throw new Error(`${NAME}: only accepts an options object. See: ${WIKI}`);
    }

    this.debug = options.debug || false;

    this.apply = this.apply.bind(this);
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tap(NAME, (compilation: Compilation) => {
      let fileList: string = 'FileList shown:\n\n';

      if (this.debug) {
        log('empty fileList', fileList);
      }

      for (let filename in compilation.assets) {
        if (this.debug) {
          log('fileList in loop', fileList, filename);
        }
        fileList += '- ' + filename + '\n';
      }

      if (this.debug) {
        log('all fileList ', fileList);
      }

      compilation.assets['fileList.md'] = {
        source: function() {
          return fileList;
        },
        size: function() {
          return fileList.length;
        },
      };
    });
  }
}

export { FileListWebpackPlugin };
