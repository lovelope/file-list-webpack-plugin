// plugins 在 presets 前执行
module.exports = {
  // plugins 加载顺序，数组从前往后
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }], // 修饰器支持，顺序必须在 `proposal-class-properties` 之前
    ['@babel/plugin-proposal-class-properties', { loose: true }], // 支持 `handleChange = () => {}` 语法
    '@babel/plugin-syntax-dynamic-import', // 支持 `() => import('./Home')` 语法
  ],

  // presets 加载顺序，数组从后往前
  // 先执行 `react`， 然后执行 `env`
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: 'cjs',
        useBuiltIns: 'usage',
        corejs: 2,
        targets: {
          node: '8.9.0',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
