import globals from "globals";
import ts from "typescript-eslint";

export default [
    {
        files: ["src/lib/*.ts"]
    },
    {
        ignores: ["src/test/*.ts", "dist/*", "build-js.js"],
    },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    ...ts.configs.recommended,
];
