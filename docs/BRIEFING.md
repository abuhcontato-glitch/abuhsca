# PROMPT MASTER — ABUHSCA × CONSTRUCEL
## Experiência Comercial Interativa | Landing Page Cinematográfica | Maratona × Sprint

Você é uma equipe multidisciplinar sênior formada por:

- Diretor de criação especializado em experiências digitais premium.
- UX/UI Designer especializado em conversão e storytelling.
- Desenvolvedor Full Stack especialista em React, TypeScript e Tailwind CSS.
- Motion Designer especializado em GSAP, Framer Motion e experiências de scroll.
- Diretor de arte especializado em publicidade cinematográfica.
- Estrategista de marketing B2B e vendas consultivas.
- Especialista em CRO, acessibilidade e performance.

## MISSÃO

Desenvolver uma aplicação web comercial exclusiva, altamente sofisticada, personalizada e interativa para apresentar a proposta da **ABUHSCA — Agência Criativa** à **CONSTRUCEL**, direcionada à empresária **Ana Paula**.

Não estamos criando uma landing page convencional.

Estamos criando uma experiência digital de venda consultiva, na qual a cliente percorre uma narrativa visual, conhece o diretor responsável, compreende a metodologia, visualiza as entregas, entende como a operação será executada e chega naturalmente à contratação.

A aplicação deverá transmitir:

**AUTORIDADE. ESTRATÉGIA. TECNOLOGIA. CRIATIVIDADE. CONTROLE. PREVISIBILIDADE. RESULTADOS.**

O conceito central é:

**ABUHSCA × CONSTRUCEL — DO BRANDING À PERFORMANCE.**

A narrativa utiliza uma metáfora orgânica:

- CÉREBRO = inteligência estratégica, marketing e tecnologia.
- CORAÇÃO = operação comercial, atendimento e vendas.
- MEMBROS = produtividade, execução e colaboração.
- INTEGRAÇÕES = sistema nervoso que conecta a operação.

A aplicação deverá possuir 10 seções principais e uma rota comercial reservada denominada SPRINT.

Não eliminar, condensar, trocar de ordem ou simplificar as seções definidas abaixo.

---

# 1. DIREÇÃO DE ARTE GLOBAL

## Identidade visual

Estética premium, editorial, cinematográfica e tecnológica.

Referências de linguagem visual:
- Apresentações de produto Apple.
- Sites de estúdios criativos internacionais.
- Interfaces SaaS de alto padrão.
- Motion graphics de publicidade.
- Apresentações de consultorias estratégicas.
- Experiências imersivas com storytelling por rolagem.

Não copiar interfaces ou marcas de terceiros.

## Paleta

Usar prioritariamente:

- Preto profundo: #090909
- Grafite: #171717
- Branco: #FFFFFF
- Cinza metálico: #A3A3A3
- Vermelho de destaque: #E32636

O vermelho deve ser usado como elemento de energia, direção, destaque e conversão.

Utilizar as cores oficiais da ABUHSCA e da Construcel quando seus arquivos de identidade visual forem fornecidos.

## Tipografia

Usar tipografia contemporânea, forte e expressiva.

Sugestões:
- Space Grotesk
- Inter
- Sora
- Manrope

Títulos gigantes, com contraste entre pesos e composições editoriais.

## Animações

Implementar:

- Scroll storytelling.
- Transições com GSAP ScrollTrigger ou alternativa compatível.
- Parallax discreto.
- Cards com reveal progressivo.
- Animações de números.
- Carrosséis automáticos com controle manual.
- Elementos sticky.
- Efeitos de profundidade.
- Hover sofisticado.
- Transições suaves entre seções.
- Microinterações em botões e indicadores.

As animações não podem prejudicar a leitura, a acessibilidade ou a performance.

Respeitar `prefers-reduced-motion`.

## Elemento visual recorrente

Criar faixas diagonais inspiradas nas fitas de isolamento utilizadas em obras.

Essas faixas serão a assinatura visual das transições.

Aplicar textos como:

ABUHSCA × CONSTRUCEL

EM CONSTRUÇÃO

ESTRATÉGIA EM MOVIMENTO

DO BRANDING À PERFORMANCE

As faixas devem atravessar a tela com animações elegantes e controladas.

Evitar estética infantil ou excesso de efeitos.

---

# 2. ARQUITETURA DA APLICAÇÃO

Criar as seguintes rotas:

`/construcel`

Página principal com as 10 seções e a proposta MARATONA.

`/construcel/sprint`

Página comercial reservada com a oferta SPRINT.

