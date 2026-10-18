import { FileCheck2 } from 'lucide-react';
import { useCommercial } from './CommercialContext';

export function CommercialAlignment() {
 const {plan}=useCommercial();
 return <aside className="commercial-alignment"><FileCheck2 size={23}/><div><h3>Escopo alinhado antes da contratação.</h3><p>Ana Paula deverá revisar e concordar expressamente com as entregas, exclusões, etapas e responsabilidades desta proposta antes da assinatura. Atualizar a página não representa essa concordância.</p>{plan==='sprint'&&<p>O SPRINT é uma contraproposta revisada em relação ao pacote mencionado anteriormente. A mudança de escopo precisa ser apresentada e aceita expressamente.</p>}<p>Prazos e condições são propostos, sujeitos à formalização. Nenhuma contratação ou cobrança é concluída nesta apresentação.</p></div></aside>;
}
