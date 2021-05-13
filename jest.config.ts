import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

export default config