`/construcel/contratacao/maratona`

Fluxo de contratação da oferta principal.

`/construcel/contratacao/sprint`

Fluxo de contratação da oferta reduzida.

`/construcel/onboarding`

Fluxo de boas-vindas e agendamento após confirmação da contratação.

A rota SPRINT não deve aparecer no menu principal, nos cards públicos ou no rodapé da proposta principal.

Não confundir ausência de navegação com segurança. Preparar autenticação ou link de acesso controlado para proteger a oferta reservada, quando o backend estiver disponível.

Criar uma arquitetura reutilizável, com componentes independentes, configuração centralizada de preços, entregáveis, prazos e links de integração.

---

# SEÇÃO 01 — HERO / PROPOSTA COMERCIAL

## Objetivo

Provocar impacto imediato, personalização e exclusividade.

## Conteúdo

Mensagem superior:

**ANA PAULA, ESTA PROPOSTA FOI DESENVOLVIDA EXCLUSIVAMENTE PARA VOCÊ.**

Título principal gigante:

# PROPOSTA
# COMERCIAL.

Subtítulo:

**ABUHSCA × CONSTRUCEL**

Texto de apoio:

Uma proposta para transformar estratégia, marketing, tecnologia e vendas em uma operação integrada de crescimento.

## Elementos

- Logotipo ABUHSCA.
- Logotipo Construcel.
- Identificação da destinatária.
- Data de apresentação.
- Contador regressivo com dias, horas, minutos e segundos.
- Data explícita de validade da proposta.
- Indicador para continuar a experiência.

A validade será de 3 meses contados da data efetiva de apresentação.

A data deverá ser configurável no painel administrativo ou arquivo de configuração.

O contador precisa utilizar uma data real persistida, não reiniciar a cada visita.

Ao expirar, apresentar uma mensagem informando que as condições precisam ser reconfirmadas.

## Visual

Fundo escuro, tipografia monumental, movimento sutil e elementos gráficos inspirados na arquitetura e na construção.

A seção termina com faixas diagonais animadas.

---

# SEÇÃO 02 — QUEM SOU EU?

## Objetivo

Apresentar a pessoa responsável pela estratégia e construir confiança.

## Conteúdo

**PRAZER, EU SOU**

# MAIKE CHRISTIAN.

**MAS PODE ME CHAMAR DE ABUH.**

Sou publicitário, diretor criativo e estrategista de marketing.

Minha trajetória reúne criatividade, comunicação, tecnologia e negócios.

Ao longo da minha carreira, participei de projetos e direções criativas com milhões de visualizações, trabalhando com artistas, empresas e marcas.

Meu trabalho vai além da estética: desenvolvo estratégias para posicionar marcas, conquistar audiências, gerar oportunidades comerciais e contribuir para o crescimento dos negócios.

Foi dessa visão que nasceu a ABUHSCA — Agência Criativa.

Uma empresa que integra estratégia, publicidade, inteligência artificial, produção audiovisual e performance.

**EU NÃO VENDO APENAS MARKETING. EU CONSTRUO ESTRATÉGIAS PARA NEGÓCIOS CRESCEREM.**

## Layout

Dividir a seção em duas áreas:

Esquerda:
Retrato editorial premium de Maike Christian.

Direita:
Apresentação textual com animações de revelação.

Utilizar fotografia real fornecida pelo responsável. Até lá, mostrar um placeholder editorial identificado, sem inventar um retrato pessoal.

## Indicadores

- Milhões de visualizações em projetos criativos.
- Projetos com artistas e marcas.
- Experiência em estratégias orientadas a resultados comerciais.

Não inventar números específicos.

---

# SEÇÃO 03 — AUTORIDADE / PORTFÓLIO / NÚMEROS

## Objetivo

Demonstrar histórico, credibilidade e capacidade de execução.

Título:

# NOSSA TRAJETÓRIA FALA POR NÓS.

Criar uma faixa horizontal infinita de logotipos de clientes, parceiros e projetos.

Usar somente marcas autorizadas e fornecidas.

Não criar logotipos fictícios de clientes reais.

## Indicadores animados

Criar componentes para:

- Visualizações acumuladas.
- Projetos desenvolvidos.
- Marcas atendidas.
- Resultados comerciais atribuíveis aos projetos.

Os dados devem ser configuráveis e permanecer com placeholders até serem comprovados.

## Transição

Os números desaparecem gradualmente.

Duas faixas de isolamento atravessam a tela.

Mensagem:

**ABUHSCA. CRIATIVIDADE EM CONSTRUÇÃO.**

