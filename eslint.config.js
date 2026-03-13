import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "error",
      "require-await": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionDeclaration[async=true]",
          message:
            "Async functions are not allowed. Use promises with .then/.catch instead.",
        },
        {
          selector: "ArrowFunctionExpression[async=true]",
          message:
            "Async arrow functions are not allowed. Use promises with .then/.catch instead.",
        },
        {
          selector: "TryStatement",
          message:
            "try/catch is not allowed. Use .catch() for promise error handling.",
        },
        {
          selector: "ForStatement",
          message:
            "Les boucles 'for' classiques sont interdites. Utilisez 'forEach', 'map', ou d'autres méthodes fonctionnelles.",
        },
        {
          selector: "ForInStatement",
          message:
            "Les boucles 'for...in' sont interdites. Utilisez Object.keys/values/entries avec 'forEach' ou 'map'.",
        },
        {
          selector: "ForOfStatement",
          message:
            "Les boucles 'for...of' sont interdites. Utilisez 'forEach', 'map', ou d'autres méthodes fonctionnelles.",
        },
        {
          selector: "WhileStatement",
          message:
            "Les boucles 'while' sont interdites. Préférez les méthodes fonctionnelles.",
        },
        {
          selector: "DoWhileStatement",
          message:
            "Les boucles 'do...while' sont interdites. Préférez les méthodes fonctionnelles.",
        },
      ],
    },
  },
]);
