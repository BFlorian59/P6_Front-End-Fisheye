module.exports = {

    "extends": "eslint:recommended",

     "parser": "babel-eslint",

       

    "env": {

        "browser": true,

        "es2021": true,

        "node": true

    },

    "rules": {

    "no-console": "off",
    "no-invalid-regexp": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
    }
};