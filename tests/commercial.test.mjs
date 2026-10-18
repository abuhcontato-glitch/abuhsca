import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuote, commercialSummary, normalizeQuantity, serviceCatalog, quoteLines } from '../src/commercial.ts';

test('contract totals distinguish duration, setup and monthly fees',()=>{
 const sprint=calculateQuote('sprint',{}), maratona=calculateQuote('maratona',{});
 assert.equal(sprint.baseTotal,7500);assert.equal(sprint.monthly,2500);
 assert.equal(maratona.baseTotal,114000);assert.equal(maratona.monthly,8500);
 assert.deepEqual(sprint.lines,[]);assert.equal(sprint.knownTotal,7500);
});
test('quantities are integer, bounded and nonnegative; unknown services are ignored',()=>{
 for(const [input,expected] of [[-4,0],[NaN,0],[Infinity,0],[2.9,2],[1000,99],[0,0]])assert.equal(normalizeQuantity(input),expected);
 assert.deepEqual(quoteLines('sprint',{unknown:9,art:-1}),[]);
 assert.equal(quoteLines('sprint',{art:2.9})[0].quantity,2);
});
test('unpriced services stay pending without inventing zero prices or changing known total',()=>{
 assert(serviceCatalog.every(service=>service.unitPrice===null));
 const quote=calculateQuote('sprint',{ecommerce:2,agent:1});
 assert.equal(quote.pending.length,2);assert.equal(quote.lines[0].subtotal,null);assert.equal(quote.once,0);assert.equal(quote.knownTotal,7500);
 assert.equal(quote.lines[0].additional,false);
});
test('included services are never automatically added or billed again; only explicit extras count',()=>{
 assert.equal(calculateQuote('maratona',{}).lines.length,0);
 assert.equal(quoteLines('sprint',{art:1})[0].additional,true);
 assert.equal(quoteLines('sprint',{capture:1})[0].additional,false);
 assert.equal(quoteLines('maratona',{capture:1})[0].additional,true);
 assert.match(serviceCatalog.find(s=>s.id==='art').availability.sprint.included,/8/);
});
test('approved price fixtures separate once, recurring and pending, with cent rounding',()=>{
 // Test-only prices, never exported as commercial prices.
 const catalog=[{...serviceCatalog[0],unitPrice:19.99},{...serviceCatalog[1],unitPrice:10.25,billing:'monthly'},serviceCatalog.find(s=>s.id==='agent')];
 const sprint=calculateQuote('sprint',{art:3,carousel:2,agent:1},catalog);
 assert.equal(sprint.once,59.97);assert.equal(sprint.recurring,20.5);assert.equal(sprint.monthly,2520.5);assert.equal(sprint.knownTotal,7621.47);assert.equal(sprint.pending.length,1);
 assert.equal(calculateQuote('maratona',{art:3,carousel:2},catalog).knownTotal,114305.97);
 const invalid=[{...serviceCatalog[0],unitPrice:-10}];assert.equal(calculateQuote('sprint',{art:1},invalid).pending.length,1);
});
test('commercial summary includes scope consent, pending work and unapproved external expenses',()=>{
 const summary=commercialSummary('sprint',{art:2,agent:1});
 for(const text of ['CONSTRUCEL','ABUHSCA','90 dias','7.500','2 × Arte publicitária adicional','Agente de IA','Sob orçamento','Despesas externas não incluídas','não equivalem a zero','concordância expressa','Nenhuma contratação'])assert(summary.includes(text),text);
 assert(!summary.includes('9.500'));
});
