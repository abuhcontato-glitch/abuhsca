import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers3, TrendingUp, Zap } from 'lucide-react';
import { useCommercial } from './CommercialContext';
import { TractionOffer } from './TractionOffer';
import { money } from './commercial';
import { proposal, tractionOffer } from './config';

export function ProposalPaths() {
 const {selectPlan}=useCommercial();const [traction,setTraction]=useState(false);
 function show(id:string){requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));}
 return <div id="escolha-proposta" className="proposal-paths" aria-labelledby="proposal-paths-title">
  <p className="eyebrow">TRÊS CAMINHOS. A SUA ESCOLHA.</p><h2 id="proposal-paths-title">Qual operação faz sentido para você?</h2><p>Do primeiro orçamento à operação completa: escolha o nível de acompanhamento que a Construcel precisa.</p>
  <nav className="proposal-path-grid" aria-label="Escolher apresentação">
   <Link className="plan-option" to="/construcel/sprint" state={{sprintReleased:true}} onClick={()=>selectPlan('sprint')}><Zap size={27}/><h3>LTDA (SPRINT)</h3><strong>{money(proposal.sprint.monthly)}<small>/mês</small></strong><p>90 dias propostos de aquisição de clientes, anúncios e geração de orçamentos, com execução remota.</p><span className="proposal-path-cta">Conhecer o SPRINT <ArrowUpRight size={17}/></span></Link>
   <button type="button" className={`plan-option ${traction?'selected':''}`} aria-expanded={traction} aria-controls="proposta-tracao" onClick={()=>{setTraction(true);show('proposta-tracao');}}><TrendingUp size={27}/><h3>TRAÇÃO</h3><strong>{tractionOffer.priceStatus}</strong><p>Marketing e vendas: conteúdo presencial, campanhas e acompanhamento dos orçamentos. Uma etapa entre o SPRINT e a MARATONA.</p><span className="proposal-path-cta">Conhecer a TRAÇÃO <ArrowUpRight size={17}/></span></button>
   <button type="button" className="plan-option" onClick={()=>{selectPlan('maratona');setTraction(false);show('metodologia');}}><Layers3 size={27}/><h3>MARATONA</h3><strong>{money(proposal.maratona.monthly)}<small>/mês</small></strong><p>Conheça a metodologia e a operação completa de marketing, tecnologia, comercial e IA.</p><span className="proposal-path-cta">Explorar a MARATONA <ArrowUpRight size={17}/></span></button>
  </nav>
  <div id="proposta-tracao" hidden={!traction}><TractionOffer/></div>
 </div>;
}
