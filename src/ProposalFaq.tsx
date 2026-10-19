import { proposal } from './config';
import { money, planLabel, type PlanId } from './commercial';
import { SectionTape } from './SectionTape';

type Answer = readonly [string,string];
const specific:Record<PlanId,Answer[]>={
 base:[
 ['Qual é o objetivo do BASE?','Dar direção estratégica à Construcel, com prioridades práticas para orientar as decisões e a execução da equipe.'],
 ['Como funciona a reunião?','É realizada uma reunião remota de até 45 minutos por mês, com análise das informações enviadas e orientação dos próximos passos.'],
 ['O que recebo após o alinhamento?','Um plano de prioridades e recomendações práticas para a equipe da Construcel executar.'],
 ['Quem coloca as recomendações em prática?','A equipe da Construcel executa as ações. Maike conduz a orientação estratégica e a revisão dos indicadores enviados.'],
 ['Como preparar o primeiro encontro?','Envie os objetivos comerciais, dúvidas, informações da operação e indicadores disponíveis antes da reunião.']
 ],
 arranque:[
 ['Qual é o foco do ARRANQUE?','Ativar uma oferta comercial com gestão de uma campanha Meta Ads e acompanhamento dos indicadores.'],
 ['Quantas campanhas e peças estão previstas?','Uma campanha ativa no Meta Ads e quatro criativos simples por mês, produzidos a partir dos materiais fornecidos pela Construcel.'],
 ['Como acontece o acompanhamento?','A campanha recebe otimização semanal. Os indicadores são apresentados em relatório e em uma reunião mensal de até 30 minutos.'],
 ['O que a Construcel precisa fornecer?','Materiais, informações da oferta, acessos e aprovação dos anúncios. A verba de mídia é aprovada e paga separadamente.'],
 ['Quem atende os contatos dos anúncios?','A equipe da Construcel recebe os contatos, responde às dúvidas, prepara orçamentos e conduz o fechamento.']
 ],
 sprint:[
 ['Qual é o foco dos 90 dias?','Gerar oportunidades de orçamento pelo WhatsApp, conectando campanhas, landing pages e organização comercial.'],
 ['Quais campanhas serão gerenciadas?','Meta Ads e Google Ads, com até duas campanhas ativas por plataforma e monitoramento e otimização semanal.'],
 ['Quantos conteúdos estão previstos por mês?','Oito criativos publicitários e oito publicações no Instagram, aproveitando os materiais das campanhas e os arquivos enviados pela Construcel.'],
 ['Como funcionam as landing pages?','São páginas comerciais simples e padronizadas, voltadas à solicitação de orçamento pelo WhatsApp. Quantidade e cronograma serão definidos no escopo.'],
 ['Como será organizada a rotina comercial?','Com Google Perfil da Empresa, WhatsApp Business organizado, CRM básico para acompanhar leads e orçamentos e uma reunião mensal. A produção utiliza materiais enviados pela Construcel.']
 ],
 tracao:[
 ['Qual é a proposta da TRAÇÃO?','Conectar aquisição de clientes, conteúdo original e acompanhamento comercial durante seis meses.'],
 ['Quais estruturas digitais estão previstas?','Uma landing page comercial, site oficial institucional responsivo, chatbot com fluxos definidos, WhatsApp organizado e CRM básico.'],
 ['Como funciona a produção de conteúdo?','Uma sessão presencial mensal e quatro vídeos curtos originais, que compõem os oito criativos mensais. Também estão previstas 16 publicações Instagram e adaptação dos quatro vídeos ao TikTok.'],
 ['Como funcionam as campanhas?','Gestão de Meta Ads e Google Ads com até duas campanhas ativas por plataforma, monitoramento e otimização semanal.'],
 ['Como a equipe comercial será acompanhada?','Com duas reuniões mensais, um treinamento remoto inicial, roteiro de atendimento e follow-up e painel básico de campanhas, leads e orçamentos.']
 ],
 maratona:[
 ['Qual é o papel da ABUHSCA na MARATONA?','Conduzir a estratégia e coordenar a operação de marketing, publicidade, tecnologia, e-commerce e inteligência artificial, conforme o cronograma contratual.'],
 ['Quais estruturas digitais fazem parte da proposta?','Landing pages, site institucional, e-commerce, CRM avançado, chatbot, agente de IA e integrações, dimensionados no escopo de implantação.'],
 ['Como funciona a entrega de conteúdo?','Estão previstas 24 publicações Instagram e 24 TikTok por mês. O escopo também prevê 20 criativos publicitários, cuja periodicidade será formalizada, e produção audiovisual conforme o cronograma.'],
 ['Como funcionam treinamento e alinhamento?','A proposta contempla treinamento, universidade corporativa e reuniões semanais. Módulos, participantes e sequência de implantação serão acordados no planejamento.'],
 ['O que mostram as demonstrações interativas?','Exemplos conceituais de como os módulos podem funcionar. Os dados são fictícios; sistemas, integrações e implantação serão definidos e entregues conforme o contrato.']
 ]
};
export function proposalFaq(plan:PlanId):Answer[]{
 const offer=proposal[plan];
 return [...specific[plan],
 ['Qual é o investimento e o prazo?',`${money(offer.monthly)} por mês, por ${plan==='sprint'?'90 dias':plan==='base'||plan==='arranque'?'um ciclo inicial proposto de 30 dias':`${offer.months} meses`}. ${offer.setup?`Implantação de ${money(offer.setup)}. `:'Sem taxa adicional de implantação para o escopo proposto. '}Total de honorários no período: ${money(offer.monthly*offer.months+offer.setup)}. Condições finais dependem do aceite e do contrato.`],
 ['Como acontece o início do trabalho?','Após o aceite e a formalização, fazemos o alinhamento de objetivos, materiais, acessos e aprovações. O início e o cronograma são combinados com a Construcel.'],
 ['Como são tratados os custos de ferramentas e anúncios?','Verba de anúncios, licenças, hospedagem, APIs, deslocamentos e outras despesas externas aplicáveis são orçados e aprovados separadamente dos honorários.'],
 ['Existe garantia de vendas ou de quantidade de leads?','Os resultados dependem de fatores como oferta, investimento em mídia, mercado, atendimento e aprovação dos materiais. O acompanhamento orienta os ajustes; não há garantia de volume de leads, vendas ou faturamento.'],
 ['Como formalizar a proposta?','Use o botão de revisão do investimento para conferir o escopo e as condições. O aceite e a contratação serão formalizados com a ABUHSCA; a navegação na página não gera cobrança ou assinatura automática.']
 ];
}
export function ProposalFaq({plan}:{plan:PlanId}){
 return <><SectionTape/><section className="proposal-faq" id={`${plan}-faq`} aria-labelledby={`${plan}-faq-title`}><p className="eyebrow">DÚVIDAS SOBRE A PROPOSTA {planLabel(plan)}</p><h2 id={`${plan}-faq-title`}>Perguntas frequentes<span>.</span></h2><div className="proposal-faq-list">{proposalFaq(plan).map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section></>;
}