---

# SEÇÃO 04 — O CÉREBRO DA OPERAÇÃO

## Título

# O CÉREBRO
# DA OPERAÇÃO.

**Estratégia, tecnologia e criatividade trabalhando juntas.**

## Conceito

Apresentar uma grade de cards premium, com duas ou três colunas no desktop e adaptação responsiva.

Cada card deve conter:

1. Nome do serviço.
2. Descrição estratégica.
3. Entregáveis.
4. Imagem ou vídeo demonstrativo.
5. Mockup de iMac ou MacBook.
6. Animação de entrada.
7. Possibilidade de expandir detalhes.

Os mockups precisam demonstrar o serviço correspondente, não imagens genéricas sem relação com a entrega.

## CARD 01 — PLANO DE MARKETING

Entregável principal:

**PLANO ESTRATÉGICO DE MARKETING — 120 PÁGINAS.**

Um documento editorial premium, intuitivo, visualmente sofisticado e orientado à execução.

Apresentar sumário ilustrativo contendo:

- Diagnóstico empresarial.
- Análise de mercado.
- Análise de concorrência.
- Público-alvo e personas.
- Posicionamento.
- Proposta de valor.
- Produto.
- Praça.
- Preço.
- Pessoas.
- Objetivos tangíveis e intangíveis.
- SWOT.
- Jornada do cliente.
- Estratégias de aquisição.
- Estratégias de retenção.
- CAC.
- LTV.
- Funil de marketing e vendas.
- Planejamento de campanhas.
- Indicadores.
- Cronograma.
- Orçamento.
- Plano de ação.

O objetivo é estabelecer mecanismos para buscar eficiência de aquisição, reduzir desperdícios e elevar o valor gerado pelos relacionamentos comerciais.

Visual: mockup de apresentação editorial com páginas passando e gráficos animados.

## CARD 02 — MANUAL DE IDENTIDADE VISUAL

Manual completo de marca.

Apresentar:

- Propósito.
- Missão, visão e valores.
- Personalidade.
- Posicionamento.
- Identidade verbal.
- Logotipo e aplicações.
- Paleta de cores.
- Tipografia.
- Grafismos.
- Elementos visuais.
- Estilo fotográfico.
- Direção audiovisual.
- Templates.
- Aplicações digitais.
- Padronização de comunicação.

Visual: brand book aberto, aplicações em fachadas, uniformes, embalagens e peças digitais.

## CARD 03 — GOOGLE WORKSPACE

Configuração e padronização do ambiente de produtividade.

Demonstrar:

- Gmail corporativo.
- Google Drive.
- Google Agenda.
- Google Meet.
- Google Forms.
- Google Docs.
- Google Sheets.
- Permissões.
- Estrutura de pastas.
- Padrões de nomenclatura.
- Organização colaborativa.

Visual: ecossistema Workspace em mockup.

## CARD 04 — DOMÍNIO E HOSPEDAGEM

Estrutura digital profissional.

Apresentar:

- Domínio.
- DNS.
- Hospedagem.
- Certificado SSL.
- Configurações essenciais.
- Segurança básica.
- Backup.
- Monitoramento técnico.

Visual: painel tecnológico de infraestrutura.

## CARD 05 — SITE INSTITUCIONAL

Site corporativo com aproximadamente seis ou sete páginas.

Demonstrar:

- Home.
- Sobre a empresa.
- Produtos e soluções.
- Galeria ou portfólio.
- Conteúdos.
- Contato e localização.
- Solicitação de orçamento.

O site deve transmitir credibilidade, apresentar a empresa e facilitar a conversão.

Visual: protótipo demonstrativo de um possível site da Construcel dentro de um iMac.

## CARD 06 — E-COMMERCE

Apresentar o conceito de uma loja virtual de materiais de construção.

Referência funcional: experiência de grandes varejistas do setor, sem copiar suas interfaces.

Demonstrar:

- Categorias.
- Busca.
- Filtros.
- Produtos.
- Carrinho.
- Checkout.
- Solicitação de orçamento.
- Gestão de catálogo.
- Integração comercial.

Visual: mockup de loja Construcel com produtos demonstrativos.

Não apresentar o e-commerce como já implementado.

## CARD 07 — LANDING PAGES

Páginas de conversão específicas para campanhas e categorias.

Demonstrar:

- Landing pages de ofertas.
- Captação de leads.
- Solicitação de orçamento.
- Botões de WhatsApp.
- Formulários.
- Integração com campanhas.
- Testes A/B.
- Mensuração.

