export const demoStages=['Novo contato','Em atendimento','Orçamento enviado','Em negociação','Concluído'] as const;
export const demoCategories=['Pisos e revestimentos','Louças e metais','Materiais de construção'] as const;
export type DemoStage=typeof demoStages[number];
export type DemoCategory=typeof demoCategories[number];
export type DemoLead={id:number;name:string;category:DemoCategory;product:string;quantity:number;stage:DemoStage;source:string};
export const initialDemoLeads:DemoLead[]=[
 {id:1,name:'Cliente exemplo A',category:'Pisos e revestimentos',product:'Revestimento para varanda',quantity:36,stage:'Novo contato',source:'Formulário'},
 {id:2,name:'Cliente exemplo B',category:'Louças e metais',product:'Metais para banheiro',quantity:2,stage:'Orçamento enviado',source:'Instagram'},
 {id:3,name:'Cliente exemplo C',category:'Materiais de construção',product:'Materiais para reforma',quantity:1,stage:'Em negociação',source:'WhatsApp'},
];
export function moveDemoLead(leads:DemoLead[],id:number,stage:DemoStage):DemoLead[]{
 if(!demoStages.includes(stage))return leads;
 return leads.map(lead=>lead.id===id?{...lead,stage}:lead);
}
export function createDemoLead(leads:DemoLead[],draft:{name:string;category:string;quantity:number;source:string}):DemoLead|null{
 const name=draft.name.trim().slice(0,60);
 if(!name||!demoCategories.includes(draft.category as DemoCategory)||!Number.isInteger(draft.quantity)||draft.quantity<1||draft.quantity>10000)return null;
 return {id:Math.max(0,...leads.map(lead=>lead.id))+1,name,category:draft.category as DemoCategory,quantity:draft.quantity,product:'Solicitação de orçamento de exemplo',stage:'Novo contato',source:draft.source};
}
export function filterDemoLeads(leads:DemoLead[],category:string,openOnly:boolean){
 return leads.filter(lead=>(category==='Todas'||lead.category===category)&&(!openOnly||lead.stage!=='Concluído'));
}
