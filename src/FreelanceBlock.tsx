import { useState } from 'react';
import { BriefcaseBusiness, ArrowUpRight, Minus } from 'lucide-react';
import { ServiceQuoteCalculator } from './CommercialExperience';
import { serviceCatalog } from './commercial';

export function FreelanceBlock(){
 const [open,setOpen]=useState(false),[visited,setVisited]=useState(false);
 return <div id="servicos-freelance" className="freelance-block" aria-labelledby="freelance-title"><div className="freelance-intro"><div><p className="eyebrow">CONTRATAÇÃO PONTUAL · SEPARADA DOS PLANOS</p><h2 id="freelance-title">Serviços Freelance<span>.</span></h2><p>Precisa de uma entrega específica? Escolha os serviços da ABUHSCA individualmente e monte seu pedido de orçamento.</p><p className="freelance-catalog-meta">{serviceCatalog.length} serviços · {[...new Set(serviceCatalog.map(service=>service.category))].length} categorias · sem adesão a plano</p></div><button type="button" className="primary-button" aria-expanded={open} aria-controls="freelance-tool" onClick={()=>{setVisited(true);setOpen(!open);}}><BriefcaseBusiness size={18}/>{open?'Recolher catálogo':'Montar orçamento freelance'}{open?<Minus size={18}/>:<ArrowUpRight size={18}/>}</button></div><div id="freelance-tool" hidden={!open}>{visited&&<ServiceQuoteCalculator standalone/>}</div></div>;
}
