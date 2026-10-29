import { useState } from "react"
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Cpu, Heart, Menu, Moon, ShieldCheck, Shirt, Sparkles, Sun, Zap } from "lucide-react"
import { ThemeProvider, useTheme } from "./context/ThemeContext"
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./components/Icons"
import { profileData } from "./data/links"

const interests = [
  { id: "tech", label: "Tech & gadgets", icon: Cpu, eyebrow: "TECNOLOGIA ÚTIL", title: "Tech sem pagar mais só pelo hype.", copy: "Gadgets, acessórios e produtos que resolvem problemas reais. Compare vendedor, frete e garantia antes de fechar.", tags: ["Gadgets", "Acessórios", "Casa inteligente"], whatsappUrl: "https://chat.whatsapp.com/GEI5ZeFK1YyEtMhnGmQL01" },
  { id: "mens", label: "Moda masculina", icon: Shirt, eyebrow: "MODA MASCULINA", title: "Estilo masculino com compra inteligente.", copy: "Roupas, calçados e acessórios masculinos selecionados com atenção a preço, qualidade e procedência.", tags: ["Roupas", "Calçados", "Acessórios"], whatsappUrl: "https://chat.whatsapp.com/Leu1hPNqzhL6FfIdIaoFBs" },
  { id: "womens", label: "Moda feminina", icon: Heart, eyebrow: "MODA FEMININA", title: "Moda feminina com qualidade e economia.", copy: "Oportunidades em roupas, calçados e acessórios femininos, filtradas para você comparar e escolher com confiança.", tags: ["Roupas", "Calçados", "Acessórios"], whatsappUrl: "https://chat.whatsapp.com/DUGPpiboUYf8HVBhEYdFSy" },
  { id: "fitness", label: "Fitness & bem-estar", icon: Zap, eyebrow: "ROTINA EM MOVIMENTO", title: "Mais rotina. Menos compra no impulso.", copy: "Equipamentos, acessórios e itens de bem-estar. Em suplementos, confira fabricante, rótulo e procedência.", tags: ["Treino", "Bem-estar", "Suplementos"], whatsappUrl: "https://chat.whatsapp.com/DUUexM31KIcGHMs87F2ibs" },
]

const faqs = [
  { q: "O que é o Apex Offers Club?", a: "Uma comunidade para descobrir ofertas, achadinhos e produtos de diferentes categorias, com foco em ajudar você a comprar com mais informação." },
  { q: "Preciso comprar alguma coisa para entrar?", a: "Não. Você pode entrar no grupo para acompanhar as oportunidades e decidir por conta própria se alguma faz sentido para você." },
  { q: "Os preços e estoques ficam iguais?", a: "Não necessariamente. Preço, disponibilidade, frete e condições podem mudar na loja. Confira os detalhes antes de finalizar a compra." },
]

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
}

