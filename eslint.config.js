import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const autoImport = require('./.eslintrc-auto-import.json')

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettierConfig,
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
      vue,
      prettier
    },
    rules: {
      ...ts.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      'prettier/prettier': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off'
    }
  },
  {
    ignores: ['dist', 'node_modules', '*.d.ts', '.eslintrc-auto-import.json']
  }
]
