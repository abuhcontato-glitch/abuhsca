export const proposal = {
  client: 'Ana Paula', agency: 'ABUHSCA', company: 'CONSTRUCEL',
  // Set only after confirming the actual presentation date. Never derive from visit time.
  presentedAt: null as string | null,
  validityMonths: 3,
  // Relative path to the official PNG when supplied, e.g. media/construcel/logo.png.
  logoPath: 'media/construcel/logo.png' as string | null,
  maratona: { setup: 60000, monthly: 12000, months: 12 },
  sprint: { setup: 3000, monthly: 3600, months: 3 },
  integrations: { authentication: false, signature: false, payment: false, scheduling: false },
};
export const sections = [
  { id: 'proposta', title: 'Proposta comercial', pillar: 'Uma visão. Um novo capítulo.' },
  { id: 'quem-sou', title: 'Quem sou eu?', pillar: 'A direção por trás da estratégia.' },
  { id: 'metodologia', title: 'Uma operação. Três pilares.', pillar: 'Introdução à nossa metodologia.' },
  { id: 'cerebro', title: 'O cérebro da operação.', pillar: 'Estratégia, tecnologia e criatividade.' },
  { id: 'coracao', title: 'O coração da operação.', pillar: 'Relacionamentos, orçamentos e vendas.' },
  { id: 'membros', title: 'Os membros da operação.', pillar: 'Produtividade, colaboração e conhecimento.' },
  { id: 'integracoes', title: 'Tudo conectado. Tudo sob controle.', pillar: 'Integrações e automações.' },
  { id: 'jornada', title: 'Da estratégia à execução.', pillar: 'Como vai funcionar.' },
  { id: 'investimento', title: 'Um investimento. Uma nova estrutura para crescer.', pillar: 'MARATONA — Transformação completa Construcel.' },
];
