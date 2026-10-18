// Base original compartilhada pelas duas propostas. Frequências não definidas permanecem abertas.
const originalServices = {
    setupDeliverables: [
      'Site institucional responsivo e loja virtual.',
      'Catálogo, carrinho, checkout e integração de pagamento.',
      'Estrutura de cadastro de produtos. Detalhamento na reunião de escopo.',
      'Landing page de captação e configuração de Meta Ads e Google Ads.',
      'CRM, funil de vendas e organização do atendimento comercial.',
      'Chatbot com fluxos de atendimento.',
      'Agente de IA conversacional para leads.',
      'Treinamento presencial inicial. Detalhamento na reunião de escopo.',
    ],
    monthlyDeliverables: [
      '24 publicações mensais no Instagram, entre feed e Stories.',
      '24 publicações mensais no TikTok.',
      'Planejamento editorial, criação e adaptação de conteúdos.',
      'Gestão de Meta Ads e Google Ads, planejamento e acompanhamento de desempenho.',
      '20 anúncios/criativos, com periodicidade a definir. Detalhamento na reunião de escopo.',
      'Visita presencial, roteiro, captação, edição de vídeos e criativos publicitários. Detalhamento na reunião de escopo.',
      'Suporte via WhatsApp e reuniões semanais.',
      'Acompanhamento do tráfego e das vendas.',
    ],
};

export const proposal = {
  client: 'Ana Paula', agency: 'ABUHSCA', company: 'CONSTRUCEL',
  // Set only after confirming the actual presentation date. Never derive from visit time.
  presentedAt: null as string | null,
  validityMonths: 3,
  // Relative path to the official PNG when supplied, e.g. media/construcel/logo.png.
  logoPath: 'media/construcel/logo.png' as string | null,
  maratona: {
    name: 'MARATONA — OPERAÇÃO 360°',
    subtitle: 'OPERAÇÃO 360°',
    tagline: 'Departamento completo de marketing, publicidade, tecnologia, e-commerce e inteligência artificial.',
    description: 'Todos os serviços do SPRINT, com direção estratégica contínua, maior profundidade técnica, novos módulos e evolução da operação em 12 meses propostos.',
    setup: 12000, monthly: 8500, months: 12,
    instagramPosts: 24, tiktokPosts: 24, adCreatives: 20,
    ...originalServices,
    advancedDeliverables: [
      { title: 'Estratégia · Implantação prevista', items: ['Plano de marketing aprofundado, análise de mercado e posicionamento.', 'Branding, manual de identidade visual e planejamento anual.'] },
      { title: 'Digital · Desenvolvimento progressivo', items: ['Evolução do site e e-commerce, landing pages adicionais, SEO e CRO.', 'Integrações e melhorias conforme levantamento técnico.'] },
      { title: 'Marketing · Desenvolvimento progressivo', items: ['Social, audiovisual e campanhas com estratégia integrada.', 'Remarketing, e-mail marketing e automações de relacionamento.'] },
      { title: 'Comercial · Desenvolvimento progressivo', items: ['CRM avançado, funis, gestão de oportunidades e integração comercial.', 'Dashboards e indicadores para acompanhar a operação.'] },
      { title: 'IA · Escopo técnico adicional', items: ['Agentes, chatbots e automações avançadas.', 'Qualificação e follow-up conforme projeto técnico e acessos.'] },
      { title: 'Gestão e capacitação · Desenvolvimento progressivo', items: ['Treinamentos, processos internos e gestão de projetos.', 'Indicadores financeiros e Universidade Construcel / EAD.'] },
    ],
  },
  sprint: {
    name: 'SPRINT — PREMIUM LTDA',
    tagline: 'Ativação dos serviços originais: presença digital, conteúdo, campanhas, comercial e inteligência artificial.',
    description: 'Site, e-commerce, conteúdo, mídia, audiovisual, CRM, chatbot, agente de IA e treinamento inicial, com acompanhamento semanal e período inicial proposto de 90 dias.',
    setup: 2000, monthly: 2500, months: 3, adCreatives: 20,
    ...originalServices,
  },
  externalCosts: [
    'Verbas publicitárias.',
    'Domínio e hospedagem.',
    'Licenças e assinaturas de terceiros.',
    'Tarifas de pagamento.',
    'Consumo de APIs.',
    'Deslocamentos e despesas extraordinárias previamente aprovadas.',
  ],
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
  { id: 'investimento', title: 'Um investimento. Uma nova estrutura para crescer.', pillar: 'MARATONA — OPERAÇÃO 360°.' },
];
