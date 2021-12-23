import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入模块插件， 不需要import {ref} from 'vue' ，可直接使用ref、createApp等方法， element-plus等组件
import Components from 'unplugin-vue-components/vite' // element-plus按需引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  esbuild: {
    jsxFactory: 'h',
  //   loader: 'jsx',
  //   include: /src\/((?!type=template).)*\.jsx?$/,
  //   exclude: [],
    jsxFragment: 'Fragment',
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md  
        ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          'axios': [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]']
          ]
        }
      ],
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    fs: {
      allow: ['']
    }
  }
})
