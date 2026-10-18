// Escopo completo MARATONA; independente do SPRINT revisado.
const maratonaServices = {
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
    description: 'Operação completa de marketing, publicidade, tecnologia, e-commerce e inteligência artificial, com direção estratégica contínua e evolução em 12 meses propostos.',
    setup: 12000, monthly: 8500, months: 12,
    instagramPosts: 24, tiktokPosts: 24, adCreatives: 20,
    ...maratonaServices,
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
    name: 'SPRINT — 90 DIAS',
    tagline: 'Marketing de performance para gerar oportunidades de venda pelo WhatsApp da Construcel.',
    description: 'Alternativa revisada de aquisição de clientes e geração de orçamentos, com produção remota, campanhas, landing page, WhatsApp organizado e CRM básico durante 90 dias. Sujeita à concordância expressa de Ana Paula com a mudança de escopo.',
    setup: 0, monthly: 2500, months: 3, adCreatives: 8, instagramPosts: 8, campaignsPerPlatform: 2,
    setupDeliverables: [
      '1 landing page comercial para solicitar orçamento pelo WhatsApp, implantada no primeiro mês.',
      'Otimização inicial do Google Perfil da Empresa.',
      'WhatsApp Business organizado: catálogo prioritário, mensagens rápidas, etiquetas e direcionamento comercial.',
      'CRM básico com funil para acompanhar leads e orçamentos.',
      'Sem implantação adicional para landing page e CRM simples e padronizados.',
    ],
    monthlyDeliverables: [
      'Gestão de Meta Ads e Google Ads: até 2 campanhas ativas por plataforma, com monitoramento e otimização semanal.',
      '8 criativos publicitários por mês: peças estáticas, carrosséis ou edições simples de vídeos fornecidos pela cliente.',
      '8 publicações mensais no Instagram, reaproveitando materiais das campanhas, sem produção de conteúdo adicional.',
      'Acompanhamento básico do Google Perfil da Empresa.',
      '1 reunião mensal para apresentar indicadores, resultados e próximas ações.',
      'Produção remota com imagens e informações enviadas pela Construcel.',
    ],
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

// Nova alternativa intermediária: preço e condições ainda precisam de aprovação.
export const tractionOffer = {
 name: 'TRAÇÃO — Marketing e Vendas',
 tagline: 'Mais conteúdo original e acompanhamento comercial para aproveitar as oportunidades geradas.',
 priceStatus: 'Sob proposta',
 proposedMonths: 6,
 deliverables: [
  {title:'Aquisição',items:['Todos os serviços do SPRINT revisado: Meta Ads e Google Ads, até 2 campanhas ativas por plataforma, landing page, Google Perfil da Empresa, WhatsApp organizado e CRM básico.','Monitoramento e otimização semanal das campanhas. Verba de mídia separada.']},
  {title:'Conteúdo original',items:['1 sessão presencial de captação por mês, programada com a Construcel.','Roteiro, gravação e edição de 4 vídeos curtos originais por mês. Esses vídeos compõem os 8 criativos publicitários mensais; não são 8 criativos mais 4 vídeos.','16 publicações mensais no Instagram, substituindo as 8 do SPRINT e reaproveitando campanhas e captações.','Adaptação dos 4 vídeos já produzidos para o TikTok, sem uma produção independente adicional.']},
  {title:'Organização comercial',items:['CRM básico com responsáveis, próximos passos e rotina de acompanhamento dos orçamentos.','Roteiro de atendimento e follow-up, com 1 treinamento remoto inicial para a equipe.','2 reuniões de acompanhamento por mês, substituindo a reunião mensal do SPRINT.','Painel básico de campanhas, leads e andamento dos orçamentos, conforme os dados fornecidos.']},
 ],
 exclusions:['Site institucional completo, e-commerce, checkout e cadastro de produtos.','CRM avançado, integrações personalizadas, chatbots e agentes de IA.','Branding completo, plano de marketing extenso, gestão dos departamentos e Universidade / EAD.','Reuniões semanais, produção ilimitada e equipe dedicada em tempo integral.'],
 responsibilities:'A ABUHSCA organiza campanhas, produção e acompanhamento. A equipe da Construcel atende os leads, atualiza os orçamentos no CRM e conduz a negociação e o fechamento das vendas.',
 conditions:'Escopo proposto, sujeito à validação da capacidade de entrega e ao aceite de Ana Paula. Prazo sugerido de 6 meses. Mensalidade, implantação, duração das captações, deslocamentos e cronograma serão dimensionados na proposta formal. Não há valor contratual definido nem promessa de leads, vendas ou faturamento.',
};