Visual: múltiplas landing pages da Construcel em mockups.

## CARD 08 — PRODUÇÃO DE CONTEÚDO / INBOUND MARKETING

Apresentar:

- Reels.
- Stories.
- Feed.
- TikTok.
- Vídeos publicitários.
- Artes.
- Conteúdos educativos.
- Captação audiovisual.
- Calendário editorial.
- Estratégia de distribuição.

Visual: equipe criativa da ABUHSCA produzindo conteúdo dentro de uma loja de materiais de construção.

Mostrar equipamentos como gimbal, smartphone, iluminação e ring light.

Usar imagens ilustrativas claramente demonstrativas até existirem registros reais.

## CARD 09 — META ADS / TRÁFEGO NÃO INTENCIONAL

Estratégias de descoberta e geração de demanda nas redes sociais.

Apresentar:

- Criativos de atenção.
- Tendências.
- Campanhas locais.
- Segmentação.
- Anúncios de mensagens.
- Captação de leads.
- Remarketing.
- Testes criativos.

Visual: anúncios em telas de smartphones, interfaces de campanhas e criativos animados.

## CARD 10 — GOOGLE ADS / TRÁFEGO INTENCIONAL

Estratégias para alcançar pessoas que já estão buscando produtos e soluções.

Apresentar:

- Pesquisa de palavras-chave.
- Campanhas de pesquisa.
- Anúncios locais.
- Landing pages.
- Testes A/B.
- Mensuração de contatos.
- Otimização de conversão.
- Estratégias de intenção comercial.

Objetivo:

Gerar mais oportunidades para o telefone, WhatsApp e loja física, com acompanhamento mensurável.

Não prometer volume garantido de contatos ou vendas.

---

# SEÇÃO 05 — O CORAÇÃO DA OPERAÇÃO

## Título

# O CORAÇÃO
# DA OPERAÇÃO.

**Onde oportunidades se transformam em relacionamentos, orçamentos e vendas.**

Criar cards interativos com visual de software empresarial.

## CARD 01 — DASHBOARD COMERCIAL

Painel executivo com:

- Leads recebidos.
- Atendimentos.
- Ligações.
- Visitas à loja.
- Conversas no WhatsApp.
- Orçamentos.
- Propostas.
- Vendas.
- Receita.
- Taxas de conversão.
- Desempenho por vendedor.
- Origem dos clientes.

Utilizar dados fictícios explicitamente identificados como demonstração.

## CARD 02 — SAC 360 / OMNICHANNEL

Centralização dos canais de atendimento.

Demonstrar:

- WhatsApp.
- Instagram.
- Facebook.
- E-mail.
- Outros canais integráveis.
- Caixa de entrada unificada.
- Distribuição de atendimentos.
- Respostas rápidas.
- Histórico.
- Scripts de vendas.
- Acompanhamento de solicitações.

## CARD 03 — CRM / KANBAN COMERCIAL

Apresentar o funil:

Novo lead → Qualificação → Orçamento → Proposta → Follow-up → Ganho / Perdido → Pós-venda.

Demonstrar cards arrastáveis, responsáveis, tarefas, alertas e automações.

## CARD 04 — CHATBOTS

Fluxos automatizados para:

- Atendimento inicial.
- Perguntas frequentes.
- Qualificação.
- Encaminhamento.
- Registro de informações.
- Recuperação de contatos.

## CARD 05 — AGENTES DE IA

Apresentar agentes que podem apoiar:

- Triagem.
- Atendimento.
- Consulta a informações autorizadas.
- Organização de solicitações.
- Apoio à equipe comercial.

Incluir supervisão humana e regras de segurança.

## CARD 06 — E-MAIL MARKETING

Apresentar:

- Campanhas.
- Segmentação.
- Templates.
- Automação de relacionamento.
- Follow-up.
- Reativação de clientes.
- Relatórios.

## CARD 07 — GESTÃO COMERCIAL COMPLETA

Visão integrada de:

- Clientes.
- Oportunidades.
- Equipe.
- Metas.
- Tarefas.
- Histórico.
- Relatórios.
- Indicadores.

## CARD 08 — TREINAMENTO E MANUAIS

Treinamento de vendedores e atendentes.

Criar visualização de:

- Rotinas.
- Scripts.
- Manuais por função.
- Processos.
- Boas práticas.
- Checklists.
- Procedimentos.

## CARD 09 — UNIVERSIDADE CONSTRUCEL / EAD

Apresentar uma área de membros estilo plataforma de streaming.

Visual premium com cards de cursos e trilhas por departamento:

