import { useState } from "react"
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Cpu, Heart, Menu, ShieldCheck, Shirt, Sparkles, Zap } from "lucide-react"
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./components/Icons"
import { profileData } from "./data/links"

const interests = [
  { id: "tech", label: "Tech & gadgets", icon: Cpu, eyebrow: "CURADORIA DE TECNOLOGIA", title: "Tecnologia com preço e procedência verificados.", copy: "A nossa equipe já separou as melhores oportunidades para você. Reunimos produtos de lojas oficiais, com histórico de preços verificado e cupons testados para uma compra segura.", tags: ["Gadgets", "Acessórios", "Casa inteligente"], image: "/product-showcase-v1.png", imageAlt: "Composição de produtos: console PlayStation 5, smartphone iPhone e tênis Nike", whatsappUrl: "https://chat.whatsapp.com/GEI5ZeFK1YyEtMhnGmQL01" },
  { id: "mens", label: "Moda masculina", icon: Shirt, eyebrow: "MODA MASCULINA", title: "Estilo masculino com compra inteligente.", copy: "Roupas, calçados e acessórios masculinos selecionados com atenção a preço, qualidade e procedência.", tags: ["Roupas", "Calçados", "Acessórios"], image: "/product-showcase-mens-v1.png", imageAlt: "Composição de moda masculina com tênis, roupas, relógio e bolsa transversal", whatsappUrl: "https://chat.whatsapp.com/Leu1hPNqzhL6FfIdIaoFBs" },
  { id: "womens", label: "Moda feminina", icon: Heart, eyebrow: "MODA FEMININA", title: "Moda feminina com qualidade e economia.", copy: "Oportunidades em roupas, calçados e acessórios femininos, filtradas para você comparar e escolher com confiança.", tags: ["Roupas", "Calçados", "Acessórios"], image: "/product-showcase-womens-v1.png", imageAlt: "Composição de moda feminina com bolsa, roupas, tênis e óculos de sol", whatsappUrl: "https://chat.whatsapp.com/DUGPpiboUYf8HVBhEYdFSy" },
  { id: "fitness", label: "Saúde & fitness", icon: Zap, eyebrow: "SAÚDE & FITNESS", title: "Bem-estar com qualidade e procedência.", copy: "Monitoramos acessórios, equipamentos e suplementos de marcas oficiais. Confira fabricante, rótulo e procedência antes de comprar.", tags: ["Treino", "Bem-estar", "Suplementos"], image: "/product-showcase-fitness-v1.png", imageAlt: "Composição fitness com tênis de corrida, halteres, garrafa, relógio esportivo e tapete de yoga", whatsappUrl: "https://chat.whatsapp.com/DUUexM31KIcGHMs87F2ibs" },
]

const faqs = [
  { q: "O que é o Radar Apex?", a: "Um centro de inteligência que monitora lojas oficiais 24/7. Filtramos o ruído e entregamos falhas de preço e cupons validados para você comprar com mais informação." },
  { q: "Preciso comprar alguma coisa para entrar?", a: "Não. O acesso ao Radar Apex é 100% gratuito. Sua única tarefa é aproveitar as oportunidades que fizerem sentido para você enquanto estiverem disponíveis." },
  { q: "Os preços e estoques ficam iguais?", a: "Não. Preços e estoques podem mudar rapidamente, e algumas ofertas expiram em minutos. Ative as notificações do grupo para acompanhar os alertas assim que forem publicados." },
]

