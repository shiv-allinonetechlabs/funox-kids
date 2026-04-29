import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Overrides
  {
    rules: {
      // Disable ref access false positive
      'react-hooks/refs': 'off',
      // Disable "Unexpected any" error
      '@typescript-eslint/no-explicit-any': 'off',
      // Disable React Compiler rules (cascading renders warning)
      'react-compiler/react-compiler': 'off',
      // Disable exhaustive-deps warning
      'react-hooks/exhaustive-deps': 'off',
      // Disable set-state-in-effect warning
      'react-hooks/set-state-in-effect': 'off',
      // Enable purity check (e.g. no Math.random() in render)
      'react-hooks/purity': 'error',
      // (Optional) Allow unused vars when prefixed with underscore
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // Ignore these folders
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
