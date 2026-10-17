import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, Zap } from 'lucide-react';
import { proposal } from './config';

const scope = ['Diagnóstico comercial prioritário', 'Otimização do Google Business Profile', 'Configuração e gestão de Google Ads', 'Configuração e gestão de Meta Ads', 'Organização básica do WhatsApp comercial', 'Uma landing page de captação', 'Ajustes estratégicos no Instagram', 'CRM simplificado', 'Monitoramento de leads e contatos', 'Reunião estratégica mensal'];
const excluded = ['E-commerce', 'Site institucional completo', 'Manual de identidade visual completo', 'Aplicativo próprio e EAD', 'CRM avançado', 'Gestão operacional de departamentos', 'Produção audiovisual presencial recorrente', 'Equipe multidisciplinar dedicada', 'Verbas publicitárias e ferramentas de terceiros'];
const timeline = [ ['Reativação e configuração.', 'Diagnóstico prioritário, organização dos canais e configuração das campanhas.'], ['Aquisição, testes e otimização.', 'Acompanhamento dos contatos, testes de criativos e ajustes nas campanhas.'], ['Análise e continuidade.', 'Leitura de desempenho e definição do plano para os próximos passos.'] ];
const money = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export function SprintRelease() {
  const [released, setReleased] = useState(false);
  return <div className="sprint-release">
    <div className="release-bar"><div><p className="eyebrow">UMA ALTERNATIVA PARA COMEÇAR</p><p>Primeiro, as prioridades comerciais.</p></div><button type="button" className="release-button" aria-expanded={released} aria-controls="sprint-offer" onClick={() => setReleased(!released)}>{released ? 'Recolher SPRINT' : 'Liberar SPRINT'}{released ? <Minus size={18}/> : <Plus size={18}/>}</button></div>
    {released && <div id="sprint-offer"><SprintOffer/></div>}
  </div>;
}

export function SprintOffer() {
  const { sprint, maratona } = proposal;
  const total = sprint.setup + sprint.monthly * sprint.months;
  const discount = Math.round((1 - sprint.monthly / maratona.monthly) * 100);
  return <article className="sprint-offer" aria-labelledby="sprint-title">
    <div className="sprint-heading"><p className="eyebrow"><Zap size={14}/> ABUHSCA × CONSTRUCEL · AQUISIÇÃO COMERCIAL</p><h2 id="sprint-title">SPRINT<span>.</span></h2><h3>90 dias para reativar sua<br/>aquisição comercial.</h3><p className="sprint-intro">{proposal.client}, vamos começar pelo que mais importa?</p><p>Que a Construcel seja encontrada no Google. Que o telefone toque, o WhatsApp receba novos contatos e o Instagram atraia oportunidades. Mais pessoas conhecendo a loja — e oportunidades que possam se transformar em vendas.</p></div>
    <div className="sprint-grid"><div><div className="sprint-owner"><span className="status-dot"/><p><strong>Direção e execução: Maike Christian.</strong><br/>Um escopo concentrado nas urgências comerciais, com atuação direta. A operação completa e a equipe multidisciplinar da MARATONA não fazem parte desta modalidade.</p></div><h3 className="sprint-subtitle">O essencial. Com direção.</h3><ul className="sprint-scope">{scope.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul></div><aside className="sprint-price" aria-label="Investimento SPRINT"><p className="discount-label">{discount}% OFF NA MENSALIDADE DE REFERÊNCIA</p><p className="price-reference">MARATONA: {money(maratona.monthly)}/mês</p><p className="sprint-monthly">{money(sprint.monthly)}<span>/mês</span></p><p className="price-caption">Foco no presente. Estrutura para avançar.</p><dl><div><dt>Implantação</dt><dd>{money(sprint.setup)}</dd></div><div><dt>Prazo inicial</dt><dd>{sprint.months} meses</dd></div><div className="sprint-total"><dt>Total contratual</dt><dd>{money(total)}</dd></div></dl><Link className="primary-button" to="/construcel/contratacao/sprint">Quero reativar as oportunidades comerciais <ArrowUpRight size={21}/></Link><p className="price-note">Condições preliminares, sujeitas à confirmação de escopo e orçamento. O desconto se aplica à mensalidade de referência, com redução proporcional de escopo. Não é o mesmo pacote da MARATONA com desconto.</p><p className="price-note">Verbas de mídia, ferramentas e demais custos externos não estão incluídos e precisam de orçamento e aprovação prévios.</p><ValidityNote/></aside></div>
    <div className="sprint-timeline">{timeline.map(([title,description],index) => <div key={title}><span className="timeline-number">0{index+1}</span><p className="eyebrow">MÊS 0{index+1}</p><h3>{title}</h3><p>{description}</p></div>)}</div>
    <details className="sprint-exclusions"><summary>O que não está incluído <Plus size={18}/></summary><ul>{excluded.map(item => <li key={item}>{item}</li>)}</ul></details>
    <div className="sprint-closing"><p>A MARATONA CONSTRÓI O FUTURO DA CONSTRUCEL.</p><strong>O SPRINT ENFRENTA AS URGÊNCIAS DO PRESENTE.</strong><ArrowRight size={28}/></div>
  </article>;
}
function ValidityNote() { return <p className="price-note">Validade: três meses após a data efetiva de apresentação, ainda a confirmar. Resultados dependem da execução e do mercado; não há garantia de contatos ou vendas.</p>; }

export function SprintPage() {
  return <main id="conteudo" className="sprint-page"><Link className="sprint-back" to="/construcel">← Voltar à proposta MARATONA</Link><p className="sprint-demo">APRESENTAÇÃO DEMONSTRATIVA · LIBERAÇÃO VISUAL, SEM AUTENTICAÇÃO</p><SprintRelease/></main>;
}
