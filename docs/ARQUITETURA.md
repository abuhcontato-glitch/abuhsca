# ABUHSCA × CONSTRUCEL

## Escopo aprovado nesta entrega
Fase 01 e, por solicitação posterior, apresentação SPRINT liberada por botão abaixo da MARATONA. A solicitação de criação do projeto substitui a restrição de onboarding que impedia criar código no repositório vazio. Nenhum serviço pago, imagem gerada, cobrança, publicação ou alteração remota.

## Arquitetura
React + TypeScript + Tailwind CSS 4, Vite e React Router. Conteúdo e preços em `src/config.ts`; cálculo de validade em `src/dates.ts`. CSS define tokens, tipografia de sistema sem dependência de fonte externa, grid responsivo, foco e redução de movimento. A ilustração SVG é conceitual, não um logo ou registro de projeto real.

### Rotas
- `/` redireciona para `/construcel`.
- `/construcel`: MARATONA, dez seções ordenadas.
- `/construcel/sprint`: apresentação inicialmente recolhida, revelada por Liberar SPRINT.
- `/construcel/contratacao/maratona`: informação de integração pendente.
- `/construcel/contratacao/sprint`: integração pendente, sem contratação ativa.
- `/construcel/onboarding`: informação de confirmação pendente.
- Demais caminhos: página não encontrada.

Por solicitação explícita, o botão Liberar SPRINT revela a oferta abaixo da MARATONA. É um controle visual público e não autenticação. A oferta é recolhida ao recarregar, sem persistência ou mudança global de visibilidade. Na Fase 06 será necessário validar sessão ou link controlado no servidor antes de fornecer escopo/preços SPRINT; não colocar segredo em bundle, query string ou localStorage. Os valores preliminares no arquivo de configuração são dados de desenvolvimento, não dados sigilosos protegidos por este protótipo.

### Componentes
Implementados: Wordmark tipográfico provisório, Header com menu móvel, Hero, ConstructionArt, Validity, Tape, PhasePlaceholder e PendingRoute. Próximas fases: SectionHeading, ServiceCard, DeviceMockup, Metric, AccessibleCarousel, JourneyStep, InvestmentCard e formulários de contratação.

### Ordem imutável das dez seções
1. Hero / proposta comercial.
2. Quem sou eu?
3. Autoridade / portfólio / números.
4. O cérebro da operação.
5. O coração da operação.
6. Os membros da operação.
7. Integrações e automações.
8. Nossa expertise é construir audiências.
9. Como vai funcionar.
10. Investimento / MARATONA.

## Materiais pendentes
Logos oficiais/autorizados; retrato editorial real de Maike; fotos e vídeos de projetos; autorização de uso das marcas; cases e métricas comprovadas; data efetiva de apresentação com fuso; aprovação final de valores, custos, escopo e capacidade operacional; contatos e dados jurídicos; fornecedores e URLs aprovadas.

Data de apresentação nula até confirmação. Nenhum contador artificial. Após configuração persistida no arquivo, validade de três meses de calendário, com ajuste para o último dia do mês quando necessário. A data não reinicia em novas visitas. Para publicação comercial, confirmar a data e os preços antes de liberar contratação.

## Funcional versus demonstrativo
Funcional: rotas, navegação por âncoras, menu responsivo, layout, redução de movimento, cálculo de validade quando configurada e estados de acesso/integração pendentes.
Demonstrativo: nomes tipográficos provisórios e ilustração arquitetônica. As seções 02–10 são lugares reservados explícitos, não conteúdos concluídos. Não há CRM, loja, campanhas, checkout, assinatura, pagamento ou agendamento ativo. Nenhuma métrica ou depoimento inventado.

## Dependências externas futuras
Backend compatível com Supabase/Lovable (a confirmar), autenticação e políticas de acesso por linha, armazenamento de mídia autorizado, provedor de assinatura, gateway e validação criptográfica/idempotente de webhooks, agenda, consentimento e política de retenção. A aplicação atual funciona sem credenciais. Nenhuma ferramenta externa foi configurada.

Modelo futuro: proposals, offers, clients, memberships, media_assets, verified_metrics, contracting_sessions, signature_events, payment_events e onboarding_bookings. Valores e escopo devem ser versionados no servidor por proposta; status posteriores só liberados por eventos validados, nunca por flags do navegador. Administração precisa autenticação e autorização server-side antes de disponibilizar edição de dados.