- Comercial.
- Atendimento.
- Marketing.
- Produção.
- Financeiro.
- Gestão.

Demonstrar:

- Dashboard do aluno.
- Cursos.
- Aulas.
- Progresso.
- Biblioteca.
- Materiais de apoio.
- Trilhas de onboarding.
- Avaliações e certificados, se incluídos na solução final.

O objetivo é centralizar conhecimento e padronizar a capacitação.

---

# SEÇÃO 06 — OS MEMBROS DA OPERAÇÃO

## Título

# OS MEMBROS
# DA OPERAÇÃO.

**Produtividade, colaboração e conhecimento para fazer mais com menos desperdício.**

A referência funcional é o eKyte, com possibilidade futura de solução própria.

Não reproduzir indevidamente o design ou a marca da plataforma.

## Cards

1. Gestão de projetos.
2. Gestão de tarefas.
3. Gestão de cargas de trabalho.
4. Gestão financeira.
5. Gestão orientada por dados.
6. Help desk e atendimento interno.
7. Comunicação e aprovações.
8. Área do cliente.
9. Processos e modelos.
10. Base de conhecimento.
11. Biblioteca digital.
12. Gestão de produtos.
13. Integrações e automações.

Cada card deverá conter uma visualização demonstrativa de sua função.

## Base de conhecimento

Destacar a centralização de:

- Acessos e permissões.
- Estratégias.
- Projetos.
- Procedimentos.
- Documentação.
- Materiais de marketing.
- Arquivos compartilhados.
- Histórico de decisões.

A proposta é transformar conhecimento disperso em patrimônio organizacional.

---

# SEÇÃO 07 — INTEGRAÇÕES E AUTOMAÇÕES

## Título

# TUDO CONECTADO.
# TUDO SOB CONTROLE.

**Automação de fluxos de trabalho para uma operação integrada.**

Criar uma composição visual com arcos concêntricos, inspirados em um arco-íris tecnológico.

Os arcos devem ter profundidade, animação e movimento suave.

Organizar logos por categorias.

## Produtividade

- Google Workspace.
- Gmail.
- Google Agenda.
- Google Forms.
- Google Meet.
- Excel.
- Notion.

## Inteligência artificial e criação

- ChatGPT.
- Gemini.
- Canva.

## Marketing e distribuição

- Instagram.
- Facebook.
- YouTube.
- TikTok.
- LinkedIn.
- Google Ads.
- Meta Ads.
- WordPress.

## Comunicação e vendas

- WhatsApp.
- Discord.
- RD Station.
- CRM.

## Centro do ecossistema

Mostrar:

**CONSTRUCEL — CONTROLE E PREVISIBILIDADE.**

Animações devem demonstrar fluxos de informações entre plataformas.

Não afirmar que todas as integrações já estão ativas. Distinguir integrações previstas, disponíveis e dependentes de APIs, licenças ou permissões.

---

# SEÇÃO 08 — NOSSA EXPERTISE É CONSTRUIR AUDIÊNCIAS

## Objetivo

Criar um momento de respiro emocional depois das seções técnicas.

## Título

# NÃO CRIAMOS APENAS CONTEÚDO.
# CONSTRUÍMOS AUDIÊNCIAS.

Subtítulo:

**DOS EVENTOS ÀS MARCAS. DOS PALCOS ÀS TELAS. DO BRANDING À PERFORMANCE.**

A ABUHSCA possui raízes na produção criativa, na cultura, no entretenimento e na construção de experiências capazes de mobilizar pessoas.

Essa experiência orienta a forma como desenvolvemos comunicação para marcas e negócios.

## Experiência visual

Criar um carrossel cinematográfico com:

- Eventos.
- Públicos.
- Shows.
- Videoclipes.
- Campanhas.
- Produções audiovisuais.
- Sites.
- Workshops.
- Cursos.
- Cases.

Usar fotos e vídeos reais fornecidos posteriormente.

Cada case pode apresentar:

- Nome.
- Categoria.
- Desafio.
- Solução.
- Resultado comprovado.

Evitar métricas inventadas e depoimentos fictícios.

## Frase final

**ATENÇÃO GERA AUDIÊNCIA.**

**AUDIÊNCIA CONSTRÓI MARCA.**

**ESTRATÉGIA TRANSFORMA OPORTUNIDADES EM NEGÓCIOS.**

Assinatura:

**ABUHSCA — DO BRANDING À PERFORMANCE.**

---

# SEÇÃO 09 — COMO VAI FUNCIONAR

## Título

