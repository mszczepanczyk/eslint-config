/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test.js > TAP > bad > stylistic.js > must match snapshot 1`] = `
Array [
  Object {
    "errorCount": 0,
    "fatalErrorCount": 0,
    "filePath": "{CWD}/fixtures/bad/stylistic.js",
    "fixableErrorCount": 0,
    "fixableWarningCount": 3,
    "messages": Array [
      Object {
        "column": 11,
        "endColumn": 26,
        "endLine": 1,
        "fix": Object {
          "range": Array [
            10,
            25,
          ],
          "text": "'double quotes'",
        },
        "line": 1,
        "message": "Replace \`\\"double·quotes\\"\` with \`'double·quotes'\`",
        "messageId": "replace",
        "nodeType": null,
        "ruleId": "prettier/prettier",
        "severity": 1,
      },
      Object {
        "column": 11,
        "endColumn": 26,
        "endLine": 1,
        "fix": Object {
          "range": Array [
            10,
            25,
          ],
          "text": "'double quotes'",
        },
        "line": 1,
        "message": "Strings must use singlequote.",
        "messageId": "wrongQuotes",
        "nodeType": "Literal",
        "ruleId": "@stylistic/js/quotes",
        "severity": 1,
      },
      Object {
        "column": 11,
        "endColumn": 29,
        "endLine": 4,
        "fix": Object {
          "range": Array [
            41,
            59,
          ],
          "text": "'template literal'",
        },
        "line": 4,
        "message": "Strings must use singlequote.",
        "messageId": "wrongQuotes",
        "nodeType": "TemplateLiteral",
        "ruleId": "@stylistic/js/quotes",
        "severity": 1,
      },
    ],
    "source": String(
      const a = "double quotes";
      a;
      
      const b = \`template literal\`;
      b;
      
    ),
    "suppressedMessages": Array [],
    "usedDeprecatedRules": Array [
      Object {
        "replacedBy": Array [],
        "ruleId": "jsx-quotes",
      },
    ],
    "warningCount": 3,
  },
]
`
