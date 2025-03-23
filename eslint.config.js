// @ts-check
import globals from 'globals';

import eslint from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import tseslint from 'typescript-eslint';

const DIST_GLOB = ['dist/**'];

const tsLintConfig = [...tseslint.configs.recommended];
tsLintConfig[1].ignores = DIST_GLOB;
tsLintConfig[2].ignores = DIST_GLOB;

const esLintConfig = {
  ...eslint.configs.recommended,
  ignores: DIST_GLOB,
};

export default tseslint.config(
  [
    {
      ignores: ['dist/**'],
      languageOptions: { 
        globals: {
          ...globals.browser,
          Phaser: 'readonly'
        },
      },
    },
  ],
  esLintConfig,
  tsLintConfig,
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      '@stylistic/ts/block-spacing': ['warn'],
      'indent': ['error', 2],
      'no-multiple-empty-lines': ['error', {max: 2}],
      'space-infix-ops': ['error'],
      '@stylistic/ts/quotes': [ 'error', 'single'],
      '@stylistic/ts/semi': ['error', 'always'],
      '@stylistic/ts/semi-spacing': ['error'], 
    }, 
  }
);