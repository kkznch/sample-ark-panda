import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  base: {
    height: 'auto',
    width: '320px',
    backgroundColor: 'red',
  },
})
