import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../src/dates.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {expirationDate} = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
test('no countdown without a confirmed presentation date', () => {
 assert.equal(expirationDate(null, 3), null);
 assert.equal(expirationDate('not-a-date', 3), null);
});
test('three calendar months handle shorter months and year boundaries', () => {
 assert.equal(expirationDate('2026-01-31T12:00:00Z', 3).toISOString(), '2026-04-30T12:00:00.000Z');
 assert.equal(expirationDate('2026-10-17T12:00:00Z', 3).toISOString(), '2027-01-17T12:00:00.000Z');
});