function MainContent() {
  const [activeInterest, setActiveInterest] = useState(interests[0])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const ActiveInterestIcon = activeInterest.icon

  return <div className="apex-site" data-active-interest={activeInterest.id}>
    <div className="announcement"><span className="announcement-dot" /> MONITORAMENTO 24/7 · LOJAS OFICIAIS · COMPRA COM INTELIGÊNCIA <span className="announce-divider">/</span> <span className="announce-code">APX—001</span></div>
    <header className="topbar">
      <a href="#inicio" className="brand" aria-label="APEX Clube de Ofertas, início"><img className="brand-logo" src="/apex-wordmark-dark.png" alt="" aria-hidden="true" /></a>
      <nav className="topnav" aria-label="Navegação principal"><a href="#radar">Seu radar</a><a href="#manifesto">O método</a><a href="#faq">FAQ</a><div className="social-nav" aria-label="Redes sociais"><a className="social-link" href={profileData.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da APEX" title="Instagram"><InstagramIcon className="social-icon" /><span>Instagram</span></a><a className="social-link" href={profileData.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok da APEX" title="TikTok"><TikTokIcon className="social-icon" /><span>TikTok</span></a></div><a className="nav-cta" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer">Acessar {activeInterest.label} <ArrowRight size={14} /></a></nav>
      <a className="mobile-menu" href="#radar" aria-label="Ir para categorias"><Menu size={20} /></a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="hero-status"><span className="status-pulse" /> RADAR APEX <span className="status-slash">/</span> MONITORAMENTO 24/7</div>
          <h1>Pagar caro<br />é <em>opcional.</em></h1>
          <p className="hero-claim">Pare de perder dinheiro nas suas compras.</p>
          <p className="hero-lede">Enquanto a maioria paga caro, nossa equipe monitora lojas oficiais 24h por dia atrás de falhas de preço e cupons ocultos para você comprar com inteligência.</p>
          <div className="hero-buttons"><a className="button-primary" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="w-5 h-5" /> Acessar {activeInterest.label} <ArrowRight size={17} /></a><a className="button-ghost" href="#radar">Explorar departamentos <ArrowDownRight size={17} /></a></div>
          <div className="hero-footnote"><ShieldCheck size={15} /><span>Os melhores cupons e falhas de preço de hoje já estão rolando no grupo VIP. Vai ficar de fora?</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          <div className="visual-glow" /><img key={activeInterest.id} className="product-showcase" src={activeInterest.image} alt={activeInterest.imageAlt} />
          <div className="visual-chip chip-top"><span className="chip-icon"><Sparkles size={14} /></span><span><small>RADAR APEX</small><b>Monitoramento 24 horas.</b></span></div>
          <div className="visual-chip chip-bottom"><span className="chip-live" /> CUPONS TESTADOS · PREÇO VERIFICADO</div>
        </div>
        <div className="hero-index">01 <span>/ 03</span></div>
      </section>

      <section className="source-strip" aria-label="Lojas monitoradas"><span className="source-label">MONITORAMENTO 24/7 NAS MAIORES LOJAS</span><span className="marketplace-word">Mercado Livre</span><i /><span className="marketplace-word">Shopee</span><i /><span className="marketplace-word">amazon</span><i /><span className="marketplace-word">Lojas oficiais</span><span className="source-note">Disponibilidade, preços e condições podem mudar.</span></section>

      <section className="radar-section" id="radar" data-active-interest={activeInterest.id}>
        <div className="section-topline"><span className="eyebrow"><span className="eyebrow-mark">02</span> PERSONALIZE SEU RADAR</span><span className="section-line" /><span className="micro-label">INTERESSE ATUAL <b>{activeInterest.id.toUpperCase()}</b></span></div>
        <div className="radar-heading"><div><h2>Onde está o seu foco <em>hoje?</em></h2><p>Escolha um departamento e a gente leva você direto para o grupo VIP.</p></div><span className="radar-decoration">A<span>•</span></span></div>
        <div className="interest-tabs" role="tablist" aria-label="Escolha uma categoria de interesse">
          {interests.map(({ id, label, icon: Icon }) => <button key={id} type="button" role="tab" aria-selected={activeInterest.id === id} className={`interest-tab ${activeInterest.id === id ? "active" : ""}`} onClick={() => setActiveInterest(interests.find((item) => item.id === id)!)}><Icon size={17} /><span>{label}</span><ArrowRight className="tab-arrow" size={15} /></button>)}
        </div>
        <article className="interest-panel" role="tabpanel" key={activeInterest.id}>
          <div className="panel-index">RADAR / {activeInterest.id.toUpperCase()}<span>● ATIVO</span></div>
          <div className="panel-content"><div className="panel-copy"><span className="panel-eyebrow">{activeInterest.eyebrow}</span><h3>{activeInterest.title}</h3><p>{activeInterest.copy}</p><div className="tag-list">{activeInterest.tags.map((tag) => <span className="interest-tag" key={tag}>{tag}</span>)}</div></div><div className="panel-art"><div className="panel-orbit"/><div className="panel-glyph"><ActiveInterestIcon size={52} strokeWidth={1.2} /></div><span className="panel-coordinate">AOC / {activeInterest.id.slice(0,3).toUpperCase()}</span><span className="panel-scan"/></div></div>
          <div className="panel-bottom"><span><Check size={14} /> Você escolhe o que faz sentido</span><a className="group-join" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="group-join-icon" /><span>Entrar no grupo</span><b>{activeInterest.label}</b><ArrowRight className="group-join-arrow" size={15} /></a></div>
        </article>
        <p className="group-note"><span>i</span> Cada departamento tem seu próprio grupo no WhatsApp; escolha uma categoria para entrar na comunidade correspondente.</p>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-mark">APEX<br /><span>METHOD_01</span></div>
        <div className="manifesto-copy"><span className="eyebrow"><span className="eyebrow-mark">03</span> O MÉTODO APEX</span><h2>Não é sobre comprar<br />mais. É sobre comprar<br /><em>com inteligência.</em></h2><p>Monitoramos lojas oficiais, conferimos histórico de preços, reputação dos vendedores e cupons. Você recebe oportunidades verificadas para decidir com segurança e economizar tempo.</p></div>
        <div className="method-list"><div><span>01</span><p><b>Rastreamento ativo</b><small>Monitoramos lojas oficiais dia e noite atrás de falhas de preço e descontos reais.</small></p><Check size={15} /></div><div><span>02</span><p><b>Curadoria rigorosa</b><small>Validamos o histórico de preços, a reputação do vendedor e testamos os cupons.</small></p><Check size={15} /></div><div><span>03</span><p><b>Alerta imediato</b><small>Você recebe a oportunidade verificada no celular para aproveitar enquanto estiver disponível.</small></p><Check size={15} /></div></div>
      </section>

      <section className="faq-section" id="faq"><div className="faq-title"><span className="eyebrow"><span className="eyebrow-mark">04</span> TRANSPARÊNCIA APEX</span><h2>O que você<br /><em>precisa saber.</em></h2><p>A transparência que o mercado não te dá.</p></div><div className="faq-list">{faqs.map(({ q, a }, index) => <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={q}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="faq-number">0{index+1}</span><b>{q}</b><ChevronDown size={18} /></button>{openFaq === index && <p>{a}</p>}</article>)}</div></section>

      <section className="final-cta"><div className="cta-grid"/><span className="cta-overline">A COMUNIDADE APEX ESTÁ A UM CLIQUE</span><h2>O trabalho pesado é nosso.<br /><em>A economia é sua.</em></h2><p>As melhores falhas de preço e cupons ativos de hoje já estão no grupo VIP. Vai ficar de fora?</p><a href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer" className="button-light"><WhatsAppIcon className="w-5 h-5" /> Entrar em {activeInterest.label} <ArrowRight size={17} /></a><span className="cta-foot">Preços, estoque e condições podem mudar na loja.</span></section>
    </main>

    <footer className="footer"><a className="footer-brand" href="#inicio" aria-label="APEX Clube de Ofertas, início"><img className="brand-logo" src="/apex-wordmark-dark.png" alt="" aria-hidden="true" /></a><p>O preço cheio é sempre opcional para quem tem a informação certa.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} APEX CLUBE DE OFERTAS</span><a href={profileData.socials.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="w-[15px] h-[15px]" /> Instagram</a><span className="footer-slogan">NO TOPO COM FACILIDADE.</span></div></footer>
    <a className="mobile-sticky-cta group-join" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="w-5 h-5" /> <span>Entrar no grupo</span><b>{activeInterest.label}</b><ArrowRight className="group-join-arrow" size={16}/></a>
  </div>
}

export default function App() { return <MainContent /> }
