import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers3, TrendingUp, Zap, Compass, Target } from 'lucide-react';
import { money } from './commercial';
import { proposal } from './config';
const choices=[
 {id:'base',label:'BASE',Icon:Compass,text:'Orientação estratégica: uma reunião remota mensal e prioridades para sua equipe executar.'},
 {id:'arranque',label:'ARRANQUE',Icon:Target,text:'Meta Ads essencial: uma campanha ativa, quatro criativos simples e acompanhamento semanal.'},
 {id:'sprint',label:'LTDA (SPRINT)',Icon:Zap,text:'90 dias propostos de aquisição, anúncios e landing pages para captar orçamentos.'},
 {id:'tracao',label:'TRAÇÃO',Icon:TrendingUp,text:'Landing page, site oficial, chatbot, conteúdo presencial e acompanhamento comercial.'},
 {id:'maratona',label:'MARATONA',Icon:Layers3,text:'Landing page, site, e-commerce, chatbot, agente de IA e operação completa.'},
] as const;
export function ProposalPaths(){return <div id="escolha-proposta" className="proposal-paths" aria-labelledby="proposal-paths-title"><p className="eyebrow">CINCO CAMINHOS. A SUA ESCOLHA.</p><h2 id="proposal-paths-title">Qual operação faz sentido para você?</h2><p>Cada opção abre uma proposta completa, com entregas, demonstrações, cronograma e investimento próprios.</p><nav className="proposal-path-grid" aria-label="Escolher apresentação">{choices.map(({id,label,Icon,text})=><Link key={id} className="plan-option" to={`/construcel/${id}`}><Icon size={27}/><h3>{label}</h3><strong>{money(proposal[id].monthly)}<small>/mês</small></strong><p>{text}</p><span className="proposal-path-cta">Conhecer {label} <ArrowUpRight size={17}/></span></Link>)}</nav></div>;}
