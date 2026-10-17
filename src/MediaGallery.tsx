const labels = [
 'Fachada Construcel', 'Ana Paula — protagonista', 'Maike Christian — direção', 'Grandes audiências',
 'Campanhas e projetos criativos', 'Plano de marketing — 120 páginas', 'Manual de identidade visual',
 'Google Workspace', 'Domínio e hospedagem', 'Site institucional', 'E-commerce',
 'Landing pages de conversão', 'Ana Paula produzindo conteúdo', 'Meta Ads — descoberta',
 'Google Ads — intenção de compra', 'Dashboard comercial', 'SAC 360 — omnichannel',
 'CRM — Kanban de vendas', 'Chatbots e agentes de IA', 'E-mail marketing e relacionamento',
 'Treinamento de vendedores', 'Universidade Construcel — EAD', 'Gestão de projetos e produtividade',
 'Base de conhecimento e biblioteca digital', 'Gestão financeira e indicadores',
 'Ecossistema de integrações', 'Automação de processos', 'Dos eventos às marcas',
 'Produção publicitária', 'Workshops e educação', 'Da estratégia à execução',
 'Reunião e planejamento estratégico',
];
const groups: Record<string, number[]> = {
 cerebro: [6,7,8,9,10,11,12,13,14,15],
 coracao: [16,17,18,19,20,21,22], membros: [23,24,25], integracoes: [26,27],
 audiencias: [28,29,30], jornada: [31,32],
};
export function MediaGallery({ section, numbers }: { section?: string; numbers?: number[] }) {
 const items = numbers ?? groups[section ?? ''] ?? [];
 if (!items.length) return null;
 return <div className={`media-gallery ${items.length === 1 ? 'media-single' : ''}`}>
  <p className="media-disclaimer">PRÉVIAS VISUAIS FORNECIDAS · DEMONSTRAÇÃO CONCEITUAL</p>
  {items.map(number => <figure key={number} className="media-card">
   <a href={`${import.meta.env.BASE_URL}media/construcel/${String(number).padStart(2,'0')}.png`} target="_blank" rel="noreferrer" aria-label={`Ampliar ${labels[number-1]} (abre em nova aba)`}>
    <img src={`${import.meta.env.BASE_URL}media/construcel/${String(number).padStart(2,'0')}.png`} alt={`Prévia demonstrativa: ${labels[number-1]}`} width="418" height="235" loading="lazy" decoding="async"/>
   </a><figcaption><span>{String(number).padStart(2,'0')}</span>{labels[number-1]}</figcaption>
  </figure>)}
 </div>;
}
