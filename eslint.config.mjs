import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...pluginJs.configs.recommended.globals,
        ...pluginReact.configs.recommended.globals,
      },
    },
    plugins: {
      'react': pluginReact,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.recommended,
  },
];
