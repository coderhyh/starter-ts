import path from 'path'
import { defineConfig } from 'vite'
import { buildPlugin } from 'vite-plugin-build'

export default defineConfig({
  plugins: [
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
        inputFolder: 'packages',
        ignoreInputs: ['**/*.spec.*', '**/*.test.*', '**/*.d.ts', '**/*.vue', '**/*.md']
      },
      libBuild: {
        buildOptions: [
          {
            rollupOptions: {
              external: ['vue'],
              output: { globals: { vue: 'vue' } }
            },
            lib: {
              formats: ['es', 'cjs'],
              entry: path.resolve(__dirname, 'packages/index.ts'),
              name: 'starter-ts',
              fileName: (format) => `index.${format}.js`
            }
          }
        ]
      }
    })
  ]

  // css: {
  //   modules: {
  //     localsConvention: 'camelCaseOnly',
  //     generateScopedName: (name: string) => `rbac-${name}`
  //   }
  // }
})
