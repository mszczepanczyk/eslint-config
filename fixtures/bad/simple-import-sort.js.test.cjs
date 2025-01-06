/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test.js > TAP > bad > simple-import-sort.js > must match snapshot 1`] = `
Array [
  Object {
    "errorCount": 0,
    "fatalErrorCount": 0,
    "filePath": "{CWD}/fixtures/bad/simple-import-sort.js",
    "fixableErrorCount": 0,
    "fixableWarningCount": 1,
    "messages": Array [
      Object {
        "column": 1,
        "endColumn": 28,
        "endLine": 2,
        "fix": Object {
          "range": Array [
            0,
            55,
          ],
          "text": String(
            import { a1, a2 } from 'a';
            import { b1, b2 } from 'b';
          ),
        },
        "line": 1,
        "message": "Run autofix to sort these imports!",
        "messageId": "sort",
        "nodeType": null,
        "ruleId": "simple-import-sort/imports",
        "severity": 1,
      },
    ],
    "source": String(
      import { b1, b2 } from 'b';
      import { a1, a2 } from 'a';
      
      a1;
      a2;
      b1;
      b2;
      
    ),
    "suppressedMessages": Array [],
    "usedDeprecatedRules": Array [
      Object {
        "replacedBy": Array [],
        "ruleId": "jsx-quotes",
      },
    ],
    "warningCount": 1,
  },
]
`
