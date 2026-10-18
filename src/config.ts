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

// Alternativa intermediária: valores propostos, sujeitos ao aceite comercial.
export const tractionOffer = {
 name: 'TRAÇÃO — Marketing e Vendas',
 tagline: 'Mais conteúdo original e acompanhamento comercial para aproveitar as oportunidades geradas.',
 monthly: 5500, setup: 0,
 proposedMonths: 6,
 deliverables: [
  {title:'Aquisição',items:['Meta Ads e Google Ads, até 2 campanhas ativas por plataforma, landing page, Google Perfil da Empresa, WhatsApp organizado e CRM básico.','Monitoramento e otimização semanal das campanhas. Verba de mídia separada.']},
  {title:'Estrutura digital',items:['Landing page comercial de captação.','Site oficial institucional responsivo.','Chatbot com fluxos de atendimento e encaminhamento à equipe; não é um agente de IA.']},
  {title:'Conteúdo original',items:['1 sessão presencial de captação por mês, programada com a Construcel.','Roteiro, gravação e edição de 4 vídeos curtos originais por mês. Esses vídeos compõem os 8 criativos publicitários mensais; não são 8 criativos mais 4 vídeos.','16 publicações mensais no Instagram, reaproveitando campanhas e captações.','Adaptação dos 4 vídeos já produzidos para o TikTok, sem uma produção independente adicional.']},
  {title:'Organização comercial',items:['CRM básico com responsáveis, próximos passos e rotina de acompanhamento dos orçamentos.','Roteiro de atendimento e follow-up, com 1 treinamento remoto inicial para a equipe.','2 reuniões de acompanhamento por mês.','Painel básico de campanhas, leads e andamento dos orçamentos, conforme os dados fornecidos.']},
 ],
 exclusions:['E-commerce, checkout e cadastro de produtos.','CRM avançado, integrações personalizadas e agentes de IA.','Branding completo, plano de marketing extenso, gestão dos departamentos e Universidade / EAD.','Reuniões semanais, produção ilimitada e equipe dedicada em tempo integral.'],
 responsibilities:'A ABUHSCA organiza campanhas, produção e acompanhamento. A equipe da Construcel atende os leads, atualiza os orçamentos no CRM e conduz a negociação e o fechamento das vendas.',
 conditions:'Escopo proposto, sujeito à validação da capacidade de entrega e ao aceite de Ana Paula. Prazo sugerido de 6 meses. Honorários de R$ 5.500/mês, sem taxa de implantação adicional para os serviços digitais incluídos. Duração das captações, deslocamentos e cronograma serão definidos na formalização do escopo. Não há promessa de leads, vendas ou faturamento.',
};

export const proposal = {
  client: 'Ana Paula', agency: 'ABUHSCA', company: 'CONSTRUCEL',
  // Set only after confirming the actual presentation date. Never derive from visit time.
  presentedAt: null as string | null,
  validityMonths: 3,
  // Relative path to the official PNG when supplied, e.g. media/construcel/logo.png.
  logoPath: 'media/construcel/logo.png' as string | null,
  base: {
    name:'BASE — Direção Estratégica', tagline:'Orientação para definir prioridades e organizar o próximo passo do marketing.',
    description:'Assessoria remota e pontual. A ABUHSCA orienta; a Construcel executa as ações com sua equipe. Escopo e ciclo inicial propostos, sujeitos ao aceite.',
    monthly:500,setup:0,months:1,
    setupDeliverables:['Levantamento inicial das prioridades com informações fornecidas pela Construcel.','Definição dos pontos que serão tratados na sessão de orientação.'],
    monthlyDeliverables:['1 reunião remota de até 45 minutos por mês.','Plano enxuto de prioridades e próximos passos após a reunião.','Revisão dos indicadores enviados pela cliente durante a sessão, sem implantação de ferramentas.'],
    exclusions:['Gestão ou configuração de anúncios.','Criação de posts, peças, vídeos ou captação presencial.','Landing pages, site, e-commerce, CRM, chatbot e agente de IA.','Execução diária, acompanhamento contínuo ou disponibilidade ilimitada.'],
  },
  arranque: {
    name:'ARRANQUE — Meta Ads Essencial', tagline:'Uma campanha enxuta para apresentar a Construcel e levar contatos ao WhatsApp existente.',
    description:'Gestão remota focada no Meta Ads, com materiais da cliente e escopo limitado. Escopo e ciclo inicial propostos, sujeitos ao aceite.',
    monthly:1500,setup:0,months:1,
    setupDeliverables:['Configuração inicial de 1 campanha Meta Ads, conforme acessos disponíveis.','Definição de objetivo, público e direcionamento ao WhatsApp já existente da Construcel.'],
    monthlyDeliverables:['Gestão de até 1 campanha ativa no Meta Ads.','Monitoramento e otimização semanal da campanha.','4 criativos estáticos ou edições simples de materiais enviados pela cliente por mês.','1 relatório mensal de indicadores e 1 reunião remota de até 30 minutos.'],
    exclusions:['Verba dos anúncios, licenças e despesas de terceiros.','Google Ads e publicações orgânicas recorrentes.','Landing page, site, e-commerce, implantação de CRM, chatbot e agente de IA.','Filmagem presencial, produção de vídeos originais e atendimento dos leads pela agência.'],
  },
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
    description: 'Alternativa revisada de aquisição de clientes e geração de orçamentos, com produção remota, campanhas, landing pages, WhatsApp organizado e CRM básico durante 90 dias. Sujeita à concordância expressa de Ana Paula com a mudança de escopo.',
    setup: 0, monthly: 2500, months: 3, adCreatives: 8, instagramPosts: 8, campaignsPerPlatform: 2,
    setupDeliverables: [
      'Landing pages comerciais para solicitar orçamento pelo WhatsApp. Quantidade e cronograma definidos no alinhamento de escopo.',
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
  tracao: {
    ...tractionOffer, months: tractionOffer.proposedMonths,
    description: 'Aquisição, conteúdo presencial e organização comercial em seis meses propostos. Campanhas, conteúdo original e acompanhamento dos orçamentos, sem assumir a operação digital completa.',
    setupDeliverables: ['Diagnóstico e planejamento inicial.', '1 landing page comercial no primeiro mês, Google Perfil da Empresa e WhatsApp organizado.', 'Site oficial institucional responsivo.', 'Chatbot com fluxos de atendimento e encaminhamento à equipe.', 'CRM básico com responsáveis e próximos passos.', 'Roteiro de atendimento e 1 treinamento remoto inicial.', 'Sem taxa de implantação adicional para os serviços digitais incluídos.'],
    monthlyDeliverables: tractionOffer.deliverables.flatMap(group=>group.items),
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
