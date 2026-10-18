import { Check } from 'lucide-react';
import { proposal, tractionOffer } from './config';
import { MediaGallery } from './MediaGallery';
import { CommercialRequest } from './CommercialExperience';

export function tractionSummary() {
 return ['SOLICITAÇÃO DE PROPOSTA — TRAÇÃO',`Cliente: ${proposal.company}`,`Agência: ${proposal.agency}`,tractionOffer.name,
 tractionOffer.tagline,'Investimento mensal: sob proposta. Implantação: a dimensionar. Total contratual: não definido.',
 `Prazo sugerido: ${tractionOffer.proposedMonths} meses, sujeito à aprovação.`,
 ...tractionOffer.deliverables.flatMap(group=>[group.title,...group.items.map(item=>`- ${item}`)]),
 'Fora desta oferta:',...tractionOffer.exclusions.map(item=>`- ${item}`),
 tractionOffer.responsibilities,tractionOffer.conditions,
 'Mídia, licenças, hospedagem, APIs e despesas externas: não incluído — sob aprovação.',
 'Não é contratação concluída. Nenhuma mensagem, assinatura ou cobrança é realizada automaticamente.',
 ].join('\n');
}
export function TractionOffer() {
 return <div className="traction-offer" aria-labelledby="traction-title">
  <p className="eyebrow">ALTERNATIVA INTERMEDIÁRIA · ESCOPO PROPOSTO</p><h2 id="traction-title">TRAÇÃO<span>.</span><small>Marketing e Vendas</small></h2><p className="investment-lead">{tractionOffer.tagline}</p>
  <div className="traction-positioning"><p><strong>SPRINT</strong><span>Captar oportunidades com execução remota.</span></p><p><strong>TRAÇÃO</strong><span>Adicionar conteúdo original e rotina comercial.</span></p><p><strong>MARATONA</strong><span>Construir e operar o ecossistema completo.</span></p></div>
  <div className="offer-deliverables">{tractionOffer.deliverables.map(group=><div className="offer-deliverable-group" key={group.title}><h3>{group.title}</h3><ul className="investment-included">{group.items.map(item=><li key={item}><Check size={17}/>{item}</li>)}</ul></div>)}</div>
  <MediaGallery numbers={[13,18]}/>
  <p className="price-note">Prévias demonstrativas de produção e CRM. A TRAÇÃO prevê CRM básico; o mockup não representa integrações ou funcionalidades avançadas incluídas. Nenhum sistema é apresentado como já entregue.</p>
  <div className="traction-conditions"><h3>Investimento a dimensionar</h3><p><strong>{tractionOffer.priceStatus}</strong> · Prazo sugerido: {tractionOffer.proposedMonths} meses.</p><p>{tractionOffer.conditions}</p><p>Mensalidade, implantação e despesas sem preço aprovado permanecem pendentes; não são gratuitas nem entram nos valores dos outros planos.</p><p>{tractionOffer.responsibilities}</p><details className="sprint-exclusions"><summary>O que permanece na MARATONA ou exige novo escopo</summary><ul>{tractionOffer.exclusions.map(item=><li key={item}>{item}</li>)}</ul></details><p className="price-note">Mídia, hospedagem, licenças, APIs, deslocamentos e serviços de terceiros dependem de orçamento e aprovação. A mudança de escopo precisa da concordância expressa da Construcel.</p></div>
  <CommercialRequest customSummary={tractionSummary()} fileLabel="tracao"/>
 </div>;
}
