module.exports = {
    "plugins": [
        // ...
        "react-hooks"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        "indent": [
            "error",
            4
        ]
    }
}