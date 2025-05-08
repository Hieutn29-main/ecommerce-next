module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // Tắt rule của TypeScript
    "no-unused-vars": "off", // Tắt rule của ESLint
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
