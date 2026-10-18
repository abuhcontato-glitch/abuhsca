import { FileCheck2 } from 'lucide-react';
import { proposal } from './config';

export function CommercialAlignment() {
 const difference = (proposal.maratona.monthly - proposal.sprint.monthly).toLocaleString('pt-BR', {style:'currency',currency:'BRL',maximumFractionDigits:0});
 return <aside className="commercial-alignment"><FileCheck2 size={23}/><div><h3>Escopo alinhado antes da contratação.</h3><p>A diferença de {difference} mensais corresponde a entregas e capacidade operacional diferentes. A SPRINT concentra aquisição, campanhas, landing page e organização comercial. A MARATONA contempla o departamento completo, conforme o escopo apresentado.</p><p>Ana Paula deverá revisar e concordar expressamente com as entregas, exclusões e responsabilidades da opção escolhida antes da assinatura. A referência de preço, por si só, não representa concordância com o escopo.</p></div></aside>;
}
