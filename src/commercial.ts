import { proposal } from './config.ts';

export type PlanId = 'base' | 'arranque' | 'sprint' | 'tracao' | 'maratona';
export const planLabel=(id:PlanId)=>({base:'BASE',arranque:'ARRANQUE',sprint:'SPRINT',tracao:'TRAÇÃO',maratona:'MARATONA'})[id];
export type Availability = { included: string | null; note: string };
export type Service = {
 id: string; category: string; name: string; description: string; unit: string;
 billing: 'once' | 'monthly'; unitPrice: number | null;
 availability: Record<PlanId, Availability>;
};
export const money = (value: number) => value.toLocaleString('pt-BR', {style:'currency',currency:'BRL',maximumFractionDigits:2});
const rule = (included: string | null, note = ''): Availability => ({included, note});
const extra = 'Somente volume adicional ou trabalho extraordinário, sujeito à aprovação.';
const mar = rule('Conforme escopo e cronograma da MARATONA', extra);
const none = rule(null, 'Não incluído no plano. Disponível como adicional sob orçamento.');
const tractionAllowances: Record<string,string> = {
 art:'Dentro dos 8 criativos/mês',carousel:'Dentro dos 8 criativos/mês',reels:'4 vídeos curtos dentro dos 8 criativos/mês',
 'ad-video':'4 vídeos curtos dentro dos 8 criativos/mês',capture:'1 sessão presencial/mês',
 'full-video':'4 vídeos curtos/mês; outros formatos exigem escopo adicional',landing:'1 página no primeiro mês',
 site:'Site oficial institucional responsivo',chatbot:'Chatbot com fluxos de atendimento',
 campaign:'Até 2 campanhas ativas por plataforma',content:'16 publicações Instagram/mês e adaptação de 4 vídeos ao TikTok',
 consulting:'2 reuniões de acompanhamento/mês',diagnosis:'Diagnóstico comercial inicial',
};
const service = (id: string, category: string, name: string, description: string, unit: string, sprint: Availability, maratona = mar, billing: Service['billing'] = 'once'): Service => ({id,category,name,description,unit,billing,unitPrice:null,availability:{base:id==='consulting'||id==='diagnosis'?rule('Orientação dentro da reunião mensal; sem execução',extra):none,arranque:['art','ad-video','campaign','consulting'].includes(id)?rule('Conforme limites do ARRANQUE',extra):none,sprint,tracao:tractionAllowances[id]?rule(tractionAllowances[id],extra):none,maratona}});
// Preencher unitPrice somente com tabela aprovada. Null nunca equivale a serviço gratuito.
export const serviceCatalog: Service[] = [
 service('art','Design','Arte publicitária','Peça estática para divulgação.','peça',rule('Dentro dos 8 criativos/mês',extra)),
 service('carousel','Design','Carrossel','Sequência de peças para uma publicação.','carrossel',rule('Dentro dos 8 criativos/mês',extra)),
 service('identity','Design','Identidade visual','Sistema visual e aplicações da marca.','projeto',none),
 service('print','Design','Material gráfico','Criação de material; impressão não incluída.','material',none,rule(null,'Trabalho extraordinário a validar no escopo.')),
 service('reels','Audiovisual','Edição de Reels','Edição simples com vídeo enviado pela cliente.','vídeo',rule('Edição simples dentro dos 8 criativos/mês',extra)),
 service('ad-video','Audiovisual','Edição de vídeo publicitário','Montagem e acabamento de vídeo para anúncios.','vídeo',rule('Edição simples dentro dos 8 criativos/mês',extra)),
 service('capture','Audiovisual','Captação presencial','Visita para gravar imagens e conteúdo.','visita',none),
 service('full-video','Audiovisual','Produção de vídeo completo','Roteiro, produção, captação e edição a dimensionar.','projeto',none),
 service('landing','Web','Landing page','Página comercial de captação.','página',rule('Landing pages conforme quantidade e cronograma acordados',extra)),
 service('site','Web','Site institucional','Presença institucional e páginas a dimensionar.','projeto',none),
 service('ecommerce','Web','E-commerce','Loja, catálogo, checkout e integrações a dimensionar.','projeto',none),
 service('page','Web','Página adicional','Ampliação de uma estrutura web existente.','página',none),
 service('campaign','Marketing','Campanha publicitária pontual','Estratégia e configuração; verba de mídia separada.','campanha',rule('Até 2 campanhas ativas por plataforma',extra)),
 service('content','Marketing','Planejamento de conteúdo','Planejamento editorial e materiais a dimensionar.','projeto',rule('Reaproveitamento para 8 publicações Instagram/mês',extra)),
 service('consulting','Marketing','Consultoria','Sessão consultiva com objetivo definido.','sessão',rule('1 reunião mensal de indicadores',extra)),
 service('diagnosis','Marketing','Diagnóstico de marketing','Análise e recomendações para prioridades.','projeto',rule('Diagnóstico comercial inicial',extra)),
 service('chatbot','Tecnologia e IA','Chatbot','Fluxos e encaminhamentos de atendimento.','projeto',none),
 service('automation','Tecnologia e IA','Automação','Fluxo automatizado com ferramentas autorizadas.','fluxo',none),
 service('agent','Tecnologia e IA','Agente de IA','Conversas, base de conhecimento e supervisão.','projeto',none),
 service('integration','Tecnologia e IA','Integração de sistemas','Conexão de ferramentas conforme APIs e acessos.','integração',none),
 service('marketing-plan','Estratégia e marca','Plano de marketing','Diagnóstico, objetivos, públicos e plano de ação.','projeto',none),
 service('market-analysis','Estratégia e marca','Análise de mercado','Levantamento de mercado, concorrência e oportunidades.','estudo',none),
 service('positioning','Estratégia e marca','Posicionamento de marca','Proposta de valor, público e direção de comunicação.','projeto',none),
 service('annual-plan','Estratégia e marca','Planejamento anual','Prioridades, calendário e frentes de atuação.','planejamento',none),
 service('brand-manual','Estratégia e marca','Manual de identidade visual','Regras de aplicação da identidade e da marca.','manual',none),
 service('logo','Design','Criação de logotipo','Conceito e desenho de uma marca visual.','projeto',none),
 service('presentation','Design','Apresentação comercial','Diagramação de apresentação conforme conteúdo e escopo.','apresentação',none),
 service('script','Audiovisual','Roteiro publicitário','Roteiro para vídeo, campanha ou conteúdo.','roteiro',none),
 service('content-shoot','Audiovisual','Produção de conteúdo','Planejamento, captação e edição a dimensionar por lote.','lote',none),
 service('advertising-production','Audiovisual','Produção publicitária','Produção de peça audiovisual com equipe e escopo definidos.','projeto',none),
 service('event-production','Audiovisual','Cobertura de evento','Registro audiovisual de evento conforme duração e equipe.','evento',none),
 service('seo','Web','SEO','Análise e otimização para busca orgânica.','projeto',none),
 service('cro','Web','Otimização de conversão','Revisão da jornada e melhorias de conversão.','projeto',none),
 service('domain-hosting','Web','Configuração de domínio e hospedagem','Configuração técnica; fornecedores e licenças orçados separadamente.','configuração',none),
 service('product-catalog','Web','Cadastro e organização de produtos','Estrutura e cadastro do catálogo conforme volume definido.','lote',none),
 service('checkout','Web','Integração de checkout e pagamento','Configuração do fluxo de compra e provedor escolhido.','integração',none),
 service('quote-form','Web','Formulário de captação','Formulário comercial e organização das informações recebidas.','formulário',none),
 service('google-profile','Marketing','Google Perfil da Empresa','Configuração ou otimização da presença local.','projeto',none),
 service('meta-campaign','Marketing','Campanha Meta Ads','Configuração e gestão de campanha com escopo pontual.','campanha',none),
 service('google-campaign','Marketing','Campanha Google Ads','Configuração e gestão de campanha com escopo pontual.','campanha',none),
 service('instagram-post','Marketing','Publicação para Instagram','Criação de publicação para feed ou Stories conforme formato.','publicação',none),
 service('tiktok-content','Marketing','Vídeo para TikTok','Criação ou adaptação de vídeo conforme material disponível.','vídeo',none),
 service('remarketing','Marketing','Campanha de remarketing','Estrutura e execução pontual de campanha de relacionamento.','campanha',none),
 service('email-campaign','Marketing','Campanha de e-mail marketing','Criação de mensagem, segmentação e configuração de campanha.','campanha',none),
 service('crm-basic','Comercial e atendimento','Implantação de CRM básico','Funil de leads e orçamentos, responsáveis e próximos passos.','projeto',none),
 service('crm-advanced','Comercial e atendimento','Configuração de CRM avançado','Funis, permissões e processos conforme levantamento técnico.','projeto',none),
 service('whatsapp','Comercial e atendimento','Organização do WhatsApp Business','Catálogo prioritário, mensagens rápidas e etiquetas.','configuração',none),
 service('omnichannel','Comercial e atendimento','Central de atendimento omnichannel','Configuração dos canais autorizados em uma central.','projeto',none),
 service('sales-process','Comercial e atendimento','Processo de atendimento e follow-up','Roteiros e rotina de acompanhamento das oportunidades.','projeto',none),
 service('dashboard','Tecnologia e IA','Dashboard comercial','Painel de indicadores com dados e fontes autorizadas.','painel',none),
 service('knowledge','Tecnologia e IA','Base de conhecimento','Organização de documentação e conteúdos para consulta.','projeto',none),
 service('calendar','Tecnologia e IA','Agenda de atendimento','Configuração de calendário e horários de atendimento.','configuração',none),
 service('sales-training','Treinamento e educação','Treinamento de vendedores','Capacitação comercial com conteúdo e duração definidos.','sessão',none),
 service('team-training','Treinamento e educação','Treinamento de ferramentas e processos','Orientação de uso de sistemas e rotinas para a equipe.','sessão',none),
 service('workshop','Treinamento e educação','Workshop','Encontro de formação sobre tema e público acordados.','encontro',none),
 service('ead','Treinamento e educação','Universidade corporativa / EAD','Estrutura de plataforma, módulos e organização das aulas.','projeto',none),
 service('project-management','Processos e gestão','Organização de projetos e produtividade','Configuração de tarefas, prioridades e acompanhamento.','projeto',none),
 service('internal-processes','Processos e gestão','Mapeamento de processos internos','Registro dos fluxos e responsabilidades da operação.','projeto',none),
 service('financial-kpis','Processos e gestão','Painel de indicadores financeiros','Organização e visualização dos dados financeiros fornecidos.','painel',none),

];
export type Quantities = Record<string, number>;
export const normalizeQuantity = (value: number) => Number.isFinite(value) ? Math.min(99,Math.max(0,Math.floor(value))) : 0;
export function quoteLines(plan: PlanId, quantities: Quantities, catalog: Service[] = serviceCatalog) {
 return catalog.flatMap(service => {
  const quantity=normalizeQuantity(quantities[service.id] ?? 0);
  if (!quantity) return [];
  const unitPrice=service.unitPrice !== null && Number.isFinite(service.unitPrice) && service.unitPrice >= 0 ? service.unitPrice : null;
  return [{service,quantity,additional:Boolean(service.availability[plan].included),subtotal:unitPrice===null ? null : Math.round(unitPrice*100)*quantity/100}];
 });
}
export function calculateQuote(plan: PlanId, quantities: Quantities, catalog: Service[] = serviceCatalog) {
 const offer=proposal[plan], lines=quoteLines(plan,quantities,catalog);
 const round=(value:number)=>Math.round(value*100)/100;
 const once=round(lines.filter(l=>l.service.billing==='once').reduce((sum,l)=>sum+(l.subtotal??0),0));
 const recurring=round(lines.filter(l=>l.service.billing==='monthly').reduce((sum,l)=>sum+(l.subtotal??0),0));
 return {lines,once,recurring,baseTotal:offer.setup+offer.monthly*offer.months,knownTotal:round(offer.setup+(offer.monthly+recurring)*offer.months+once),pending:lines.filter(l=>l.subtotal===null),monthly:round(offer.monthly+recurring)};
}
export function commercialSummary(plan: PlanId, quantities: Quantities, catalog: Service[] = serviceCatalog) {
 const offer=proposal[plan], quote=calculateQuote(plan,quantities,catalog);
 return [
  'SOLICITAÇÃO COMERCIAL — NÃO É CONTRATO',`Cliente: ${proposal.company}`,`Agência: ${proposal.agency}`,`Plano escolhido: ${offer.name}`,
  `Mensalidade do plano: ${money(offer.monthly)}`,`Prazo proposto: ${plan==='sprint'?'90 dias / 3 mensalidades':`${offer.months} ${offer.months===1?'mês inicial proposto':'meses'}`}`,
  `Implantação: ${plan!=='maratona'?'sem taxa adicional para landing page e CRM simples e padronizados':money(offer.setup)+' — proposta'}`,
  `Total de honorários do plano: ${money(quote.baseTotal)}`,
  'Serviços adicionais (somente volume além do incluído):',
  ...quote.lines.map(l=>`- ${l.quantity} × ${l.service.name}${l.additional?' adicional':''} (${l.service.unit}; ${l.service.billing==='monthly'?'recorrente mensal':'avulso único'}): ${l.subtotal===null?'Sob orçamento':money(l.subtotal)}`),
  ...(quote.lines.length?[]:['- Nenhum selecionado']),
  `Adicionais recorrentes com preço cadastrado: ${money(quote.recurring)}/mês`,
  `Avulsos com preço cadastrado: ${money(quote.once)}`,
  `Valor estimado conhecido no prazo: ${money(quote.knownTotal)}${quote.pending.length?' + serviços sob orçamento':''} (não é o custo total da operação)`,
  `Serviços sob orçamento: ${quote.pending.map(l=>l.service.name).join(', ')||'Nenhum selecionado'}`,
  'Despesas externas não incluídas — sob aprovação: mídia, hospedagem, domínio, licenças, APIs e terceiros. Valores não estimados; não equivalem a zero.',
  'Não define o primeiro pagamento nem calendário de cobrança. Condições e responsabilidades dependem de negociação e contrato.',
  ...(plan==='tracao'?['TRAÇÃO: escopo proposto, sujeito à concordância expressa de Ana Paula. Conteúdo e acompanhamento comercial conforme a proposta.']:[]),
  ...(plan==='sprint'?['SPRINT revisado: alteração do pacote anterior, sujeita à concordância expressa de Ana Paula. Produção remota; sem captação presencial incluída.']:[]),
  'A seleção prepara uma solicitação comercial. Nenhuma contratação, cobrança ou envio automático é realizado.',
 ].join('\n');
}
export type ComparisonRow = {name:string; values:Record<PlanId,{status:'Incluído'|'Disponível como adicional'|'Sob orçamento'; detail:string}>};
const tractionComparisons: Record<string,string|null> = {
 'Tráfego pago':'Meta + Google · até 2 campanhas ativas por plataforma; otimização semanal',
 Criativos:'8/mês, incluindo os 4 vídeos curtos originais',Instagram:'16 publicações/mês',TikTok:'Adaptação dos 4 vídeos/mês',
 'Landing page':'1 no primeiro mês','Site institucional':'Site oficial institucional responsivo','E-commerce':null,
 'Produção audiovisual':'1 sessão presencial/mês e 4 vídeos curtos dentro dos 8 criativos',
 CRM:'Básico, responsáveis, próximos passos e rotina de follow-up',Chatbot:'Fluxos de atendimento e encaminhamento à equipe','Agentes de IA':null,
 Reuniões:'2 por mês',Treinamentos:'1 remoto inicial',Branding:null,
 'Plano de marketing':'Diagnóstico comercial, planejamento de campanhas e conteúdo',Automações:null,
 Dashboards:'Painel básico de campanhas, leads e orçamentos','Universidade Construcel':null,
};
const row=(name:string,sprint:string|null,maratona:string):ComparisonRow=>({name,values:{base:{status:'Sob orçamento',detail:'Conforme escopo da BASE'},arranque:{status:'Sob orçamento',detail:'Conforme escopo do ARRANQUE'},tracao:{status:tractionComparisons[name]?'Incluído':'Disponível como adicional',detail:tractionComparisons[name]??'Não incluído no plano · Sob orçamento'},sprint:{status:sprint?'Incluído':'Disponível como adicional',detail:sprint??'Não incluído no plano · Sob orçamento'},maratona:{status:'Incluído',detail:maratona}}});
export const comparisonRows: ComparisonRow[] = [
 row('Tráfego pago','Meta + Google · até 2 campanhas ativas por plataforma; otimização semanal','Meta + Google · conforme planejamento'),
 row('Criativos','8/mês · estáticos, carrosséis ou edição simples','20 · periodicidade a definir'),
 row('Instagram','8 publicações/mês, reaproveitando campanhas','24 publicações/mês, feed e Stories'),
 row('TikTok',null,'24 publicações/mês'),row('Landing page','Landing pages conforme escopo','Páginas conforme planejamento'),
 row('Site institucional',null,'Site responsivo e evolução'),row('E-commerce',null,'Catálogo, carrinho, checkout e integração de pagamento'),
 row('Produção audiovisual','Remota · edição simples de vídeos da cliente; presencial à parte','Visita, roteiro, captação e edição conforme escopo'),
 row('CRM','Básico: leads e orçamentos','Avançado, funis e integrações'),row('Chatbot',null,'Fluxos e evolução conforme projeto'),
 row('Agentes de IA',null,'Base autorizada, qualificação e follow-up'),row('Reuniões','1 mensal','Semanais'),
 row('Treinamentos',null,'Inicial e capacitação progressiva'),row('Branding',null,'Posicionamento e manual de identidade'),
 row('Plano de marketing','Diagnóstico comercial e planejamento de campanhas','Plano aprofundado, mercado e planejamento anual'),
 row('Automações',null,'Processos e relacionamento conforme projeto'),row('Dashboards','Indicadores de campanhas na reunião mensal','Dashboards e indicadores comerciais'),
 row('Universidade Construcel',null,'Desenvolvimento progressivo / EAD'),
];