function MainContent() {
  const [activeInterest, setActiveInterest] = useState(interests[0])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const ActiveInterestIcon = activeInterest.icon

  return <div className="apex-site" data-active-interest={activeInterest.id}>
    <div className="announcement"><span className="announcement-dot" /> CURADORIA DE OFERTAS · COMPRA COM MAIS INTENÇÃO <span className="announce-divider">/</span> <span className="announce-code">APX—001</span></div>
    <header className="topbar">
      <a href="#inicio" className="brand" aria-label="Apex Offers Club, início"><span className="brand-icon">A<span>×</span></span><span className="brand-name">APEX <b>OFFERS CLUB</b></span></a>
      <nav className="topnav" aria-label="Navegação principal"><a href="#radar">Seu radar</a><a href="#manifesto">O método</a><a href="#faq">FAQ</a><ThemeToggle /><div className="social-nav" aria-label="Redes sociais"><a className="social-link" href={profileData.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da APEX" title="Instagram"><InstagramIcon className="social-icon" /></a><a className="social-link" href={profileData.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok da APEX" title="TikTok"><TikTokIcon className="social-icon" /></a></div><a className="nav-cta" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer">Entrar em {activeInterest.label} <ArrowRight size={14} /></a></nav>
      <a className="mobile-menu" href="#radar" aria-label="Ir para categorias"><Menu size={20} /></a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="hero-status"><span className="status-pulse" /> RADAR APEX <span className="status-slash">/</span> CURADORIA EM COMUNIDADE</div>
          <h1>Oportunidade<br />boa não faz<br /><em>barulho.</em></h1>
          <p className="hero-lede">A gente filtra o excesso para você encontrar o que vale olhar. Ofertas, achadinhos e informação para comprar com mais cabeça.</p>
          <div className="hero-buttons"><a className="button-primary" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="w-5 h-5" /> Entrar em {activeInterest.label} <ArrowRight size={17} /></a><a className="button-ghost" href="#radar">Explorar categorias <ArrowDownRight size={17} /></a></div>
          <div className="hero-footnote"><ShieldCheck size={15} /><span>Você escolhe. A decisão é sempre sua.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          <div className="mascot-light" /><img className="product-showcase" src="/product-showcase-v1.png" alt="Composição de produtos: console PlayStation 5, smartphone iPhone e tênis Nike" />
          <div className="mascot-caption"><span className="caption-line" /><span>TECH. ESTILO.<br /><b>BEM-ESTAR.</b></span></div>
          <div className="visual-chip chip-top"><span className="chip-icon"><Sparkles size={14} /></span><span><small>APEX CURATION</small><b>Produtos que despertam desejo.</b></span></div>
          <div className="visual-chip chip-bottom"><span className="chip-live" /> TECH · ESTILO · MOVIMENTO</div>
          <span className="visual-coordinate">23°33' S&nbsp; 46°38' W</span>
        </div>
        <div className="hero-index">01 <span>/ 03</span></div>
      </section>

      <section className="source-strip" aria-label="Fontes de pesquisa de ofertas"><span className="source-label">ONDE A GENTE GARIMPA</span><span>mercado livre</span><i /><span className="shopee-word">Shopee</span><i /><span className="amazon-word">amazon</span><i /><span>lojas selecionadas</span><span className="source-note">Fontes de pesquisa — ofertas podem variar.</span></section>

      <section className="radar-section" id="radar" data-active-interest={activeInterest.id}>
        <div className="section-topline"><span className="eyebrow"><span className="eyebrow-mark">02</span> PERSONALIZE SEU RADAR</span><span className="section-line" /><span className="micro-label">INTERESSE ATUAL <b>{activeInterest.id.toUpperCase()}</b></span></div>
        <div className="radar-heading"><div><h2>Qual é a sua <em>vibe?</em></h2><p>Escolhe uma área. A página muda o foco — e você segue para a comunidade.</p></div><span className="radar-decoration">A<span>•</span></span></div>
        <div className="interest-tabs" role="tablist" aria-label="Escolha uma categoria de interesse">
          {interests.map(({ id, label, icon: Icon }) => <button key={id} type="button" role="tab" aria-selected={activeInterest.id === id} className={`interest-tab ${activeInterest.id === id ? "active" : ""}`} onClick={() => setActiveInterest(interests.find((item) => item.id === id)!)}><Icon size={17} /><span>{label}</span><ArrowRight className="tab-arrow" size={15} /></button>)}
        </div>
        <article className="interest-panel" role="tabpanel" key={activeInterest.id}>
          <div className="panel-index">RADAR / {activeInterest.id.toUpperCase()}<span>● ATIVO</span></div>
          <div className="panel-content"><div className="panel-copy"><span className="panel-eyebrow">{activeInterest.eyebrow}</span><h3>{activeInterest.title}</h3><p>{activeInterest.copy}</p><div className="tag-list">{activeInterest.tags.map((tag) => <span className="interest-tag" key={tag}>{tag}</span>)}</div></div><div className="panel-art"><div className="panel-orbit"/><div className="panel-glyph"><ActiveInterestIcon size={52} strokeWidth={1.2} /></div><span className="panel-coordinate">AOC / {activeInterest.id.slice(0,3).toUpperCase()}</span><span className="panel-scan"/></div></div>
          <div className="panel-bottom"><span><Check size={14} /> Você escolhe o que faz sentido</span><a className="group-join" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="group-join-icon" /><span>Entrar no grupo</span><b>{activeInterest.label}</b><ArrowRight className="group-join-arrow" size={15} /></a></div>
        </article>
        <p className="group-note"><span>i</span> Escolha uma categoria para entrar no grupo de WhatsApp correspondente.</p>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-mark">APEX<br /><span>METHOD_01</span></div>
        <div className="manifesto-copy"><span className="eyebrow"><span className="eyebrow-mark">03</span> O MÉTODO APEX</span><h2>Não é sobre comprar<br />mais. É sobre <em>escolher melhor.</em></h2><p>Oferta boa é aquela que combina com você, tem informação suficiente e faz sentido no seu bolso. O clube existe para encurtar o caminho entre descobrir e decidir.</p></div>
        <div className="method-list"><div><span>01</span><p><b>Descobrir</b><small>Achadinhos de diferentes categorias.</small></p><Check size={15} /></div><div><span>02</span><p><b>Conferir</b><small>Veja preço, vendedor e condições na loja.</small></p><Check size={15} /></div><div><span>03</span><p><b>Decidir</b><small>Compre só se fizer sentido para você.</small></p><Check size={15} /></div></div>
      </section>

      <section className="faq-section" id="faq"><div className="faq-title"><span className="eyebrow"><span className="eyebrow-mark">04</span> SEM MISTÉRIO</span><h2>Ficou com<br /><em>dúvida?</em></h2><p>O básico, direto ao ponto.</p></div><div className="faq-list">{faqs.map(({ q, a }, index) => <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={q}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="faq-number">0{index+1}</span><b>{q}</b><ChevronDown size={18} /></button>{openFaq === index && <p>{a}</p>}</article>)}</div></section>

      <section className="final-cta"><div className="cta-grid"/><span className="cta-overline">A COMUNIDADE APEX ESTÁ A UM CLIQUE</span><h2>Menos caça.<br /><em>Mais achado.</em></h2><p>Entre no grupo e acompanhe as próximas oportunidades.</p><a href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer" className="button-light"><WhatsAppIcon className="w-5 h-5" /> Entrar em {activeInterest.label} <ArrowRight size={17} /></a><span className="cta-foot">Preço, estoque e condições podem mudar na loja.</span></section>
    </main>

    <footer className="footer"><a className="footer-brand" href="#inicio"><span className="brand-icon">A<span>×</span></span> APEX OFFERS CLUB</a><p>Comprar com intenção muda o jogo.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} APEX OFFERS CLUB</span><a href={profileData.socials.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="w-4 h-4" /> Instagram</a><a href={profileData.socials.tiktok} target="_blank" rel="noreferrer"><TikTokIcon className="w-4 h-4" /> TikTok</a><span className="footer-slogan">NO TOPO COM FACILIDADE.</span></div></footer>
    <a className="mobile-sticky-cta group-join" href={activeInterest.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="w-5 h-5" /> <span>Entrar no grupo</span><b>{activeInterest.label}</b><ArrowRight className="group-join-arrow" size={16}/></a>
  </div>
}

export default function App() { return <ThemeProvider><MainContent /></ThemeProvider> }
