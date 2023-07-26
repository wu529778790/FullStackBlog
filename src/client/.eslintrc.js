module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 缩进 4
        'indent': ['warn', 4],
        // 最多存在一行空行
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        // 关闭Vue组件的命名使用短横线连接多个单词，例如my-component
        'vue/multi-word-component-names': 'off'
    }
}
