/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test.js > TAP > bad > prettier.js > must match snapshot 1`] = `
Array [
  Object {
    "errorCount": 0,
    "fatalErrorCount": 0,
    "filePath": "{CWD}/fixtures/bad/prettier.js",
    "fixableErrorCount": 0,
    "fixableWarningCount": 5,
    "messages": Array [
      Object {
        "column": 11,
        "endColumn": 25,
        "endLine": 1,
        "fix": Object {
          "range": Array [
            10,
            24,
          ],
          "text": "'double quote'",
        },
        "line": 1,
        "message": "Replace \`\\"double·quote\\"\` with \`'double·quote'\`",
        "messageId": "replace",
        "nodeType": null,
        "ruleId": "prettier/prettier",
        "severity": 1,
      },
      Object {
        "column": 11,
        "endColumn": 25,
        "endLine": 1,
        "fix": Object {
          "range": Array [
            10,
            24,
          ],
          "text": "'double quote'",
        },
        "line": 1,
        "message": "Strings must use singlequote.",
        "messageId": "wrongQuotes",
        "nodeType": "Literal",
        "ruleId": "@stylistic/js/quotes",
        "severity": 1,
      },
      Object {
        "column": 1,
        "endColumn": 5,
        "endLine": 4,
        "fix": Object {
          "range": Array [
            39,
            43,
          ],
          "text": "  ",
        },
        "line": 4,
        "message": "Replace \`····\` with \`··\`",
        "messageId": "replace",
        "nodeType": null,
        "ruleId": "prettier/prettier",
        "severity": 1,
      },
      Object {
        "column": 14,
        "endColumn": 14,
        "endLine": 8,
        "fix": Object {
          "range": Array [
            100,
            100,
          ],
          "text": ",",
        },
        "line": 8,
        "message": "Insert \`,\`",
        "messageId": "insert",
        "nodeType": null,
        "ruleId": "prettier/prettier",
        "severity": 1,
      },
      Object {
        "column": 12,
        "endColumn": 12,
        "endLine": 12,
        "fix": Object {
          "range": Array [
            133,
            133,
          ],
          "text": String(
            
             
          ),
        },
        "line": 12,
        "message": "Insert \`⏎·\`",
        "messageId": "insert",
        "nodeType": null,
        "ruleId": "prettier/prettier",
        "severity": 1,
      },
    ],
    "source": String(
      const s = "double quote";
      
      while (s) {
          // tab width 4
      }
      
      const noTrailingComma = {
        foo: 'bar;'
      };
      noTrailingComma;
      
      const foo = '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345';
      foo;
      
    ),
    "suppressedMessages": Array [],
    "usedDeprecatedRules": Array [
      Object {
        "replacedBy": Array [],
        "ruleId": "jsx-quotes",
      },
    ],
    "warningCount": 5,
  },
]
`