## Plano por fases
1. Design system, rotas, hero, transições e responsividade — entrega atual.
2. Apresentação de Maike, autoridade e placeholders de métricas comprováveis.
3. Cards detalhados dos pilares Cérebro, Coração e Membros com mockups específicos.
4. Ecossistema de integrações com status e carrossel acessível de portfólio.
5. Jornada de seis etapas, TREAD e oferta MARATONA completa.
6. SPRINT visual implementada: escopo, exclusões, cronograma e preços da configuração central. Autenticação real de servidor ainda pendente antes de qualquer uso confidencial.
7. Contratação, persistência, administração restrita, assinatura, checkout e onboarding.
8. Auditoria de conteúdo, segurança, acessibilidade, performance e fluxos.

## Mídia recebida — lote 03
32 quadros PNG extraídos do ZIP fornecido, sem alterar as imagens. Painel 02 contém imagens 01–16; painel 01 contém 17–32 (ordem confirmada visualmente). Arquivos em public/media/construcel, componente MediaGallery com carregamento lazy, legendas e acesso à imagem original em nova aba. Imagem 01 após hero; 02 na apresentação; 03–05 em trajetória; 06–15 em Cérebro; 16–22 em Coração; 23–25 em Membros; 26–27 em Integrações; 28–30 em Audiências; 31–32 em Jornada. Tratadas como prévias conceituais até comprovação de origem; não constituem prova de resultados, identidade pessoal, portfólio real ou implantação. Seções ainda precisam do conteúdo e interações completos previstos no briefing.

