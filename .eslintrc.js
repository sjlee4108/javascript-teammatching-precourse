module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "import/extensions": ["off"],
    "class-methods-use-this": ["off"],
    "no-new": ["off"],
    "no-alert": ["off"],
  },
};