# DA ESTRATÉGIA
# À EXECUÇÃO.

Criar uma jornada visual de seis etapas.

## ETAPA 01 — CONTRATAÇÃO DIGITAL

Fluxo previsto:

Aprovação da proposta → Contrato eletrônico → Assinatura → Checkout → Confirmação.

O botão comercial deve encaminhar à rota de contratação correspondente.

## ETAPA 02 — ONBOARDING

- Reunião inicial.
- Formulário de levantamento.
- Coleta de informações.
- Acessos.
- Diagnóstico oficial.

## ETAPA 03 — PLANEJAMENTO / TREAD

Apresentar a metodologia de priorização:

- Urgente.
- Circunstancial.
- Importante.

Criar uma matriz interativa demonstrativa.

O objetivo é organizar a operação para reduzir a gestão reativa e aumentar o tempo dedicado às atividades importantes.

O primeiro mês priorizará planejamento, diagnóstico, organização e definição das bases, com tratamento de urgências críticas previamente acordadas.

## ETAPA 04 — IMPLANTAÇÃO

Construção progressiva dos três pilares:

- Cérebro.
- Coração.
- Membros.

## ETAPA 05 — APLICATIVO DE GESTÃO

Centralização dos departamentos.

Cada departamento terá até 10 KPIs definidos de acordo com suas necessidades e disponibilidade de dados.

Criar mockup de dashboard com indicadores e acompanhamento.

## ETAPA 06 — ACOMPANHAMENTO

- Reuniões periódicas.
- Revisão de indicadores.
- Ajustes de prioridades.
- Relatórios.
- Acompanhamento das entregas.

Suporte via WhatsApp:

**Segunda a sexta-feira, das 8h às 18h, exceto feriados.**

As reuniões poderão ocorrer online ou presencialmente na agência, conforme agendamento.

## Fechamento

**VOCÊ CUIDA DO SEU NEGÓCIO.**

**NÓS AJUDAMOS A CONSTRUIR O CRESCIMENTO.**

---

# SEÇÃO 10 — INVESTIMENTO / MARATONA

## Título

# UM INVESTIMENTO.
# UMA NOVA ESTRUTURA PARA CRESCER.

Subtítulo:

**MARATONA — TRANSFORMAÇÃO COMPLETA CONSTRUCEL.**

## Conceito comercial

A oferta MARATONA representa a contratação de uma operação estratégica liderada por Maike Christian, com apoio de profissionais especializados da rede de prestadores PJ da ABUHSCA, mobilizados conforme as demandas e o escopo contratado.

A ABUHSCA conta com uma rede de 10 profissionais parceiros sob demanda, sem necessidade de apresentar essa estrutura como uma equipe CLT fixa.

A proposta envolve direção estratégica, gestão de projetos, coordenação dos profissionais, implantação dos sistemas e acompanhamento das entregas.

## Card de investimento

Apresentar um card de checkout premium, com destaque para o valor mensal.

Valores iniciais configuráveis para a apresentação:

**IMPLANTAÇÃO: R$ 60.000**

**MENSALIDADE: R$ 12.000**

**PRAZO: 12 MESES**

**VALOR TOTAL CONTRATUAL: R$ 204.000**

Os valores são uma proposta comercial preliminar e precisam ser confirmados após orçamento de fornecedores, validação da capacidade operacional, escopo, cronograma e margem.

O valor total considera uma implantação de R$ 60.000 e 12 mensalidades de R$ 12.000, sem incluir custos externos.

## Elementos de conversão

- Destaque visual para a mensalidade.
- Valor total em texto secundário, mas claramente legível.
- Resumo das entregas.
- Prazo contratual.
- Condições de contratação.
- Segurança do processo.
- Validade real da proposta.
- Identificação da proposta exclusiva.

## CTA

**QUERO APROVEITAR ESTA OFERTA →**

Ao clicar, abrir a rota de contratação MARATONA.

## Condições e despesas adicionais

Informar de maneira legível:

Os honorários remuneram os serviços, a direção, a gestão e a equipe mobilizada pela ABUHSCA para executar o escopo contratado.

Não estão incluídos, salvo previsão expressa em contrato:

- Verbas de mídia publicitária.
- Licenças e assinaturas de ferramentas de terceiros.
- Hospedagem e domínios.
- Serviços externos extraordinários.
- Deslocamentos.
- Transporte.
- Alimentação.
- Despesas operacionais externas previamente aprovadas.

Os custos externos devem ser previamente orçados e aprovados pela contratante.

Não apresentar a equipe necessária ao escopo contratado como cobrança adicional automática.

