import {defineConfig} from 'eslint-define-config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import markdown from 'eslint-plugin-markdown'; // 导入 markdown 插件


export default defineConfig([

    js.configs.recommended,
    ...ts.configs.recommended,
    ...vue.configs["flat/essential"],
    ...markdown.configs.recommended,

    {
        files: ["**/*.{js,mjs,cjs,ts,vue,md}"],
        languageOptions: {ecmaVersion: 'latest' },
        rules: {

        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
])
