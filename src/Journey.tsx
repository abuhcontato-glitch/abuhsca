import { FileCheck2, UsersRound, ListChecks, Layers3, ChartNoAxesCombined, MessagesSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sections } from './config';
import { MediaGallery } from './MediaGallery';

const steps = [
 { title: 'Contratação digital', icon: FileCheck2, summary: 'Escopo claro. Um começo alinhado.', description: 'Revisão e aprovação da proposta, contrato eletrônico, assinatura e confirmação de pagamento antes da liberação do onboarding.', points: ['Proposta e condições revisadas', 'Contrato e assinatura eletrônica', 'Confirmação pelo processo de pagamento'], note: 'Fluxo previsto. Assinatura e pagamento ainda dependem de integração.' },
 { title: 'Onboarding', icon: UsersRound, summary: 'Conhecer a Construcel por dentro.', description: 'Reunião inicial para alinhar expectativas, conhecer a operação e reunir as informações necessárias ao diagnóstico oficial.', points: ['Formulário de levantamento', 'Coleta de informações e acessos', 'Objetivos e responsáveis definidos'], note: 'Acessos concedidos com as permissões adequadas a cada necessidade.' },
 { title: 'Planejamento / TREAD', icon: ListChecks, summary: 'Prioridade antes de velocidade.', description: 'Organização das demandas em urgente, circunstancial e importante, com prioridades e plano de ação acordados em conjunto.', points: ['Diagnóstico e organização das bases', 'Cronograma e responsabilidades', 'Urgências críticas previamente acordadas'], note: 'O primeiro mês prioriza planejamento, diagnóstico e organização.' },
 { title: 'Implantação', icon: Layers3, summary: 'Uma estrutura construída por etapas.', description: 'Implantação progressiva dos pilares Cérebro, Coração e Membros, conforme escopo, dependências e cronograma aprovados.', points: ['Estratégia, marketing e tecnologia', 'Atendimento e operação comercial', 'Produtividade e colaboração'], note: 'A operação completa não é entregue integralmente no primeiro mês.' },
 { title: 'Gestão por indicadores', icon: ChartNoAxesCombined, summary: 'Visibilidade para decidir melhor.', description: 'Centralização do acompanhamento dos departamentos em um ambiente de gestão, com indicadores definidos para cada realidade.', points: ['Até 10 KPIs por departamento', 'Indicadores conforme dados disponíveis', 'Acompanhamento de tarefas e entregas'], note: 'Definições e integrações são validadas antes de apresentar dados reais.' },
 { title: 'Acompanhamento', icon: MessagesSquare, summary: 'Alinhar, medir e evoluir.', description: 'Reuniões periódicas para revisar resultados, ajustar prioridades, acompanhar entregas e definir os próximos passos.', points: ['Revisão de indicadores e relatórios', 'Ajustes de prioridades e plano de ação', 'Reuniões online ou na agência, por agendamento'], note: 'Suporte via WhatsApp: segunda a sexta, das 8h às 18h, exceto feriados.' },
];
export function JourneySection() {
 const index = sections.findIndex(section => section.id === 'jornada');
 return <section id="jornada" className="journey-section" aria-labelledby="journey-title">
  <div className="section-number">{String(index+1).padStart(2,'0')} / {String(sections.length).padStart(2,'0')} · COMO VAI FUNCIONAR</div>
  <div className="journey-heading"><div><p className="eyebrow">UM CAMINHO CLARO. SEIS ETAPAS.</p><h2 id="journey-title">DA ESTRATÉGIA<br/><span>À EXECUÇÃO.</span></h2></div><p>Do primeiro alinhamento à rotina de acompanhamento: uma jornada para organizar prioridades, implantar a estrutura e dar visibilidade à operação.</p></div>
  <ol className="journey-grid">{steps.map(({title,icon:Icon,summary,description,points,note},i) => <li className="journey-card" key={title}><div className="journey-card-top"><Icon size={29} strokeWidth={1.5}/><span>{String(i+1).padStart(2,'0')}</span></div><h3>{title}</h3><strong>{summary}</strong><p>{description}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><p className="journey-note">{note}</p></li>)}</ol>
  <div className="journey-alignment"><div><p className="eyebrow">REUNIÕES DE ALINHAMENTO</p><h3>A mesma direção.<br/>Os próximos passos definidos.</h3></div><p>Maike e Ana Paula revisam objetivos, prioridades e responsabilidades. Cada reunião orienta as decisões e o que precisa avançar na operação.</p></div>
  <MediaGallery section="jornada"/>
  <div className="journey-closing"><p>Você cuida do seu negócio.<br/><strong>Nós ajudamos a construir o crescimento.</strong></p><Link to="/construcel/contratacao/maratona" className="primary-button">Revisar contratação <ArrowRight size={18}/></Link></div>
 </section>;
}
