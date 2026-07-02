import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  // Ignora build, tipos gerados, deps e o site estático legado que ainda coexiste
  // na raiz durante a migração (removido página a página conforme atinge paridade).
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'assets/**', 'pages/**', 'index.html'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
);