## Identidade Construcel — revisão de paleta
Por solicitação do usuário, a interface passa a usar branco como base, azul (#0758A8) em títulos e estrutura, amarelo (#FFD044) nas faixas e laranja (#F5A623) em ações e destaques. Tons escolhidos a partir das referências fornecidas, sujeitos ao manual oficial. Aplicado também à SPRINT, menu móvel, estados de rota e ilustração SVG. As imagens fornecidas são preservadas, incluindo suas legendas vermelhas originais. Esta orientação substitui a paleta preta/vermelha do briefing.

## Revisão ao vivo — hero, apresentação e metodologia
Por solicitação posterior, a geometria do hero foi substituída pela imagem 01 em mockup CSS de iMac; a fachada isolada foi removida. A inspeção direta do ZIP revelou que 02 está identificada como Ana Paula e 03 como Maike Christian — Direção; a associação anterior de 02 a Maike estava incorreta e foi corrigida. Quem sou eu agora usa 03, com apresentação textual. A seção Autoridade/portfólio/números foi substituída por uma introdução à metodologia com Cérebro, Coração, Membros e integrações. A ordem dos pilares posteriores foi preservada. Navegação interna usa SectionLink para rolar mantendo a rota hash no GitHub Pages. Nenhuma mídia foi alterada.

## Revisão do hero — composição centralizada
iMac removido por solicitação do usuário. Hero em coluna única, com títulos, marca, texto e CTA centralizados. O PNG oficial ainda não foi recebido; exibe-se provisoriamente o nome Construcel em texto. Configurar proposal.logoPath com caminho relativo ao receber o arquivo aprovado. Não extrair um logo da fachada nem inventar um logo oficial.

## Logo oficial recebida
PNG fornecido no ZIP Logo Construcel Colorido 3D.png.zip aplicado no hero centralizado, substituindo o nome em texto. Arquivo original preservado em public/media/construcel/logo.png; apenas redimensionamento responsivo via CSS, sem distorção ou edição.

## Retrato fornecido pelo responsável
Imagem de Quem sou eu substituída pelo PNG Cinegrafista com câmera ARRI, identificado pelo próprio usuário como seu retrato. Arquivo preservado sem edições em public/media/construcel/maike-christian-arri.png, dimensões intrínsecas e texto alternativo atualizados.

## Recorte das prévias visuais
As faixas de títulos gravadas nas imagens da galeria foram excluídas da área exibida por recorte CSS: 3% no topo e 17% na base, usando as dimensões reais de cada arquivo. Os originais são preservados. A ampliação passou a usar dialog nativo com o mesmo recorte, fechamento por Escape/botão e retorno de foco, substituindo os links diretos aos PNGs com títulos. Legendas HTML permanecem fora da imagem. Logo e retrato transparente não são recortados.

## Google Meu Negócio
Por solicitação do usuário, o mockup Workspace (card 08) foi substituído por imagem demonstrativa de Google Meu Negócio / Perfil da Empresa, criada a partir da referência original. Legenda e texto alternativo atualizados. O novo arquivo não tem faixa de título embutida e é exibido integralmente, inclusive ao ampliar. Nenhuma integração ou perfil real foi criado ou alterado.

## Mockup HostGator
Card de domínio e hospedagem substituído por representação ilustrativa do site HostGator em iMac e laptop. Imagem gerada identificada como demonstração, sem faixa de título externa; exibição integral inclusive na ampliação. Acesso ao site real foi bloqueado pela rede, portanto não se trata de captura da página atual. Nenhum serviço foi contratado.

## Plano de marketing — novo mockup
Imagem do card 06 atualizada para mockup editorial de livro e páginas de plano estratégico, utilizando a logo fornecida como referência. Apresentação demonstrativa de 120 páginas, não um documento efetivamente entregue ou diagnóstico validado. Exibição integral, sem faixa de título externa, incluindo na ampliação.

## Manual de identidade — novo mockup
Card 07 atualizado com mockup editorial de manual, paleta, tipografia e aplicações em papelaria e uniformes, baseado na logo fornecida. Exibição integral sem faixa externa de título. Conteúdo gráfico, códigos de cores e família tipográfica mostrados são demonstrativos e não constituem especificação oficial validada ou manual entregue.

## Site institucional e e-commerce — novos mockups
Cards 10 e 11 atualizados com imagens demonstrativas baseadas na logo fornecida. Site institucional usa a fachada como referência e foco em orçamento; e-commerce mostra categorias, busca, catálogo e página de produto em múltiplos dispositivos. Exibição integral sem faixas externas. São conceitos visuais; não constituem site corporativo, loja ou checkout efetivamente implementados.

## Landing page — formulário e chatbot
Card 12 atualizado com mockup demonstrativo focado em conversão: formulário de orçamento no banner principal, CTA e chatbot aberto para dúvidas, com versão móvel. Imagem integral sem faixa de título externa. Formulário e chatbot são elementos visuais da imagem, não novas integrações funcionais da aplicação.

## Produção de Conteúdo
Card 13 renomeado para Produção de Conteúdo. Imagem substituída por montagem gerada usando a referência de Ana Paula enviada pelo usuário e o retrato fornecido de Maike, com iPhone em gimbal, ring light e lapela. Não é registro documental de produção realizada; texto alternativo identifica montagem demonstrativa. Exibição integral, sem títulos embutidos.

## Meta Ads e Google Ads — novos mockups
Cards 14 e 15 atualizados para demonstrações de anúncios sociais no Instagram/Facebook e anúncios de pesquisa no Google, respectivamente. Meta usa a montagem de produção como referência de Ana Paula. Exibição integral sem faixa de título. Não são campanhas ativas, capturas de contas reais ou resultados comerciais comprovados.

## Dashboard comercial — identidade Construcel
Card 16 atualizado com mockup de dashboard branco/azul e gráficos amarelos/laranja, usando a logo como referência. KPIs, canais, funil e equipe exibidos são dados fictícios explicitamente identificados na imagem. Não há sistema comercial implantado, conexão de dados ou comprovação de resultados. Exibição integral sem faixa externa de título.

## SAC comercial — atendimento omnichannel
Card 17 atualizado para mockup de caixa de entrada unificada, conversa ativa e dados do contato na identidade Construcel. WhatsApp, Instagram e Facebook representados como canais e Google como origem de aquisição, sem alegar chat nativo Google Business disponível. Conversas e contatos são fictícios; integrações não foram implementadas. Imagem integral sem faixa de título externa.

## CRM Kanban, Chatbot e Agente de IA
CRM atualizado para identidade Construcel. O card combinado Chatbot/IA foi separado: Chatbot apresenta regras, menus e fluxos; Agente de IA apresenta consulta a conhecimento autorizado e apoio supervisionado. Três mockups independentes com descrições HTML, todos demonstrativos. O agente usa ID interno 33 e aparece imediatamente após Chatbot; numeração visual dos cards posteriores ajustada para manter sequência. Nenhuma automação ou integração foi ativada.

## E-mail marketing — identidade Construcel
Mockup atualizado com configuração de campanha, segmentação, fluxo de relacionamento e prévia responsiva de newsletter. Imagem demonstrativa com logo e paleta Construcel, sem faixa de título externa. Nenhuma mensagem foi enviada, campanha ativada ou base de contatos integrada.

## Treinamento comercial com Maike
Imagem de treinamento atualizada para montagem demonstrativa com Maike como instrutor, usando seu retrato fornecido como referência. Equipe e cena são ilustrativas, não comprovação de treinamento realizado. Texto alternativo identifica a montagem; imagem integral sem faixa externa.

## Universidade Construcel — experiência de streaming
Mockup EAD atualizado com banner de destaque, setas/indicadores de carrossel, trilhas e continuação de aulas. Módulos solicitados: Diretoria, Financeiro, Faturamento, Comercial e Marketing. Visual próprio na identidade Construcel. O banner é representação estática; não há carrossel funcional, cursos ou plataforma EAD implementados nesta entrega de imagem.

## Membros, integrações e exclusão da seção de audiências
A pedido do usuário, Membros passa de três para dois cards: Projetos, produtividade e conhecimento (incorpora biblioteca e documentação) e Gestão financeira e indicadores. Quatro novas imagens demonstrativas aplicadas a esses cards e a Ecossistema de integrações / Automação de processos, na identidade Construcel. Seção de audiências/Do branding à performance e seus três quadros removidos da página; arquivos originais preservados. Total de seções atualizado dinamicamente para nove e sequência visual dos cards ajustada. Nenhuma integração ativada.

## Jornada explicativa — seis etapas
Seção Da estratégia à execução implementada com seis blocos HTML e ícones: contratação digital, onboarding, planejamento/TREAD, implantação, gestão por indicadores e acompanhamento. Explicações incluem primeiro mês de bases, implantação gradual, até 10 KPIs por departamento conforme dados e suporte em horário comercial. Contratação continua com integrações pendentes claramente indicadas. Duas imagens refeitas: infográfico de seis etapas e montagem demonstrativa de reunião de alinhamento com Maike e Ana Paula. Não são comprovação de reunião realizada nem sistemas já ativos.

## Oferta principal e revisão da contratação MARATONA
Seção de investimento implementada como card MARATONA — Operação 360°, com conteúdo e preços centralizados em proposal.maratona. Mensalidade R$ 12.000, implantação R$ 60.000, 12 meses; total calculado de R$ 204.000. CTA abre /construcel/contratacao/maratona, agora página de revisão com etapas previstas, resumo e condições. Assinatura/pagamento permanecem indisponíveis e explicitamente indicados; sem cobrança, coleta de cartão, contrato definitivo ou avanço fictício a onboarding. Custos externos e validade pendente discriminados. Escopo conforme texto fornecido pelo usuário e cronograma contratual.

## Página completa SPRINT e comparação
SPRINT ampliada para dez seções próprias: abertura, direção de Maike, prioridades, Google Business Profile, campanhas, landing page, WhatsApp/CRM simplificado, cronograma de três meses, comparação e investimento. Utiliza somente imagens relevantes ao escopo e esclarece recursos adicionais ilustrativos não incluídos. Tabela com oito linhas conforme instrução do usuário: objetivo, equipe, site/e-commerce, CRM completo, tráfego pago, conteúdo recorrente, treinamento e prazo. Os 70% representam diferença sobre mensalidade de referência, não o mesmo produto com desconto.

Liberar SPRINT na MARATONA revela um resumo com acesso à página completa. Acesso direto à página começa em liberação visual; não é autenticação. Comparação e condições não afirmam cotações de mercado verificadas. Custos externos e validação prévia de profissionais, ferramentas, impostos e capacidade de entrega discriminados.

Checkout SPRINT independente em /construcel/contratacao/sprint: revisão de escopo, R$ 3.600/mês + implantação R$ 3.000 por três meses, total calculado R$ 13.800. Assinatura/pagamento e onboarding seguem dependentes de integrações, sem cobranças nem coleta de cartão. Checkout MARATONA mantém R$ 12.000/mês + R$ 60.000 por 12 meses, total R$ 204.000. Ambos validados em quatro larguras de tela, navegação direta e recarga.

## Condições comerciais atuais — revisão fornecida pelo usuário
Esta revisão SUBSTITUI os valores e escopos anteriores. Texto de referência preservado em docs/PROPOSTAS-COMERCIAIS-ATUAIS.md. MARATONA — Premium LTDA 360°: implantação R$ 5.000, mensalidade R$ 2.500, 12 meses, total R$ 35.000. SPRINT — Aquisição Comercial: implantação R$ 2.000, mensalidade R$ 1.500, três meses, total R$ 6.500. Removida a comparação de desconto percentual.

Implantação e gestão mensal das duas ofertas agora vêm de src/config.ts, incluindo limites de publicações/criativos, captação e reuniões. Comparativo de 17 linhas atualizado, com valores calculados a partir da mesma configuração. MARATONA: 24 publicações Instagram + 24 TikTok (incluindo adaptações), até 20 criativos/mês, uma visita mensal, um treinamento inicial e reuniões semanais. SPRINT: até quatro criativos/mês, uma reunião mensal e sem captação presencial, conteúdo recorrente, chatbot, IA, CRM avançado ou treinamento presencial.

Custos de anúncios, domínio/hospedagem, licenças, tarifas e APIs separados dos honorários, mediante aprovação. Auditoria do catálogo e orçamento real de produção, IA e integrações são condições anteriores à assinatura, não uma verificação de rentabilidade concluída. Mockups do catálogo mais amplo não implicam inclusão automática no pacote; o escopo comercial detalhado prevalece. Checkouts continuam somente de revisão, sem assinatura ou cobrança ativa.

## Planejamento de ferramentas e reserva de tecnologia
Seção Ecossistema ampliada com 12 áreas de ferramentas previstas, propriedade de contas/dados da cliente, acessos separados e contratação somente após aprovação. Ferramentas citadas não foram contratadas, configuradas nem integradas. Sem presumir licença ou assinatura ativa. Valores públicos são estimativas de planejamento: SPRINT R$ 30–100/mês; MARATONA R$ 205–705/mês, com meta inicial até R$ 500 condicionada à viabilidade técnica. Breakdown soma hospedagem 100, domínio 5, CRM 0–150, automação 50–100, IA 50–150 e WhatsApp 0–200. Honorários, anúncios, tarifas de transação e trabalho humano separados.

Reservas aparecem também na revisão de contratação, sem alterar os totais de honorários (MARATONA R$ 35.000, SPRINT R$ 6.500). Adicionadas ao planejamento SPRINT mensuração GA4/GTM/conversões e dashboard de campanhas. Stack final de site/loja depende da auditoria do catálogo.

O simulador interno foi produzido FORA do checkout e do site público, em /workspace/abuhsca-internal/simulador-custos.html. Não publicar dados de despesas fixas, assinaturas ou margens da agência no repositório público. O simulador calcula premissas locais, sem rede e sem persistência; assinatura e custos ativos reais aguardam informação do responsável.

## Estrutura comercial aprovada — revisão mais recente
Substitui todos os valores anteriores: opção 01 SPRINT R$ 2.500/mês + R$ 2.000 por três meses, total R$ 9.500; opção 02 MARATONA R$ 8.500/mês + R$ 12.000 por 12 meses, total R$ 114.000. Diferença mensal calculada de R$ 6.000. MARATONA reposicionada como departamento completo de marketing, publicidade, tecnologia, e-commerce e IA. SPRINT concentra aquisição, campanhas, landing page e organização comercial. Limites de entregas existentes preservados; sem ampliação automática de escopo. Notice compartilhado nas condições e revisões de contratação exige revisão e concordância expressa de Ana Paula com entregas e exclusões antes da assinatura; não registra aceite nem simula concordância. Tarifas e integrações continuam pendentes.

## Atualização cirúrgica vigente — outubro de 2026
O escopo atual está em PROPOSTAS-COMERCIAIS-ATUAIS.md e substitui as exclusões antigas do SPRINT. A base de serviços é compartilhada em config.ts; MARATONA acrescenta grupos avançados. Mantidas 9 seções principais, 10 no SPRINT, 24 imagens principais, rotas, modal, gate visual, comparação, cronogramas e checkouts. MediaGallery é reutilizada no SPRINT para conteúdo, site/loja, CRM, chatbot, IA e treinamento, sem novo componente visual. CSS e identidade inalterados.

## Revisão comercial posterior — SPRINT de aquisição
Esta revisão substitui a base compartilhada descrita anteriormente. Config.ts separa o SPRINT enxuto (R$ 2.500/mês, implantação adicional zero condicionada a implementações simples, total R$ 7.500) da MARATONA completa (valores preservados). SPRINT mantém dez seções, nove faixas cruzadas, mockups de campanhas/Google/landing e mini CRM; demonstrações de site/loja, audiovisual presencial, IA e treinamento ficam somente na MARATONA. Economia unitária da agência fica fora do repositório público.

## Estado comercial interativo
`CommercialProvider` fica dentro do roteador existente e compartilha plano e quantidades por plano entre seletor, calculadora, resumo, comparativo e revisões. `commercial.ts` contém catálogo e funções puras; `CommercialExperience.tsx` contém os controles e reaproveita os estilos do investimento. O card financeiro é compartilhado por ambas as ofertas em `Investment.tsx`. Não há rotas ou dependências novas, envio de dados, cobrança ou armazenamento persistente. Detalhes e testes em `INTERATIVIDADE-COMERCIAL.md`.
