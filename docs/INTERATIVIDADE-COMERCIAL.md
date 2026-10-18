# Expansão interativa — ABUHSCA × CONSTRUCEL

## Resultado
A proposta existente ganhou escolha de plano, orçamento personalizado e preparação de solicitação comercial. Não foram criadas rotas, checkout, cobrança ou integração de contato. As páginas de revisão já existentes continuam acessíveis.

SPRINT: R$ 2.500/mês, 90 dias propostos, sem implantação adicional para landing page e CRM simples e padronizados; honorários R$ 7.500. Mantido o escopo revisado (até duas campanhas por plataforma, oito criativos, oito publicações Instagram, landing page, Perfil da Empresa, WhatsApp, CRM básico e reunião mensal), sujeito à concordância expressa de Ana Paula.

MARATONA: R$ 8.500/mês, 12 meses propostos, implantação proposta R$ 12.000; honorários R$ 114.000. Mantida a operação completa e sua implantação progressiva.

## Auditoria e reaproveitamento
| Existente | Evolução |
| --- | --- |
| Configuração de planos em config.ts | Mantida como fonte dos honorários e das entregas |
| Dois cards financeiros e listas duplicadas | PriceSummary e PlanDeliverables compartilhados, com o mesmo estilo original |
| Comparação SPRINT | PlanComparison reutilizado nas duas propostas, com coluna selecionada e 18 entregas detalhadas |
| Seções de investimento e CTAs | Seletor, calculadora e resumo integrados a essas seções |
| Rotas de revisão de contratação | Preservadas; recebem o plano e os adicionais da sessão |
| Mini CRM SPRINT e dashboard visual MARATONA | Preservados; indicadores fictícios e aviso demonstrativo explícito |
| Institucional de Maike e ABUHSCA | Mesmo layout, texto reforçando as áreas da assessoria |
| Mockups, galerias, jornada e faixas | Preservados: 24 cards principais, duas imagens de produção/alinhamento no SPRINT, nove faixas por proposta |

## Arquivos
- `src/commercial.ts` (novo): catálogo de 20 serviços, cinco categorias, regras de inclusão/adicionais, funções puras para quantidades, cálculo e resumo. Preços avulsos configuráveis, todos inicialmente `null`.
- `src/CommercialContext.tsx` (novo): estado compartilhado, plano escolhido e seleções independentes por plano. Sem persistência após recarregar, sem dados pessoais e sem envio.
- `src/CommercialExperience.tsx` (novo): PlanSelector, PlanDeliverables, QuoteFinancialDetails, ServiceQuoteCalculator, PlanComparison e CommercialRequest.
- `src/Investment.tsx`: card financeiro reutilizado, entrega dinâmica e integração dos controles nas seções existentes e na revisão MARATONA.
- `src/Sprint.tsx`: comparação e resumo compartilhados, calculadora na seção final e revisão SPRINT; enriquecimento do mini CRM existente.
- `src/main.tsx`: provider compartilhado dentro do roteador existente.
- `src/Journey.tsx`: CTA acompanha o plano escolhido.
- `src/MediaGallery.tsx`: esclarecimento dos indicadores demonstrativos no dashboard.
- `src/Presentation.tsx`: valorização da assessoria no texto existente.
- `src/styles.css`: estilos adicionais usando paleta, fontes, bordas e cards originais; sem mudança de identidade.
- `tests/commercial.test.mjs` (novo): seis testes de regras e cálculo; os dois testes de datas existentes foram mantidos.
- `README.md`, `docs/ARQUITETURA.md`, `docs/PROPOSTAS-COMERCIAIS-ATUAIS.md` e este relatório: documentação de uso, regras e validação.

## Regras e pendências
1. Serviços incluídos não são adicionados ao carrinho nem cobrados de novo. A quantidade selecionada significa volume extra ou serviço extraordinário. Cada plano guarda somente sua seleção explícita.
2. Nenhuma tabela avulsa aprovada foi encontrada. Todos os 20 serviços aparecem “Sob orçamento”, incluindo e-commerce e IA. Os valores ficam pendentes, nunca convertidos em serviço gratuito.
3. Há separação entre mensalidade, adicionais recorrentes, implantação e avulsos. O cálculo suporta preços aprovados e recorrência quando cadastrados. O catálogo inicial é de trabalhos avulsos; não há valores ilustrativos em produção.
4. Despesas externas: “Não incluído — sob aprovação”. Não fazem parte dos totais conhecidos e não equivalem a zero. O valor conhecido também não define o primeiro pagamento ou calendário de cobrança.
5. Solicitar contratação/negociação prepara o resumo, sem envio automático. É possível copiar ou baixar TXT e compartilhar pelo canal habitual. Sem número, endpoint ou integração inventados. Se a área de transferência não estiver disponível, o texto é exibido para cópia manual.
6. Plano, adicionais, valores pendentes, escopo, duração e responsabilidades precisam de negociação/aceite e formalização. Não há contrato concluído nem cobrança automática. A mudança do SPRINT continua explicitamente pendente da concordância de Ana Paula.

