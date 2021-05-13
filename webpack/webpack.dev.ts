import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { common } from './webpack.common'

const dev: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
}

export default merge(common, dev)
