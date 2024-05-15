import {
  setEslintLanguageOptionsBrowser,
  setEslintPluginJest,
  setEslintPluginPrettier,
  setEslintPluginTypescripEslint,
  setEslintPluginUnicorn,
} from './eslint.config.utils.js';

const ignores = ['coverage/*', 'dist/*', 'tmp.js', '**/*.test.js', '**/*.cjs'];

const allowList = ['sep', 'RegExpDateFn'];

export default [
  setEslintLanguageOptionsBrowser(),
  setEslintPluginUnicorn({ ignores, allowList }),
  setEslintPluginJest({ ignores }),
  setEslintPluginPrettier({ ignores }),
  ...setEslintPluginTypescripEslint({ ignores }),
];
