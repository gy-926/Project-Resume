import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import autoImport from './.eslintrc-auto-import.json' assert { type: 'json' }

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...autoImport.globals
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      vue
    },
    rules: {
      ...ts.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off'
    }
  },
  {
    ignores: ['dist', 'node_modules', '*.d.ts', '.eslintrc-auto-import.json']
  }
]
