import { Brain, Heart, Layers3, ArrowDown, ArrowUpRight, Workflow } from 'lucide-react';
import type { ReactNode } from 'react';

export function SectionLink({ id, children, className, onNavigate }: { id: string; children: ReactNode; className?: string; onNavigate?: () => void }) {
  return <a href={`#${id}`} className={className} onClick={event => {
    // Preserve the GitHub Pages hash route while navigating within this page.
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    onNavigate?.();
  }}>{children}</a>;
}

export function AboutSection() {
  return <section id="quem-sou" className="about-section">
    <div className="section-number">02 / 10 · QUEM SOU EU?</div>
    <div className="about-grid">
      <figure className="about-portrait"><img src={`${import.meta.env.BASE_URL}media/construcel/maike-christian-arri.png`} alt="Maike Christian com uma câmera ARRI" width="1442" height="1091" loading="lazy" decoding="async"/><figcaption>MAIKE CHRISTIAN · DIREÇÃO CRIATIVA</figcaption></figure>
      <div className="about-copy"><p className="eyebrow">PRAZER, EU SOU</p><h2>MAIKE<br/>CHRISTIAN<span>.</span></h2><p className="about-alias">Mas pode me chamar de Abuh.</p><p>Sou publicitário, diretor criativo e estrategista de marketing. Minha trajetória reúne criatividade, comunicação, tecnologia e negócios.</p><p>Meu trabalho vai além da estética: desenvolvo estratégias para posicionar marcas, conquistar audiências e gerar oportunidades comerciais.</p><p>Foi dessa visão que nasceu a ABUHSCA — Agência Criativa. Uma empresa que integra estratégia, publicidade, inteligência artificial, produção audiovisual e performance.</p><blockquote>Eu não vendo apenas marketing.<br/><strong>Eu construo estratégias para negócios crescerem.</strong></blockquote><SectionLink id="metodologia" className="about-method-link">Conheça a nossa metodologia <ArrowDown size={17}/></SectionLink></div>
    </div>
  </section>;
}

const pillars = [
  { id: 'cerebro', number: '01', title: 'Cérebro', subtitle: 'Pensar com direção.', description: 'Estratégia, marketing e tecnologia para definir o posicionamento, atrair atenção e criar oportunidades.', icon: Brain },
  { id: 'coracao', number: '02', title: 'Coração', subtitle: 'Conectar para vender.', description: 'Atendimento, relacionamento e gestão comercial para acompanhar cada oportunidade ao longo da jornada.', icon: Heart },
  { id: 'membros', number: '03', title: 'Membros', subtitle: 'Executar com consistência.', description: 'Processos, produtividade e colaboração para transformar o planejamento em uma rotina de execução.', icon: Layers3 },
];
export function MethodologySection() {
  return <section id="metodologia" className="methodology-section">
    <div className="section-number">03 / 10 · NOSSA METODOLOGIA</div>
    <div className="methodology-heading"><div><p className="eyebrow">UMA OPERAÇÃO. TRÊS PILARES.</p><h2>ESTRATÉGIA QUE PENSA.<br/>OPERAÇÃO QUE SENTE.<br/><span>ESTRUTURA QUE EXECUTA.</span></h2></div><p>Um negócio cresce quando suas partes trabalham juntas. Nossa metodologia conecta inteligência estratégica, operação comercial e execução em uma mesma direção.</p></div>
    <div className="pillar-grid">{pillars.map(({ id, number, title, subtitle, description, icon: Icon }) => <SectionLink id={id} key={id} className="pillar-card"><div className="pillar-top"><Icon size={32} strokeWidth={1.4}/><span>{number}</span></div><h3>{title}<span>.</span></h3><strong>{subtitle}</strong><p>{description}</p><span className="pillar-cta">Explorar o pilar <ArrowUpRight size={18}/></span></SectionLink>)}</div>
    <div className="methodology-connection"><Workflow size={26}/><div><strong>Integrações: o sistema nervoso da operação.</strong><p>Os fluxos conectam ferramentas, informações e pessoas — com implantação progressiva, conforme o escopo contratado.</p></div><SectionLink id="integracoes" className="methodology-integrations">Ver conexões <ArrowUpRight size={18}/></SectionLink></div>
  </section>;
}
