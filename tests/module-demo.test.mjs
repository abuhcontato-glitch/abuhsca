import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createDemoLead,filterDemoLeads,initialDemoLeads,moveDemoLead} from '../src/moduleDemo.ts';

test('demo form validates local examples and assigns a unique ID',()=>{
 const lead=createDemoLead(initialDemoLeads,{name:'  Cliente exemplo D  ',category:'Pisos e revestimentos',quantity:36,source:'Formulário'});
 assert.equal(lead.id,4);assert.equal(lead.name,'Cliente exemplo D');assert.equal(lead.stage,'Novo contato');assert.equal(initialDemoLeads.length,3);
 for(const draft of [{name:' ',category:'Pisos e revestimentos',quantity:1},{name:'Exemplo',category:'Desconhecida',quantity:1},{name:'Exemplo',category:'Louças e metais',quantity:0},{name:'Exemplo',category:'Louças e metais',quantity:1.5},{name:'Exemplo',category:'Louças e metais',quantity:NaN},{name:'Exemplo',category:'Louças e metais',quantity:10001}])assert.equal(createDemoLead(initialDemoLeads,{...draft,source:'Exemplo'}),null);
});
test('demo kanban updates one record immutably and rejects unsupported stages',()=>{
 const next=moveDemoLead(initialDemoLeads,1,'Concluído');assert.equal(next[0].stage,'Concluído');assert.equal(initialDemoLeads[0].stage,'Novo contato');assert.equal(next[1],initialDemoLeads[1]);assert.equal(moveDemoLead(initialDemoLeads,1,'invalid'),initialDemoLeads);
});
test('segments reflect category, completed opportunities and new form records',()=>{
 const lead=createDemoLead(initialDemoLeads,{name:'Exemplo D',category:'Pisos e revestimentos',quantity:20,source:'Exemplo'});
 const leads=moveDemoLead([...initialDemoLeads,lead],1,'Concluído');
 assert.equal(filterDemoLeads(leads,'Todas',true).length,3);assert.equal(filterDemoLeads(leads,'Todas',false).length,4);
 assert.deepEqual(filterDemoLeads(leads,'Pisos e revestimentos',true).map(lead=>lead.id),[4]);
});
