import { definePreset } from '@pandacss/dev'
import {recipes} from './theme/recipes'
import { slotRecipes } from './theme/slot-recipes'

export default definePreset({
  name: 'sample-preset',
  theme: {
    extend: {
      recipes,
      slotRecipes,
    }
  }
})