## Animação final

O ambiente escurece e o card comercial recebe destaque.

Frase:

**O FUTURO DA CONSTRUCEL NÃO SERÁ CONSTRUÍDO APENAS COM IDEIAS.**

**SERÁ CONSTRUÍDO COM EXECUÇÃO.**

Assinatura:

ABUHSCA × CONSTRUCEL

---

# ROTA RESERVADA — SPRINT

## Conceito

A página SPRINT é uma alternativa comercial reservada, apresentada somente por decisão do diretor da ABUHSCA.

Não aparece na navegação da MARATONA.

O objetivo é oferecer uma solução proporcional para as urgências comerciais identificadas na primeira reunião.

## Título

# SPRINT.
# 90 DIAS PARA REATIVAR SUA AQUISIÇÃO COMERCIAL.

Mensagem:

**ANA PAULA, VAMOS COMEÇAR PELO QUE MAIS IMPORTA?**

Você precisa que o telefone toque.

Que a Construcel seja encontrada no Google.

Que o WhatsApp receba novos contatos.

Que o Instagram atraia oportunidades.

Que mais pessoas conheçam a loja.

E que essas oportunidades possam se transformar em vendas.

A proposta SPRINT concentra os esforços nessas prioridades.

## Posicionamento

Nesta modalidade, Maike Christian será o responsável direto pela estratégia e execução do escopo reduzido.

Não inclui a implantação da operação completa, a mobilização da equipe multidisciplinar ou todos os sistemas da MARATONA.

## Escopo

- Diagnóstico comercial prioritário.
- Otimização do Google Business Profile.
- Configuração e gestão de Google Ads.
- Configuração e gestão de Meta Ads.
- Organização básica do WhatsApp comercial.
- Uma landing page de captação.
- Ajustes estratégicos no Instagram.
- CRM simplificado.
- Monitoramento de leads e contatos.
- Reunião estratégica mensal.

## Investimento

Mostrar:

**70% OFF NA MENSALIDADE DE REFERÊNCIA DA MARATONA.**

De R$ 12.000/mês por:

# R$ 3.600/MÊS.

Implantação:

**R$ 3.000.**

Prazo inicial:

**3 MESES.**

Total:

**R$ 13.800.**

O desconto se aplica à mensalidade de referência, com redução proporcional de escopo. Não é o mesmo pacote da MARATONA com desconto.

## Cronograma

Mês 01: reativação e configuração.

Mês 02: aquisição, testes e otimização.

Mês 03: análise de desempenho e plano de continuidade.

## Não incluído

- E-commerce.
- Site institucional completo.
- Manual de identidade visual completo.
- Aplicativo próprio.
- EAD.
- CRM avançado.
- Gestão operacional de departamentos.
- Produção audiovisual presencial recorrente.
- Equipe multidisciplinar dedicada.
- Verbas publicitárias e ferramentas de terceiros.

## CTA

**QUERO REATIVAR AS OPORTUNIDADES COMERCIAIS →**

Abrir a rota de contratação SPRINT.

## Frase final

**A MARATONA CONSTRÓI O FUTURO DA CONSTRUCEL.**

**O SPRINT ENFRENTA AS URGÊNCIAS DO PRESENTE.**

---

# SISTEMA DE CONTRATAÇÃO

Criar a arquitetura para dois fluxos independentes.

## MARATONA

1. Revisão da proposta.
2. Identificação da contratante.
3. Contrato eletrônico.
4. Assinatura.
5. Checkout.
6. Confirmação de pagamento.
7. Agendamento do onboarding.
8. Formulário inicial.

## SPRINT

Mesmo processo, com contrato, valores, escopo e prazos próprios.

Não inventar contratos jurídicos definitivos nem considerar uma assinatura simulada como juridicamente válida.

Preparar integração com fornecedor de assinatura eletrônica e gateway de pagamento a serem definidos.

Não armazenar dados sensíveis de cartão na aplicação.

Não executar cobranças reais sem autorização e configuração.

Utilizar webhooks validados para confirmar pagamento antes de liberar etapas posteriores.

Se os serviços externos ainda não estiverem conectados, apresentar um ambiente de demonstração funcional e identificar claramente os pontos pendentes de integração.

---

# REQUISITOS TÉCNICOS

## Front-end

- React.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizáveis.
- Motion responsivo.
- GSAP ou biblioteca compatível.
- Carrosséis acessíveis.
- Mockups responsivos.
- Lazy loading de imagens e vídeos.
- Animações otimizadas.

## Back-end

