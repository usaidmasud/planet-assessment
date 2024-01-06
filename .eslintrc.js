module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "@tanstack/query"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-namespace": "off",
    "@tanstack/query/exhaustive-deps": "off",
    "@tanstack/query/no-deprecated-options": "off",
    "@tanstack/query/prefer-query-object-syntax": "off",
    "@tanstack/query/stable-query-client": "off",
  },
};
