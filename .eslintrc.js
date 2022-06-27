module.exports = {
    "ecmaFeatures": {
        "blockBindings": true,
        "modules": true,
        "superInFunctions": true
      },
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }

};
