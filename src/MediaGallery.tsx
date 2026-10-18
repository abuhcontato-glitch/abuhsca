import { useEffect, useRef, useState } from 'react';
import dimensions from './mediaDimensions.json';
import { X } from 'lucide-react';

const labels = [
 'Fachada Construcel', 'Ana Paula — protagonista', 'Maike Christian — direção', 'Grandes audiências',
 'Campanhas e projetos criativos', 'Plano de marketing — 120 páginas', 'Manual de identidade visual',
 'Google Meu Negócio — Perfil da Empresa', 'Domínio e hospedagem — HostGator', 'Site institucional', 'E-commerce',
 'Landing pages de conversão', 'Produção de Conteúdo', 'Meta Ads — descoberta',
 'Google Ads — intenção de compra', 'Dashboard comercial', 'SAC comercial — Atendimento omnichannel',
 'CRM — Kanban de vendas', 'Chatbot — Fluxos de atendimento', 'E-mail marketing e relacionamento',
 'Treinamento de vendedores', 'Universidade Construcel — EAD', 'Projetos, produtividade e conhecimento',
 'Base de conhecimento e biblioteca digital', 'Gestão financeira e indicadores',
 'Ecossistema de integrações', 'Automação de processos', 'Dos eventos às marcas',
 'Produção publicitária', 'Workshops e educação', 'Da estratégia à execução',
 'Reunião de alinhamento', 'Agente de IA',
];
const groups: Record<string, number[]> = {
 cerebro: [6,7,8,9,10,11,12,13,14,15],
 coracao: [16,17,18,19,33,20,21,22], membros: [23,25], integracoes: [26,27],
 jornada: [31,32],
};
const orderedMedia = Object.values(groups).flat();
const displayNumber = (number: number) => String(orderedMedia.indexOf(number) + 6).padStart(2, '0');
const serviceDescriptions: Record<number, string> = {
 18: 'Organize oportunidades, responsáveis e tarefas em cada etapa do funil comercial.',
 19: 'Automatize perguntas frequentes e encaminhamentos com regras, menus e fluxos predefinidos.',
 22: 'Conceito de plataforma com banner em carrossel e módulos de Diretoria, Financeiro, Faturamento, Comercial e Marketing.',
 23: 'Projetos, tarefas, colaboração, documentação e biblioteca digital reunidos para organizar a execução.',
 25: 'Planejamento financeiro e indicadores para acompanhar a operação com dados disponíveis e validados.',
 26: 'Ecossistema previsto, sujeito a APIs, licenças e permissões de cada ferramenta.',
 27: 'Fluxos demonstrativos para conectar etapas e encaminhar tarefas, com validação humana quando necessária.',
 33: 'Apoie a equipe com conversas em linguagem natural e consulta à base autorizada, com supervisão humana.',
};
function CroppedImage({ number, eager = false }: { number: number; eager?: boolean }) {
 const [width, height] = dimensions[String(number) as keyof typeof dimensions];
 const replacements: Record<number, string> = { 6: 'plano-marketing-construcel.png', 7: 'manual-identidade-construcel.png', 8: 'google-meu-negocio.png', 9: 'hostgator-dominio-hospedagem.png', 10: 'site-institucional-construcel.png', 11: 'ecommerce-construcel.png', 12: 'landingpage-formulario-chatbot.png', 13: 'producao-conteudo-ana-paula-maike.png', 14: 'meta-ads-construcel.png', 15: 'google-ads-construcel.png', 16: 'dashboard-comercial-construcel.png', 17: 'atendimento-omnichannel-construcel.png', 18: 'crm-kanban-construcel.png', 19: 'chatbot-fluxos-construcel.png', 20: 'email-marketing-construcel.png', 21: 'treinamento-comercial-maike.png', 22: 'universidade-construcel-ana-paula.png', 23: 'projetos-conhecimento-construcel.png', 25: 'financeiro-indicadores-construcel.png', 26: 'ecossistema-integracoes-construcel.png', 27: 'automacoes-processos-construcel.png', 31: 'jornada-seis-etapas-construcel.png', 32: 'reuniao-alinhamento-maike-ana.png', 33: 'agente-ia-construcel.png' };
 const imageFile = replacements[number] ?? `${String(number).padStart(2,'0')}.png`;
 const uncropped = number in replacements;
 return <div className={`media-crop ${uncropped ? 'media-uncropped' : ''}`} style={{ aspectRatio: width / (height * (uncropped ? 1 : .8)) }}>
  <img src={`${import.meta.env.BASE_URL}media/construcel/${imageFile}`} alt={number === 13 ? 'Montagem demonstrativa de Maike filmando Ana Paula com iPhone no gimbal, ring light e microfone de lapela' : number === 21 ? 'Montagem demonstrativa de Maike Christian conduzindo o treinamento da equipe comercial da Construcel' : number === 32 ? 'Montagem demonstrativa de Maike e Ana Paula em reunião de alinhamento da jornada de seis etapas' : `Prévia demonstrativa: ${labels[number-1]}`} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async"/>
 </div>;
}

export function MediaGallery({ section, numbers }: { section?: string; numbers?: number[] }) {
 const [selected, setSelected] = useState<number | null>(null);
 const dialog = useRef<HTMLDialogElement>(null);
 const returnFocus = useRef<HTMLButtonElement | null>(null);
 useEffect(() => {
  if (selected !== null) dialog.current?.showModal();
 }, [selected]);
 const items = numbers ?? groups[section ?? ''] ?? [];
 if (!items.length) return null;
 return <div className={`media-gallery ${items.length === 1 ? 'media-single' : ''}`}>
  <p className="media-disclaimer">PRÉVIAS VISUAIS · DEMONSTRAÇÃO CONCEITUAL</p>
  {items.map(number => <figure key={number} className="media-card">
   <button type="button" className="media-open" aria-label={`Ampliar ${labels[number-1]}`} onClick={event => { returnFocus.current = event.currentTarget; setSelected(number); }}>
    <CroppedImage number={number}/>
   </button><figcaption><span>{displayNumber(number)}</span>{labels[number-1]}</figcaption>{serviceDescriptions[number] && <p className="media-service-description">{serviceDescriptions[number]}</p>}
  </figure>)}
  <dialog ref={dialog} className="media-dialog" aria-label={selected ? labels[selected-1] : 'Imagem ampliada'} onClose={() => { setSelected(null); returnFocus.current?.focus({ preventScroll: true }); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
   {selected !== null && <div className="media-dialog-content"><div className="media-dialog-heading"><p>{labels[selected-1]}</p><button type="button" onClick={() => dialog.current?.close()} aria-label="Fechar imagem"><X size={22}/></button></div><CroppedImage number={selected} eager/></div>}
  </dialog>
 </div>;
}
