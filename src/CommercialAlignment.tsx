import { FileCheck2 } from 'lucide-react';
import { proposal } from './config';

export function CommercialAlignment() {
 const difference = (proposal.maratona.monthly - proposal.sprint.monthly).toLocaleString('pt-BR', {style:'currency',currency:'BRL',maximumFractionDigits:0});
 return <aside className="commercial-alignment"><FileCheck2 size={23}/><div><h3>Escopo alinhado antes da contratação.</h3><p>A diferença de {difference} mensais corresponde a entregas e capacidade operacional diferentes. A SPRINT é uma alternativa revisada, focada em aquisição e orçamentos pelo WhatsApp, com produção remota e escopo delimitado. A operação completa de marketing, tecnologia, e-commerce e IA permanece na MARATONA.</p><p>O escopo anteriormente apresentado por R$ 2.500 era mais amplo. Ana Paula precisa concordar expressamente com esta mudança, com as entregas, exclusões e responsabilidades antes de contratar. A atualização da página não representa essa concordância. Implantação da MARATONA e prazos são propostos; no SPRINT, não há implantação adicional para landing page e CRM simples e padronizados.</p></div></aside>;
}
