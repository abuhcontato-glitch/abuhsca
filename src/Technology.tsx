import { Check, Layers3, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';
import { MediaGallery } from './MediaGallery';
import { sections } from './config';

export const technologyPlan = {
 maratona: { min:205, max:705, target:500 },
 sprint: { pendingScope:true },
};
const money=(value:number)=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
const tools = [
 ['Estratégia e IA','ChatGPT + Codex','Planejamento, textos, código e automações.','Ferramentas compartilhadas da agência, conforme licenças.'],
 ['Design','Canva Pro ou equivalente','Posts, anúncios e apresentações.','Ferramenta de produção da agência.'],
 ['Vídeo','CapCut ou editor existente','Reels, TikTok e anúncios.','Reutilizar licença comercial compatível.'],
 ['Organização','GitHub + ferramenta de tarefas','Versões, código e produção.','Projetos e permissões separados por cliente.'],
 ['Site e loja','WordPress + WooCommerce ou stack própria','Presença digital, catálogo e vendas.','Decisão após levantamento do catálogo e integrações.'],
 ['CRM','ClickSell ou CRM escolhido','Funil e oportunidades.','Plano e usuários conforme a operação.'],
 ['Automação','n8n','Integrações e processos.','Infraestrutura e consumo a dimensionar.'],
 ['Agente de IA','API de modelo de linguagem','Atendimento conversacional.','Cobrança de API separada das assinaturas de chat.'],
 ['WhatsApp','Meta WhatsApp Business Platform','Mensagens e atendimento.','Provedor, permissões e custos quando necessários.'],
 ['Campanhas','Meta Ads + Google Ads','Aquisição de oportunidades.','Contas e verba de mídia da cliente.'],
 ['Métricas','GA4, Search Console, Tag Manager e Looker Studio','Mensuração e relatórios.','Configuração conforme consentimento e acessos.'],
 ['Conteúdo','Meta Business Suite + TikTok Studio','Publicação e acompanhamento.','Contas da Construcel, acesso delegado à agência.'],
];
const infrastructure = [
 ['Hospedagem do site e loja',100,100],['Domínio · reserva mensal equivalente',5,5],['CRM',0,150],['Infraestrutura de automação',50,100],['API de IA',50,150],['WhatsApp / API / provedor',0,200],
] as const;
export function TechnologyBudget({offer}:{offer:'maratona'|'sprint'|'tracao'}) {
 const budget=technologyPlan.maratona;
 return <aside className="technology-budget"><div className="technology-budget-title"><Wallet size={21}/><h3>Reserva de tecnologia · {offer.toUpperCase()}</h3></div>{offer!=='maratona' ? <p className="technology-budget-value">A dimensionar</p> : <p className="technology-budget-value">{money(budget.min)}–{money(budget.max)}<span>/mês</span></p>}<p>{offer!=='maratona' ? 'Hospedagem da landing page, CRM pago e eventuais licenças serão dimensionados e aprovados separadamente pela Construcel.' : 'Estimativa preliminar de planejamento, a revisar com o escopo técnico.'} Infraestrutura da cliente, adicional aos honorários e à verba de anúncios. Não é cotação de fornecedor nem cobrança confirmada.</p>{offer==='maratona'&&<p>Meta inicial de até {money(technologyPlan.maratona.target)}/mês, condicionada a um projeto técnico que caiba nesse valor. Se não couber, as alternativas serão apresentadas antes de contratar.</p>}<p>O custo real depende de catálogo, plataformas, mensagens, consumo de APIs e integrações. Não inclui tarifas de transação nem trabalho humano. Qualquer contratação exige orçamento e aprovação prévia.</p></aside>;
}
export function EcosystemSection() {
 const index=sections.findIndex(section=>section.id==='integracoes');
 return <section id="integracoes" className="ecosystem-section"><div className="section-number">{String(index+1).padStart(2,'0')} / {String(sections.length).padStart(2,'0')} · ECOSSISTEMA PREVISTO</div><div className="ecosystem-heading"><p className="eyebrow">FERRAMENTAS COM PROPÓSITO. CUSTOS COM CLAREZA.</p><h2>TUDO CONECTADO.<br/><span>CADA EMPRESA NO SEU AMBIENTE.</span></h2><p>Um método reutilizável da ABUHSCA, com contas, dados e acessos separados para cada cliente. A infraestrutura específica da Construcel fica em nome e sob responsabilidade financeira da Construcel, conforme aprovação.</p></div><div className="ecosystem-principles"><article><ShieldCheck size={27}/><h3>Propriedade e acesso</h3><p>Contas e dados da cliente, permissões delegadas e acesso limitado às necessidades da operação.</p></article><article><Layers3 size={27}/><h3>Começar enxuto</h3><p>Reutilizar licenças comerciais existentes da agência e contratar somente o que o projeto técnico exigir.</p></article><article><Wallet size={27}/><h3>Aprovar antes de ativar</h3><p>Separar honorários, mídia e infraestrutura. Nenhuma assinatura paga é ativada sem aprovação.</p></article></div>
 <div className="technology-tools">{tools.map(([area,name,purpose,note])=><article key={area}><p className="eyebrow">{area}</p><h3>{name}</h3><p>{purpose}</p><small>{note}</small><span className="technology-status">PREVISTO · SUJEITO A VALIDAÇÃO</span></article>)}</div>
 <div className="ecosystem-budgets"><TechnologyBudget offer="sprint"/><TechnologyBudget offer="maratona"/></div>
 <details className="technology-breakdown"><summary>Composição estimada da infraestrutura MARATONA</summary><div className="technology-table-wrap"><table><caption>Premissas mensais em reais, não cotações confirmadas</caption><thead><tr><th scope="col">Despesa da cliente</th><th scope="col">Mínimo</th><th scope="col">Máximo</th></tr></thead><tbody>{infrastructure.map(([name,min,max])=><tr key={name}><th scope="row">{name}</th><td>{money(min)}</td><td>{money(max)}</td></tr>)}</tbody><tfoot><tr><th scope="row">Reserva estimada</th><td>{money(technologyPlan.maratona.min)}</td><td>{money(technologyPlan.maratona.max)}</td></tr></tfoot></table></div><p>O núcleo do WooCommerce é gratuito; hospedagem, extensões, frete, checkout e outras integrações podem gerar custos. Automação gerenciada e auto-hospedada têm condições diferentes: a faixa é apenas premissa para dimensionamento.</p></details>
 <div className="ecosystem-rollout"><h3>Configuração proposta, em etapas.</h3><ol>{['Separar ambiente, contas e propriedade dos dados da Construcel.','Configurar anúncios, mensuração e organização conforme os acessos disponíveis.','Escolher hospedagem e plataforma após a auditoria do catálogo.','Testar CRM, automações e IA com limites de consumo.','Apresentar orçamento real para aprovação antes de ativar serviços pagos.'].map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span>{step}<ArrowRight size={16}/></li>)}</ol><p><Check size={15}/> Plano demonstrativo: nenhum fornecedor foi contratado ou integrado por esta apresentação.</p></div><MediaGallery section="integracoes"/></section>;
}
