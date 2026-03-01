/** @type {import('prettier').Config} */
const config = {
  trailingComma: "none",
  tabWidth: 4,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: [
    "typescript",
    "classProperties",
    "decorators-legacy",
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)$", "^./(.*)$"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
