import { FileCheck2 } from 'lucide-react';
import { proposal } from './config';

export function CommercialAlignment() {
 const difference = (proposal.maratona.monthly - proposal.sprint.monthly).toLocaleString('pt-BR', {style:'currency',currency:'BRL',maximumFractionDigits:0});
 return <aside className="commercial-alignment"><FileCheck2 size={23}/><div><h3>Escopo alinhado antes da contratação.</h3><p>A diferença de {difference} mensais corresponde a entregas e capacidade operacional diferentes. A SPRINT ativa os serviços originalmente prometidos, incluindo site, loja, conteúdo, campanhas, audiovisual, CRM, chatbot, IA e treinamento inicial. A MARATONA inclui toda essa base e amplia estratégia, tecnologia, módulos e evolução contínua.</p><p>Ana Paula deverá revisar e concordar expressamente com as entregas, etapas e responsabilidades da opção escolhida antes da assinatura. Implantação e prazos são propostas, não condições previamente acordadas. A referência de preço, por si só, não representa concordância com o escopo.</p></div></aside>;
}