## Validação
- Build de produção para GitHub Pages: `npm run build -- --base=/abuhsca/`.
- `npm test`: oito testes aprovados (seis comerciais e dois de datas).
- Cálculos: R$ 7.500 e R$ 114.000; preços de teste isolados validam centavos, avulsos e recorrência sem publicar esses valores.
- Browser: ambos os planos, troca de cards e entregas, carrinhos separados, quantidades 0–99, inclusão/remoção/limpeza, pendências e prevenção de duplicidade.
- Cópia efetiva do resumo, fallback sem clipboard e download TXT; navegação e estado nas revisões existentes; pagamentos continuam desabilitados.
- Rotas principal, SPRINT, duas revisões e onboarding preservadas. Seções, galerias, ampliações e indicadores demonstrativos preservados.
- Desktop e mobile: 320, 390, 768 e 1440 px sem rolagem horizontal global; tabela possui sua área própria de rolagem.
- Nenhum erro de execução no navegador.

## Escolha antecipada — após a apresentação
`ProposalPaths.tsx` oferece LTDA (SPRINT), MARATONA e Calculadora Freelancer entre a apresentação de Maike e a metodologia. SPRINT abre a rota já existente com liberação visual; MARATONA seleciona a operação completa e navega à metodologia; Freelancer abre a mesma calculadora no modo independente, sem honorários ou mensalidade de plano. Sua seleção é separada dos adicionais de SPRINT/MARATONA e permanece ao recolher a calculadora. O resumo freelancer não inclui o valor de nenhum contrato. Uma faixa extra delimita a nova área (dez faixas na principal e nove no SPRINT). `calculateFreelanceQuote` e `freelanceSummary` mantêm cálculos e resumo separados; nove testes automatizados agora aprovados.

## Caminho intermediário TRAÇÃO — substitui o acesso Freelancer
A análise identificou uma lacuna entre aquisição remota (SPRINT) e operação digital completa (MARATONA): produção original mais rotina de acompanhamento dos orçamentos. O acesso inicial agora apresenta SPRINT → TRAÇÃO → MARATONA. TRAÇÃO abre uma proposta expansível no mesmo ponto da página, com escopo, responsabilidades, duas demonstrações reutilizadas e solicitação para copiar/baixar. A calculadora deixa de ser uma modalidade de entrada e continua sendo utilitário de adicionais na seção de investimento.

Configuração em `tractionOffer` de `config.ts`; apresentação e resumo em `TractionOffer.tsx`; `ProposalPaths.tsx` reutiliza o mesmo card. `CommercialRequest` aceita resumo específico e nome de arquivo, sem herdar plano/mensalidade. Não há preço, total ou implantação inventados: todos pendentes de proposta formal. Volumes e prazo são explicitamente propostos; precisam de validação de capacidade e aceite. O seletor financeiro continua contendo as duas ofertas com honorários definidos. O orçamento TRAÇÃO é tratado separadamente até seu preço ser aprovado.

Build e nove testes passaram. Browser validou as três entradas, escopo proposto, ausência de valores de outros planos no resumo TRAÇÃO, cópia, download, galeria/modal, navegação e 320/390/768/1440 px.

### Atualização de preço TRAÇÃO
Mensalidade centralizada em `tractionOffer.monthly`: R$ 5.500; seis meses propostos; implantação adicional zero para landing/CRM simples e padronizados; honorários R$ 33.000. Card, detalhes e resumo de solicitação usam os mesmos dados. Substitui a indicação anterior “Sob proposta”; despesas externas e aceite continuam separados.

## Separação em propostas individuais — atualização vigente
A entrada `/construcel` mantém o hero, apresentação e escolha, encerrando antes da metodologia. Cada card abre um documento completo: SPRINT em `/construcel/sprint` (dez seções), TRAÇÃO em `/construcel/tracao` (dez seções) e MARATONA em `/construcel/maratona` (nove seções / 24 mockups). A TRAÇÃO deixou de ser um painel expansível: possui hero, direção, metodologia aplicada, aquisição, conteúdo, conversão, CRM, cronograma, escopo/comparação e investimento, com o mesmo padrão visual e faixas. A MARATONA preserva os conteúdos existentes em seu endereço próprio. Não há mais liberação adicional do SPRINT.

Configuração, comparação, catálogo de adicionais e cálculos contemplam os três planos. TRAÇÃO: R$ 5.500/mês por seis meses propostos, total R$ 33.000. `CommercialContext` usa o plano da rota, com seleções independentes por oferta. Trocar plano navega para seu documento ou sua revisão. As revisões existentes são preservadas e a TRAÇÃO ganha revisão própria, sem pagamento ativo. A cópia do resumo e o orçamento de adicionais usam somente o escopo e o valor da proposta aberta.

Validação: dez testes automatizados; build de produção; três documentos e revisões com navegação, acesso direto, recarga, quantidades e resumos isolados; preservação das imagens e ampliações; 320, 390, 768 e 1440 px. Corrigida a largura do título TRAÇÃO em celular.

## Sem comparações dentro das propostas
Por solicitação, as três apresentações e revisões deixam de mostrar comparativos e seletores de outros planos. SPRINT passa a ter nove seções, após remover o bloco de comparação e ajustar a numeração. TRAÇÃO mantém sua seção de escopo sem tabela. MARATONA exibe somente sua reserva de tecnologia. Também foram removidas comparações de preço e de entregas dos textos internos, preservando o aceite de escopo, entregas, extras e honorários próprios. A escolha dos três planos fica exclusivamente na entrada `/construcel`.
