import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers3, TrendingUp, Zap } from 'lucide-react';
import { money } from './commercial';
import { proposal } from './config';

export function ProposalPaths() {
 return <div id="escolha-proposta" className="proposal-paths" aria-labelledby="proposal-paths-title">
  <p className="eyebrow">TRÊS CAMINHOS. A SUA ESCOLHA.</p><h2 id="proposal-paths-title">Qual operação faz sentido para você?</h2><p>Cada opção abre uma proposta completa, com suas entregas, demonstrações, cronograma e investimento.</p>
  <nav className="proposal-path-grid" aria-label="Escolher apresentação">
   <Link className="plan-option" to="/construcel/sprint"><Zap size={27}/><h3>LTDA (SPRINT)</h3><strong>{money(proposal.sprint.monthly)}<small>/mês</small></strong><p>90 dias propostos de aquisição de clientes, anúncios e geração de orçamentos, com execução remota.</p><span className="proposal-path-cta">Conhecer o SPRINT <ArrowUpRight size={17}/></span></Link>
   <Link className="plan-option" to="/construcel/tracao"><TrendingUp size={27}/><h3>TRAÇÃO</h3><strong>{money(proposal.tracao.monthly)}<small>/mês</small></strong><p>Marketing e vendas: conteúdo presencial, campanhas e acompanhamento dos orçamentos.</p><span className="proposal-path-cta">Conhecer a TRAÇÃO <ArrowUpRight size={17}/></span></Link>
   <Link className="plan-option" to="/construcel/maratona"><Layers3 size={27}/><h3>MARATONA</h3><strong>{money(proposal.maratona.monthly)}<small>/mês</small></strong><p>Operação completa de marketing, tecnologia, comercial e inteligência artificial.</p><span className="proposal-path-cta">Conhecer a MARATONA <ArrowUpRight size={17}/></span></Link>
  </nav>
 </div>;
}
