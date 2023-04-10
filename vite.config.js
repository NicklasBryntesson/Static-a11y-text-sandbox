import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import postcssNesting from 'postcss-nesting'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssNesting(),
        autoprefixer()
      ],
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/html'),
    }),
  ],
})