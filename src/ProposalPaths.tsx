import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calculator, Layers3, Zap } from 'lucide-react';
import { useCommercial } from './CommercialContext';
import { ServiceQuoteCalculator } from './CommercialExperience';
import { money } from './commercial';
import { proposal } from './config';

export function ProposalPaths() {
 const {selectPlan}=useCommercial();const [freelancer,setFreelancer]=useState(false);
 function show(id:string){requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));}
 return <div id="escolha-proposta" className="proposal-paths" aria-labelledby="proposal-paths-title">
  <p className="eyebrow">TRÊS CAMINHOS. A SUA ESCOLHA.</p><h2 id="proposal-paths-title">O que você quer conhecer?</h2><p>Escolha a proposta que faz sentido para a Construcel ou monte um orçamento de serviços avulsos.</p>
  <nav className="proposal-path-grid" aria-label="Escolher apresentação">
   <Link className="plan-option" to="/construcel/sprint" state={{sprintReleased:true}} onClick={()=>selectPlan('sprint')}><Zap size={27}/><h3>LTDA (SPRINT)</h3><strong>{money(proposal.sprint.monthly)}<small>/mês</small></strong><p>90 dias propostos de aquisição de clientes, anúncios e geração de orçamentos.</p><span className="proposal-path-cta">Conhecer o SPRINT <ArrowUpRight size={17}/></span></Link>
   <button type="button" className="plan-option" onClick={()=>{selectPlan('maratona');setFreelancer(false);show('metodologia');}}><Layers3 size={27}/><h3>MARATONA</h3><strong>{money(proposal.maratona.monthly)}<small>/mês</small></strong><p>Conheça a metodologia e a operação completa de marketing, tecnologia, comercial e IA.</p><span className="proposal-path-cta">Explorar a MARATONA <ArrowUpRight size={17}/></span></button>
   <button type="button" className={`plan-option ${freelancer?'selected':''}`} aria-expanded={freelancer} aria-controls="calculadora-freelancer" onClick={()=>{setFreelancer(true);show('calculadora-freelancer');}}><Calculator size={27}/><h3>Calculadora Freelancer</h3><strong>Sob orçamento</strong><p>Escolha serviços pontuais de design, audiovisual, web, marketing e IA, sem adesão a plano mensal.</p><span className="proposal-path-cta">Montar meu orçamento <ArrowUpRight size={17}/></span></button>
  </nav>
  <div id="calculadora-freelancer" hidden={!freelancer}><ServiceQuoteCalculator standalone/></div>
 </div>;
}
