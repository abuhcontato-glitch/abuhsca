# Demonstração clicável — Construcel

A referência enviada em Arquivo.zip contém nove capturas de uma vitrine de módulos. A adaptação recria a navegação circular e o ambiente de aplicativo na identidade Construcel: azul, branco e amarelo/laranja. Não foram incorporadas capturas de terceiros, contatos, credenciais ou identificadores delas ao site.

## Localização e escopo
A demonstração fica em `/construcel/maratona`, dentro da seção Coração da operação. O menu “A operação” navega para essa seção. As cinco ofertas, seus preços, escopos e revisões permanecem inalterados. A vitrine não aparece nos quatro planos menores e não reintroduz comparações, calculadoras ou listas de exclusões. Os 24 mockups anteriores da MARATONA foram preservados.

## Módulos e ações
1. CRM e orçamentos: cards com detalhes e alteração de etapa; indicadores derivados dos registros locais.
2. SAC 360°: seleção de canais e simulação de respostas; Google é origem da oportunidade, não um canal de chat nativo.
3. Automação de marketing: fluxo visual e execução simulada que cria uma oportunidade no CRM.
4. Chatbot de atendimento: menus e respostas por regras com encaminhamento ilustrativo à equipe.
5. Agente de IA: perguntas e respostas ilustrativas com referência à base autorizada; encaminhamento humano simulado. Não consulta um modelo real.
6. Planejamento de conteúdo: quatro exemplos com etapas de rascunho, aprovação e aprovado, sem publicação externa.
7. Landing pages: edição do título e do botão refletida na prévia; botão abre o formulário demonstrativo.
8. Formulários: valida nome, categoria e quantidade; cria um registro temporário no CRM.
9. Agenda: seleção de dia e horário e confirmação somente na demonstração.
10. Segmentação: filtros por interesse e oportunidades abertas, refletindo os registros e etapas do CRM.
11. Integrações: escolha de origem/destino e mapeamento com resultado JSON fictício. Nenhum endpoint, chave ou requisição real.

Todos os dados são fictícios. Os exemplos são locais e reiniciados ao recarregar; não existe autenticação, persistência, envio de mensagens, publicação, reserva real ou integração com contas da cliente. A implantação real permanece conforme projeto e acessos autorizados.

## Arquivos
- `src/moduleDemo.ts`: registros iniciais, validação, mudança de etapa e filtros puros.
- `src/ModuleShowcase.tsx`: vitrine e onze módulos interativos.
- `src/ModuleShowcase.css`: estilos isolados e responsivos, com a paleta existente.
- `src/main.tsx`: integração na seção existente e navegação “A operação”.
- `tests/module-demo.test.mjs`: validação, imutabilidade, IDs e segmentação.

## Validação
Build de produção aprovado. Quatorze testes automatizados aprovados. Verificação em navegador de todas as ações, sincronização entre CRM/formulário/automação, edição ao vivo, reset após recarga, navegação por teclado (setas, Home e End) e 44 combinações de módulo/largura (320, 390, 768 e 1440 px). Sem requisições de escrita ou erros de execução; páginas menores e galerias preservadas.