export function calculateFreelanceQuote(quantities: Quantities, catalog: Service[] = serviceCatalog) {
 const quote=calculateQuote('sprint',quantities,catalog);
 const lines=quote.lines.map(line=>({...line,additional:false}));
 return {...quote,lines,baseTotal:0,knownTotal:quote.once,monthly:quote.recurring,pending:lines.filter(line=>line.subtotal===null)};
}
export function freelanceSummary(quantities: Quantities) {
 const quote=calculateFreelanceQuote(quantities);
 return ['SOLICITAÇÃO DE ORÇAMENTO FREELANCER — NÃO É CONTRATO',
  `Cliente: ${proposal.company}`,`Agência: ${proposal.agency}`,
  'Modalidade: serviços individuais, sem adesão a plano e sem mensalidade de plano.',
  ...quote.lines.map(line=>`- ${line.quantity} × ${line.service.name} (${line.service.unit}; ${line.service.billing==='monthly'?'recorrente mensal':'avulso único'}): ${line.subtotal===null?'Sob orçamento':money(line.subtotal)}`),
  ...(!quote.lines.length?['Nenhum serviço selecionado.']:[]),
  `Subtotal avulso conhecido: ${quote.lines.some(line=>line.subtotal!==null&&line.service.billing==='once')?money(quote.once):'Sem valores cadastrados'}`,
  `Recorrentes de serviços selecionados: ${quote.lines.some(line=>line.subtotal!==null&&line.service.billing==='monthly')?money(quote.recurring)+'/mês':'Nenhum com preço cadastrado'}`,
  `Serviços sob orçamento: ${quote.pending.map(line=>line.service.name).join(', ')||'Nenhum selecionado'}`,
  'Itens sob orçamento não entram nos totais conhecidos e não são gratuitos. Prazos e condições dependem de orçamento aprovado.',
  'Despesas externas: não incluído — sob aprovação. Mídia, hospedagem, licenças, APIs e terceiros não equivalem a zero.',
  'Nenhuma solicitação é enviada, nenhum contrato é concluído e nenhuma cobrança é realizada nesta página.',
 ].join('\n');
}

export function filterServiceCatalog(category:string,query:string,catalog:Service[]=serviceCatalog){
 const fold=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
 const term=fold(query.trim());
 return catalog.filter(service=>(category==='Todas'||service.category===category)&&(!term||fold(`${service.name} ${service.category} ${service.description}`).includes(term)));
}
