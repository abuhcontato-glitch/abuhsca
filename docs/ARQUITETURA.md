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
