import CopyPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
const srcDir = path.join(__dirname, '..', 'src')

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
]

const moduleCommon: webpack.ModuleOptions = {
  rules: rules,
}

const entry: webpack.Entry = {
  popup: path.join(srcDir, 'popup.tsx'),
}
const resolve: webpack.ResolveOptions = {
  extensions: ['.ts', '.tsx', '.js'],
}

export const common: webpack.Configuration = {
  entry: entry,
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: moduleCommon,
  resolve: resolve,
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
  ],
}
