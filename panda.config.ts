import { defineConfig } from '@pandacss/dev'
import preset from './src/preset'

export default defineConfig({
  presets: ['@pandacss/preset-base', preset],
  include: ['src/**/*.ts{,x}'],
  jsxFramework: 'react',
})