Preparar persistência para:

- Propostas.
- Preços.
- Prazos.
- Clientes.
- Status de contratação.
- Links de contratos.
- Status de pagamento.
- Agendamentos.
- Controle de acesso à rota reservada.

Utilizar solução compatível com a infraestrutura disponível no Lovable.

## Painel administrativo

Criar uma área restrita para a ABUHSCA configurar:

- Nome da cliente.
- Logotipos.
- Fotos.
- Vídeos.
- Cases.
- Métricas.
- Preços.
- Prazos.
- Validade.
- Links externos.
- Status das integrações.
- Visibilidade das ofertas.

## Responsividade

Prioridade para desktop, mas experiência completa em celular e tablet.

## Acessibilidade

- Contraste adequado.
- Navegação por teclado.
- Textos alternativos.
- Controle de movimento.
- Foco visível.
- Botões claramente identificados.

## Performance

Evitar carregar todos os vídeos simultaneamente.

Usar thumbnails, lazy loading, formatos modernos e animações leves.

---

# REGRAS CRÍTICAS

1. Não reduzir as dez seções.
2. Não remover os pilares Cérebro, Coração e Membros.
3. Não alterar a ordem da narrativa.
4. Não inventar resultados de clientes.
5. Não inventar depoimentos.
6. Não inventar logos de clientes reais.
7. Não inventar fotografias pessoais.
8. Não afirmar que sistemas demonstrativos já foram implantados.
9. Não ativar pagamentos reais automaticamente.
10. Não disponibilizar publicamente a rota SPRINT sem controle de acesso.
11. Não confundir o escopo MARATONA com o escopo SPRINT.
12. Não prometer faturamento, CAC, LTV ou volume de vendas garantidos.
13. Não usar contadores falsos ou escassez artificial.
14. Não criar interfaces genéricas de template.
15. Não substituir mockups relevantes por imagens aleatórias.
16. Não apresentar a MARATONA como integralmente entregue no primeiro mês.
17. Não considerar funcionalidades externas prontas sem integração validada.
18. Não alterar preços sem configuração explícita.

---

# ESTRATÉGIA DE DESENVOLVIMENTO

Desenvolver por etapas, sem tentar implementar toda a aplicação de uma vez.

## FASE 01 — DESIGN SYSTEM E ESTRUTURA

Criar:

- Arquitetura de rotas.
- Design system.
- Tipografia.
- Cores.
- Componentes.
- Navegação.
- Hero.
- Transições.
- Layout responsivo.

## FASE 02 — AUTORIDADE

Implementar seções 02 e 03.

## FASE 03 — METODOLOGIA

Implementar Cérebro, Coração e Membros.

## FASE 04 — INTEGRAÇÕES E PORTFÓLIO

Implementar seções 07 e 08.

## FASE 05 — JORNADA COMERCIAL

Implementar seções 09 e 10.

## FASE 06 — SPRINT

Criar a rota comercial reservada.

## FASE 07 — CONTRATAÇÃO

Preparar contratos, checkout, onboarding e persistência.

## FASE 08 — REVISÃO FINAL

Validar:

- Responsividade.
- Performance.
- Acessibilidade.
- Coerência visual.
- Textos.
- Valores.
- Links.
- Animações.
- Fluxos comerciais.
- Segurança.
- Estados de erro.

---

# PRIMEIRA AÇÃO OBRIGATÓRIA

Antes de implementar qualquer coisa:

1. Analise integralmente este briefing.
2. Apresente o mapa de arquitetura da aplicação.
3. Liste as dez seções na ordem correta.
4. Identifique os componentes reutilizáveis.
5. Apresente a estrutura das rotas MARATONA e SPRINT.
6. Liste os materiais que precisarão ser fornecidos.
7. Identifique dependências externas.
8. Separe claramente o que será demonstrativo e o que será funcional.
9. Apresente o plano de implementação em fases.

Depois dessa análise, inicie apenas a FASE 01.

Não gere imagens pagas, não contrate serviços, não execute pagamentos e não configure ferramentas externas sem autorização.

## RESULTADO ESPERADO

Uma experiência comercial digital exclusiva, cinematográfica, sofisticada e persuasiva, capaz de apresentar a ABUHSCA como parceira estratégica da Construcel.

Não queremos apenas mostrar serviços.

Queremos que Ana Paula consiga visualizar uma operação estruturada, compreender o investimento, reconhecer a metodologia e tomar uma decisão comercial com segurança.

**ABUHSCA × CONSTRUCEL**

**DO BRANDING À PERFORMANCE.**