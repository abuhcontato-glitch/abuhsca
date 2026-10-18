import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Layers3, LockKeyhole, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { proposal, sections } from './config';
import { expirationDate } from './dates';
import { TechnologyBudget } from './Technology';

const money = (value: number) => value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0});
function OfferDeliverables() {
 return <div className="offer-deliverables">{[['Implantação inicial', proposal.maratona.setupDeliverables], ['Gestão mensal', proposal.maratona.monthlyDeliverables]].map(([title,items]) => <div key={title as string} className="offer-deliverable-group"><h3>{title as string}</h3><ul className="investment-included">{(items as string[]).map(item=><li key={item}><Check size={17}/>{item}</li>)}</ul></div>)}</div>;
}

function OfferValidity() {
 const expiry = expirationDate(proposal.presentedAt, proposal.validityMonths);
 if (!expiry) return <p className="offer-validity">Validade: {proposal.validityMonths} meses após a apresentação. Data efetiva a confirmar.</p>;
 return <p className="offer-validity">{expiry.getTime() <= Date.now() ? 'Proposta expirada. As condições precisam ser reconfirmadas.' : `Condições válidas até ${expiry.toLocaleDateString('pt-BR', {timeZone:'America/Sao_Paulo'})}.`}</p>;
}
function PriceSummary({ checkout = false }: {checkout?: boolean}) {
 const offer = proposal.maratona;
 const total = offer.setup + offer.monthly * offer.months;
 return <aside className="maratona-card" aria-label="Resumo do investimento MARATONA">
  <div className="maratona-card-top"><span className="offer-badge">OFERTA PRINCIPAL</span><Layers3 size={25} strokeWidth={1.4}/></div>
  <h3>{offer.name}</h3><p className="maratona-tagline">{offer.tagline}</p>
  <p className="maratona-price">{money(offer.monthly)}<span>/mês</span></p>
  <dl className="maratona-breakdown"><div><dt>Implantação inicial</dt><dd>{money(offer.setup)}</dd></div><div><dt>Contrato</dt><dd>{offer.months} meses</dd></div><div className="maratona-total"><dt>Total contratual</dt><dd>{money(total)}</dd></div></dl>
  <p className="maratona-calculation">{money(offer.setup)} de implantação + {offer.months} mensalidades de {money(offer.monthly)}. Custos externos não incluídos.</p>
  {checkout ? <><button className="primary-button maratona-disabled" type="button" disabled><LockKeyhole size={16}/>Assinatura e pagamento em preparação</button><p className="checkout-pending">Esta etapa permite revisar a oferta. Contrato eletrônico, assinatura e gateway ainda precisam ser integrados. Nenhuma contratação ou cobrança é realizada aqui.</p></> : <Link className="primary-button maratona-cta" to="/construcel/contratacao/maratona">Quero aproveitar esta oferta <ArrowUpRight size={20}/></Link>}
  <div className="offer-assurance"><ShieldCheck size={17}/><span>Escopo e condições formalizados em contrato.</span></div><OfferValidity/><TechnologyBudget offer="maratona"/>
 </aside>;
}
function OfferConditions() {
 return <div className="offer-conditions"><h3>Condições e despesas adicionais</h3><p>Os honorários remuneram os serviços, a direção, a gestão e a equipe mobilizada pela ABUHSCA para executar o escopo contratado.</p><p>Não estão incluídos, salvo previsão expressa em contrato:</p><ul>{proposal.externalCosts.map(cost=><li key={cost}>{cost}</li>)}</ul><p>Os custos externos devem ser previamente orçados e aprovados pela contratante. A equipe necessária ao escopo contratado não representa uma cobrança adicional automática.</p><p>Estas são condições comerciais propostas, não uma validação de rentabilidade nem cotações verificadas do mercado de Brasília. Antes da assinatura, o Premium exige auditoria do catálogo e orçamento real de produção, IA e integrações, com avaliação de custos, impostos e capacidade de entrega.</p><p>A implantação será progressiva, conforme cronograma e dependências técnicas acordadas. O levantamento inicial definirá o volume do catálogo, integrações necessárias e responsabilidades pelo fornecimento de informações e acessos. Implantação e custos externos serão explicados e negociados previamente com Ana Paula.</p><p>Não há garantia de quantidade específica de leads, vendas ou faturamento.</p></div>;
}
export function InvestmentSection() {
 const index = sections.findIndex(section=>section.id==='investimento');
 return <section id="investimento" className="investment-section" aria-labelledby="investment-title">
  <div className="section-number">{String(index+1).padStart(2,'0')} / {String(sections.length).padStart(2,'0')} · INVESTIMENTO</div>
  <div className="investment-grid"><div className="investment-copy"><p className="eyebrow">UMA NOVA ESTRUTURA PARA CRESCER.</p><h2 id="investment-title">MARATONA<span>.</span><small>{proposal.maratona.subtitle}</small></h2><p className="investment-lead">{proposal.maratona.tagline}</p><p className="investment-description">{proposal.maratona.description}</p><OfferDeliverables/><div className="investment-direction"><span className="status-dot"/><p>Liderança de <strong>Maike Christian</strong>, com especialistas mobilizados conforme as demandas e o escopo contratado. Implantação progressiva ao longo do cronograma.</p></div></div><PriceSummary/></div>
  <OfferConditions/>
  <div className="investment-closing"><p>O futuro da Construcel não será construído apenas com ideias.</p><strong>Será construído com execução.</strong><span>ABUHSCA × CONSTRUCEL</span></div>
 </section>;
}
export function MaratonaCheckout() {
 useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
 return <main id="conteudo" className="maratona-checkout"><header className="checkout-header"><Link to="/construcel" className="checkout-back"><ArrowLeft size={17}/>Voltar à proposta</Link><span>ABUHSCA × CONSTRUCEL</span></header><ol className="checkout-stages" aria-label="Etapas da contratação"><li aria-current="step"><span>01</span>Revisão da oferta</li><li><span>02</span>Contrato e assinatura</li><li><span>03</span>Pagamento</li><li><span>04</span>Onboarding</li></ol><div className="investment-grid"><div className="checkout-copy"><p className="eyebrow">PROPOSTA EXCLUSIVA · {proposal.client.toUpperCase()}</p><h1>Revise o seu<br/><span>próximo capítulo.</span></h1><h2>{proposal.maratona.name}</h2><p className="investment-lead">{proposal.maratona.tagline}</p><p className="investment-description">{proposal.maratona.description}</p><OfferDeliverables/><div className="checkout-next"><ShieldCheck size={25}/><div><h3>Como a contratação será concluída</h3><p>Após a revisão de escopo e condições, a contratante será identificada no fluxo seguro de contrato e assinatura. O pagamento será processado pelo fornecedor escolhido e confirmado pelo servidor antes do onboarding.</p></div></div><Link className="checkout-back" to="/construcel">Continuar revisando a proposta <ArrowRight size={17}/></Link></div><PriceSummary checkout/></div><OfferConditions/></main>;
}
