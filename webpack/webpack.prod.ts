import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import { common } from './webpack.common'

const prod: Configuration = {
  mode: 'production',
}

export default merge(common, prod)
