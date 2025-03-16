import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: ['**/node_modules/**'],
    unocss: true,
    vue: true,
    markdown: false
  },
  {
    rules: {
      'no-console': 'off',
      'no-sequences': 'off',
      'perfectionist/sort-objects': 'off',
      'unused-imports/no-unused-vars': 'off',
      'vue/attributes-order': 'error',
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
)
