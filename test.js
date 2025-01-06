import { ESLint } from 'eslint';
import fs from 'fs';
import path from 'path';
import t from 'tap';

const eslint = new ESLint({
  overrideConfigFile: './index.js',
});

t.test('good', async (t) => {
  const snapshotSuffix = '.test.cjs';
  const goodDir = './fixtures/good';
  const goodFiles = fs.readdirSync(goodDir).filter((f) => !f.endsWith(snapshotSuffix));
  for (const fileName of goodFiles) {
    t.test(fileName, async (t) => {
      const filePath = path.join(goodDir, fileName);
      const results = await eslint.lintFiles([filePath]);
      t.equal(results.length, 1);

      t.equal(
        results[0].errorCount,
        0,
        results[0].messages.filter((m) => m.severity === 2).map((m) => `error ${m.ruleId} ${m.message}`),
      );
      t.equal(
        results[0].warningCount,
        0,
        results[0].messages.filter((m) => m.severity === 1).map((m) => `warning ${m.ruleId} ${m.message}`),
      );

      t.snapshotFile = new URL(`${filePath}${snapshotSuffix}`, import.meta.url);
      const config = JSON.stringify(await eslint.calculateConfigForFile(filePath), null, 2);
      t.matchSnapshot(config);
      t.end();
    });
  }
  t.end();
});

t.test('bad', async (t) => {
  const snapshotSuffix = '.test.cjs';
  const badDir = './fixtures/bad';
  const badFiles = fs.readdirSync(badDir).filter((f) => !f.endsWith(snapshotSuffix));
  for (const fileName of badFiles) {
    t.test(fileName, async (t) => {
      const filePath = path.join(badDir, fileName);
      const results = await eslint.lintFiles([filePath]);
      t.equal(results.length, 1);

      t.snapshotFile = new URL(`${filePath}${snapshotSuffix}`, import.meta.url);
      t.matchSnapshot(results);
      t.end();
    });
  }
  t.end();
});
