import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3, LockKeyhole, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { proposal, sections } from './config';
import { expirationDate } from './dates';
import { TechnologyBudget } from './Technology';
import { CommercialAlignment } from './CommercialAlignment';
import { useCommercial } from './CommercialContext';
import { PlanDeliverables, QuoteFinancialDetails, TractionConditions } from './CommercialExperience';

const money = (value: number) => value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0});
function OfferValidity() {
 const expiry = expirationDate(proposal.presentedAt, proposal.validityMonths);
 if (!expiry) return <p className="offer-validity">Validade: {proposal.validityMonths} meses após a apresentação. Data efetiva a confirmar.</p>;
 return <p className="offer-validity">{expiry.getTime() <= Date.now() ? 'Proposta expirada. As condições precisam ser reconfirmadas.' : `Condições válidas até ${expiry.toLocaleDateString('pt-BR', {timeZone:'America/Sao_Paulo'})}.`}</p>;
}
export function PriceSummary({ checkout = false, appearance = 'maratona' }: {checkout?: boolean; appearance?: 'maratona'|'sprint'}) {
 const {plan}=useCommercial(), offer=proposal[plan], sprintStyle=appearance==='sprint';
 return <aside className={sprintStyle?'sprint-price':'maratona-card'} aria-label={`Resumo do investimento ${plan.toUpperCase()}`}>
  <div className="maratona-card-top"><span className="offer-badge">{offer.name}</span><Layers3 size={25} strokeWidth={1.4}/></div>
  <h3>{offer.name}</h3><p className="maratona-tagline">{offer.tagline}</p>
  <p className={sprintStyle?'sprint-monthly':'maratona-price'}>{money(offer.monthly)}<span>/mês</span></p>
  <QuoteFinancialDetails/>
  {checkout ? <><button className="primary-button maratona-disabled" type="button" disabled><LockKeyhole size={16}/>Assinatura e pagamento em preparação</button><p className="checkout-pending">Revisão e solicitação comercial. Nenhuma contratação ou cobrança é realizada aqui.</p></> : <Link className="primary-button maratona-cta" to={`/construcel/contratacao/${plan}`}>Revisar proposta <ArrowUpRight size={20}/></Link>}
  <div className="offer-assurance"><ShieldCheck size={17}/><span>Escolha sujeita à negociação e formalização em contrato.</span></div><OfferValidity/>{(plan==='sprint'||plan==='tracao'||plan==='maratona')&&<TechnologyBudget offer={plan}/>}
 </aside>;
}
export function OfferConditions() {
 const {plan}=useCommercial();
 if(plan==='tracao')return <TractionConditions/>;
 if(plan==='base'||plan==='arranque')return <div className="offer-conditions"><h3>Condições deste plano</h3><p>Ciclo inicial proposto de 30 dias. Continuidade e condições serão combinadas antes da contratação. A execução e os limites são somente os descritos nesta proposta.</p><p>Verba de mídia, licenças e serviços de terceiros serão orçados e aprovados separadamente. Não há promessa de leads, vendas ou faturamento, nem contratação ou cobrança automática.</p><CommercialAlignment/></div>;
 return <div className="offer-conditions"><h3>Condições e despesas adicionais</h3><p>Os honorários remuneram os serviços, a direção, a gestão e a equipe mobilizada pela ABUHSCA para executar o escopo contratado.</p><p>Mídia, domínio, hospedagem, licenças, tarifas de pagamento, APIs e despesas extraordinárias serão orçados e aprovados separadamente dos honorários.</p><p>Os custos externos devem ser previamente orçados e aprovados pela contratante. A equipe necessária ao escopo contratado não representa uma cobrança adicional automática.</p><p>Estas são condições comerciais propostas, não uma validação de rentabilidade nem cotações verificadas do mercado de Brasília. Antes da assinatura, a MARATONA exige auditoria do catálogo e orçamento real de produção, IA e integrações, com avaliação de custos, impostos e capacidade de entrega.</p><p>As demonstrações representam implantação prevista, desenvolvimento progressivo ou escopo técnico adicional; não são sistemas já entregues. “Escopo técnico adicional” identifica aprofundamento a dimensionar dentro da MARATONA, sem cobrança automática. A implantação será progressiva, conforme cronograma e dependências técnicas acordadas. O levantamento inicial definirá o volume do catálogo, integrações necessárias e responsabilidades pelo fornecimento de informações e acessos. Implantação e custos externos serão explicados e negociados previamente com Ana Paula.</p><p>Não há garantia de quantidade específica de leads, vendas ou faturamento.</p><CommercialAlignment/></div>;
}
export function InvestmentSection() {
 const index = sections.findIndex(section=>section.id==='investimento');
 const {plan}=useCommercial(), offer=proposal[plan];
 return <section id="investimento" className="investment-section" aria-labelledby="investment-title">
  <div className="section-number">{String(index+1).padStart(2,'0')} / {String(sections.length).padStart(2,'0')} · INVESTIMENTO</div>
  <div className="investment-grid"><div className="investment-copy"><p className="eyebrow">UMA NOVA ESTRUTURA PARA CRESCER.</p><h2 id="investment-title">{plan.toUpperCase()}<span>.</span><small>{plan==='maratona'?proposal.maratona.subtitle:'OPERAÇÃO COMERCIAL · 90 DIAS'}</small></h2><p className="investment-lead">{offer.tagline}</p><p className="investment-description">{offer.description}</p><PlanDeliverables/><div className="investment-direction"><span className="status-dot"/><p>Liderança de <strong>Maike Christian</strong>, com especialistas mobilizados conforme as demandas e o escopo contratado. Implantação progressiva ao longo do cronograma.</p></div></div><PriceSummary/></div>
  <OfferConditions/>
  <div className="investment-closing"><p>O futuro da Construcel não será construído apenas com ideias.</p><strong>Será construído com execução.</strong><span>ABUHSCA × CONSTRUCEL</span></div>
 </section>;
}
export function MaratonaCheckout() {
 useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
 const {plan}=useCommercial(), offer=proposal[plan];
 return <main id="conteudo" className="maratona-checkout"><header className="checkout-header"><Link to={`/construcel/${plan}`} className="checkout-back"><ArrowLeft size={17}/>Voltar à proposta</Link><span>ABUHSCA × CONSTRUCEL</span></header><ol className="checkout-stages" aria-label="Etapas da contratação"><li aria-current="step"><span>01</span>Revisão da oferta</li><li><span>02</span>Contrato e assinatura</li><li><span>03</span>Pagamento</li><li><span>04</span>Onboarding</li></ol><div className="investment-grid"><div className="checkout-copy"><p className="eyebrow">PROPOSTA EXCLUSIVA · {proposal.client.toUpperCase()}</p><h1>Revise o seu<br/><span>próximo capítulo.</span></h1><h2>{offer.name}</h2><p className="investment-lead">{offer.tagline}</p><p className="investment-description">{offer.description}</p><PlanDeliverables/><div className="checkout-next"><ShieldCheck size={25}/><div><h3>Como a contratação será concluída</h3><p>Revise as entregas, o prazo e o investimento deste plano. O aceite do escopo e das condições será formalizado em contrato antes de assinatura e pagamento. Nenhuma contratação ou cobrança é concluída nesta página.</p></div></div><Link className="checkout-back" to={`/construcel/${plan}`}>Continuar revisando a proposta <ArrowRight size={17}/></Link></div><PriceSummary checkout/></div><OfferConditions/></main>;
}
