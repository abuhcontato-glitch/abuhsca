# Serviços Freelance — Construcel

A página inicial `/construcel` contém um bloco independente após as cinco propostas. O botão “Montar orçamento freelance” abre um catálogo de 59 serviços em 9 categorias, com busca sem distinção de acentos, filtro de categoria, quantidades de 0 a 99 e detalhes opcionais do projeto.

A seleção é local, preservada ao recolher o catálogo e independente das propostas. Permite remover itens, limpar seleção, revisar, copiar ou baixar o resumo em TXT. Não envia mensagens nem conclui contratação. As propostas e suas revisões continuam sem calculadoras ou comparativos.

Os preços avulsos ainda não foram aprovados: todos aparecem como “Sob orçamento”, sem converter valores pendentes em preços zero ou adicionar mensalidades dos planos. Escopo, prazo e valores serão confirmados na cotação.

Validação: 15 testes automatizados; build de produção; navegador com catálogo, busca, ausência de resultados, quantidade, detalhes no resumo, download, seleção preservada e ausência de calculadora nos cinco planos. Sem transbordamento horizontal nas larguras 320, 390, 768 e 1440 px.

## Atualização — tabela e pedido com total

Os 59 serviços avulsos agora têm tabela sugerida própria (`freelanceCatalog`), sem alterar preços ou adicionais dos cinco planos. Cada item descreve o limite da entrega e até duas rodadas de ajustes. Valores são sugestões comerciais da página, sujeitos à confirmação antes do aceite; não representam cotações de mercado verificadas. As unidades são entregas pontuais; quando há gestão por 30 dias, o período é explicitado sem renovação automática.

A calculadora mostra preço unitário, quantidade, subtotal e total estimado do pedido. O botão “Montar pedido com valor final” fica desativado sem seleção e prepara resumo com os itens, preços unitários, escopos, total e observações. O resumo pode ser copiado ou baixado; não envia mensagens nem realiza cobrança. Despesas externas são aprovadas separadamente.

Validação: 16 testes automatizados, build, navegador com total de duas artes mais uma landing page (R$ 1.740), remoção e recálculo, pedido com observações, download, limpeza, quatro larguras de tela e isolamento dos cinco planos.
