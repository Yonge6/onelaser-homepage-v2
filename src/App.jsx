import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CaretDown,
  CaretRight,
  CheckCircle,
  EnvelopeSimple,
  FacebookLogo,
  GraduationCap,
  Headset,
  InstagramLogo,
  List,
  MagnifyingGlass,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Target,
  TiktokLogo,
  User,
  UserCircle,
  UsersThree,
  X,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const announcementItems = [
  ["Subscribe & Get $50 OFF Your First Purchase!", "https://www.1laser.com/pages/onelaser-rewards"],
  ["$0 Down Financing for Small Businesses", "https://www.1laser.com/pages/financing"],
  ["30-Day Easy Returns", "https://www.1laser.com/pages/refund-policy"],
];

const machineLinks = {
  xrf: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
  cobra: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter",
  hydra: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine",
  vertigo: "https://www.1laser.com/products/vertigo-vertical-laser-engraver",
};

const machines = {
  xrf: {
    name: "XRF™",
    image: "home-product-xrf.png",
    eyebrow: "Precision desktop RF laser",
    copy: "Detailed flat engraving and repeatable personalization in a compact production footprint.",
    proof: ["38W RF power", "1,200 mm/s", "Conveyor-ready"],
    href: machineLinks.xrf,
  },
  cobra: {
    name: "Cobra™ Series",
    image: "home-product-cobra.png",
    eyebrow: "Workshop cutting and engraving",
    copy: "A versatile CO₂ platform for wood, acrylic, signage, and mixed-material production.",
    proof: ["Up to 130W glass", "300+ materials", "1,200 mm/s"],
    href: machineLinks.cobra,
  },
  hydra: {
    name: "Hydra™ Gen2",
    image: "home-product-hydra-gen2.png",
    eyebrow: "Industrial production system",
    copy: "High-throughput RF production for larger formats, demanding batches, and repeat orders.",
    proof: ["Up to 2,000 mm/s", "4G acceleration", "Dual-laser workflow"],
    href: machineLinks.hydra,
  },
  vertigo: {
    name: "VertiGo™",
    image: "home-product-vertigo.png",
    eyebrow: "Purpose-built rotary laser",
    copy: "A vertical workflow for tumblers, bottles, glassware, and other cylindrical goods.",
    proof: ["Cylindrical engraving", "38W RF power", "Integrated PiBurn Grip"],
    href: machineLinks.vertigo,
  },
};

const machineMenuSeries = {
  x: {
    label: "X Series",
    products: [
      {
        name: "XRF™",
        copy: "Performance Desktop Laser Engraver (38W RF)",
        href: machineLinks.xrf,
        image: "https://www.1laser.com/cdn/shop/files/XRF_360cdcd1-c129-44be-a750-7da43a587a00.png?v=1782463970&width=400",
      },
    ],
  },
  cobra: {
    label: "Cobra Series",
    products: [
      { name: "Cobra™ 8", copy: "Workshop Essential Laser Engraver/Cutter (90W Glass)", href: "https://www.1laser.com/products/cobra-8-90w-co2-laser-engraver-cutter", image: "https://www.1laser.com/cdn/shop/files/Cobra_8.png?v=1782460144&width=400" },
      { name: "Cobra™ 10", copy: "Workshop Essential Laser Engraver/Cutter (100W Glass)", href: machineLinks.cobra, image: "https://www.1laser.com/cdn/shop/files/Cobra_10.png?v=1782460375&width=400" },
      { name: "Cobra™ 14", copy: "Workshop Essential Laser Engraver/Cutter (130W Glass)", href: "https://www.1laser.com/products/cobra-14-130w-co2-laser-engraver-cutter", image: "https://www.1laser.com/cdn/shop/files/Cobra_14.png?v=1782460438&width=400" },
    ],
  },
  hydra: {
    label: "Hydra Series",
    products: [
      { name: "Hydra™ 7 Gen2", copy: "Industrial RF Laser Engraver (70W RF)", href: "https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_7Gen2.png?v=1782813665&width=400" },
      { name: "Hydra™ 9 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: machineLinks.hydra, image: "https://www.1laser.com/cdn/shop/files/Hydra_9Gen2.png?v=1782813672&width=400" },
      { name: "Hydra™ 13 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: "https://www.1laser.com/products/hydra-13-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_13Gen2.png?v=1782813672&width=400" },
      { name: "Hydra™ 16 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: "https://www.1laser.com/products/hydra-16-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_16Gen2.png?v=1782813672&width=400" },
    ],
  },
  vertigo: {
    label: "VertiGo",
    products: [
      {
        name: "VertiGo™",
        copy: "Performance Rotary Laser for Drinkware (38W RF)",
        href: machineLinks.vertigo,
        image: "https://www.1laser.com/cdn/shop/files/VertiGo_3c806291-bd5f-4153-9ca8-d54e3fd1cd0b.png?v=1782698357&width=400",
      },
    ],
  },
};

const supportMenu = {
  featured: [
    { label: "Get a Quote", href: "https://www.1laser.com/products/sales-consultation-call", image: "https://www.1laser.com/cdn/shop/files/Consultation_Call_Session_f357d165-c36d-445e-8589-cd76cb193639.png?v=1764916744&width=600" },
    { label: "1-on-1 Support", href: "https://www.1laser.com/products/engineer-1-on-1-training-support", image: "https://www.1laser.com/cdn/shop/files/1-on-1_training.png?v=1764920272&width=600" },
  ],
  links: [
    ["Submit a Ticket", "https://zohodesk.1laser.com/portal/en/newticket"],
    ["Financing", "https://www.1laser.com/pages/financing"],
    ["Policy", "https://www.1laser.com/policies/shipping-policy"],
    ["Blogs", "https://www.1laser.com/blogs/topic"],
    ["Product Knowledge Base", "https://wiki.1laser.com/"],
  ],
};

const communityMenu = {
  featured: [
    { label: "Become Affiliate", href: "https://www.1laser.com/pages/laser-engraving-community", image: "https://www.1laser.com/cdn/shop/files/3_154dd9e8-536b-43e4-9e64-5e1532331fdd.png?v=1782712883&width=600" },
    { label: "Purchase Rewards", href: "https://www.1laser.com/pages/onelaser-rewards", image: "https://www.1laser.com/cdn/shop/files/OneLaser_Forum_4979b167-4ed1-476c-a24f-bd1b496f235a.png?v=1782714101&width=600" },
  ],
  links: [
    ["Join Community", "https://www.1laser.com/pages/laser-engraving-community"],
    ["Testimonials", "https://www.1laser.com/pages/testimonials"],
    ["Demo Room", "https://www.1laser.com/pages/demoroom"],
  ],
};

const menuContent = {
  machines: {
    title: "Choose your production platform",
    links: [
      ["XRF", "Desktop RF precision", machineLinks.xrf, "home-product-xrf.png"],
      ["Cobra Series", "Workshop versatility", machineLinks.cobra, "home-product-cobra.png"],
      ["Hydra Gen2", "Industrial throughput", machineLinks.hydra, "home-product-hydra-gen2.png"],
      ["VertiGo", "Rotary production", machineLinks.vertigo, "home-product-vertigo.png"],
    ],
  },
  support: {
    title: "Support that moves work forward",
    links: [
      ["Submit a Ticket", "Get technical help", "https://zohodesk.1laser.com/portal/en/newticket"],
      ["Get a Quote", "Plan your machine", "https://www.1laser.com/products/sales-consultation-call"],
      ["1-on-1 Training", "Learn with an engineer", "https://www.1laser.com/products/engineer-1-on-1-training-support"],
      ["Policy", "Shipping and service terms", "https://www.1laser.com/policies/shipping-policy"],
      ["Financing", "Explore financing", "https://www.1laser.com/pages/financing"],
      ["Blogs", "Ideas and education", "https://www.1laser.com/blogs/topic"],
      ["Product Knowledge Base", "Technical documentation", "https://wiki.1laser.com/"],
    ],
  },
  community: {
    title: "Grow with the OneLaser community",
    links: [
      ["Purchase Rewards", "Earn as you create", "https://www.1laser.com/pages/onelaser-rewards"],
      ["Become Affiliate", "Share OneLaser", "https://www.1laser.com/pages/laser-engraving-community"],
      ["Join Community", "Meet other makers", "https://www.1laser.com/pages/laser-engraving-community"],
      ["Testimonials", "Hear from owners", "https://www.1laser.com/pages/testimonials"],
      ["Demo Room", "See a machine in person", "https://www.1laser.com/pages/demoroom"],
    ],
  },
};

const audiencePaths = [
  {
    id: "maker",
    title: "Maker",
    copy: "Bring your ideas to life with reliable, easy-to-use tools.",
    icon: User,
  },
  {
    id: "business",
    title: "Business",
    copy: "Scale output and streamline production with confidence.",
    icon: Briefcase,
  },
  {
    id: "education",
    title: "Education",
    copy: "Empower learning with safe, classroom-ready technology.",
    icon: GraduationCap,
  },
];

const projectCards = [
  {
    title: "Personalized Serving Board",
    material: "Wood",
    outcome: "Premium gifting and local retail",
    machine: "XRF",
    machineId: "xrf",
    image: "product-walnut-serving-board.webp",
  },
  {
    title: "Retail Acrylic Sign",
    material: "Acrylic",
    outcome: "Signage and event production",
    machine: "Cobra Series",
    machineId: "cobra",
    image: "home-project-large-acrylic-sign.webp",
  },
  {
    title: "Batch Leather Gifts",
    material: "Leather",
    outcome: "Repeatable corporate orders",
    machine: "Hydra Gen2",
    machineId: "hydra",
    image: "home-project-batch-leather-gifts.webp",
  },
  {
    title: "Corporate Tumbler Batch",
    material: "Coated drinkware",
    outcome: "Rotary batch personalization",
    machine: "VertiGo",
    machineId: "vertigo",
    image: "home-project-vertigo-corporate-tumbler-batch.webp",
  },
];

const productionSteps = [
  ["01", "Define the work", "Start with the material, object format, and output you need."],
  ["02", "Match the platform", "Use the finder to narrow four machines to the right starting point."],
  ["03", "Prove the workflow", "Connect the machine to a real project type and production goal."],
  ["04", "Build repeatable output", "Move from first setup to a workflow your team can run again."],
];

const trustChains = [
  {
    number: "01",
    title: "Performance you can use",
    body: "RF precision and fast motion support cleaner details, steadier workflows, and more reliable output.",
    icon: Target,
  },
  {
    number: "02",
    title: "Built for the long run",
    body: "Industrial construction and serviceable systems help reduce downtime and protect long-term productivity.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Real people behind the machine",
    body: "U.S.-based training and technical support help teams move from setup to successful production faster.",
    icon: Headset,
  },
];

function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

function ProductName({ name }) {
  const [beforeTrademark, afterTrademark] = name.split("™");
  return <>{beforeTrademark}<sup>™</sup>{afterTrademark}</>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeMachineSeries, setActiveMachineSeries] = useState("x");
  const [audience, setAudience] = useState("maker");
  const [material, setMaterial] = useState("");
  const [volume, setVolume] = useState("");
  const [format, setFormat] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const suppressMegaFocusRef = useRef(false);
  const activeResourceMenu = activeMegaMenu === "support" ? supportMenu : communityMenu;

  useEffect(() => {
    if (!activeMegaMenu) return undefined;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      const trigger = document.querySelector(`[data-mega-trigger="${activeMegaMenu}"]`);
      suppressMegaFocusRef.current = true;
      setActiveMegaMenu(null);
      window.requestAnimationFrame(() => {
        trigger?.focus();
        window.setTimeout(() => { suppressMegaFocusRef.current = false; }, 0);
      });
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeMegaMenu]);

  useEffect(() => {
    document.body.classList.toggle("menu-lock", menuOpen);
    return () => document.body.classList.remove("menu-lock");
  }, [menuOpen]);

  const enterMegaMenu = (menu) => (event) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setActiveMegaMenu(menu);
    window.requestAnimationFrame(() => {
      document.querySelector(`#home-mega-${menu} button, #home-mega-${menu} a`)?.focus();
    });
  };

  const recommendedId = useMemo(() => {
    if (format === "cylindrical") return "vertigo";
    if (volume === "production") return "hydra";
    if (material === "acrylic" || material === "mixed") return "cobra";
    return "xrf";
  }, [format, material, volume]);

  const recommendation = machines[recommendedId];
  const finderReady = material && volume && format;

  const chooseAudience = (id) => {
    setAudience(id);
    if (id === "business") setVolume("production");
    if (id === "maker") setVolume("small-batch");
    if (id === "education") setVolume("shared");
    document.querySelector("#finder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitFinder = (event) => {
    event.preventDefault();
    if (!finderReady) return;
    setSubmitted(true);
    window.setTimeout(() => {
      document.querySelector("#finder-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  };

  return (
    <div className="site-shell">
      {announcementVisible && (
        <div className="home-announcement" aria-label="OneLaser offers and service updates">
          <div className="home-announcement__viewport">
            <div className="home-announcement__track">
              {[false, true].map((duplicate) => (
                <div className="home-announcement__group" aria-hidden={duplicate ? "true" : undefined} key={duplicate ? "duplicate" : "primary"}>
                  {announcementItems.map(([label, href]) => (
                    <ExternalLink href={href} tabIndex={duplicate ? -1 : undefined} key={label}>{label}</ExternalLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="home-announcement__close" type="button" onClick={() => setAnnouncementVisible(false)} aria-label="Close announcements"><X size={15} weight="bold" /></button>
        </div>
      )}

      <header
        className="home-header"
        onMouseLeave={() => setActiveMegaMenu(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setActiveMegaMenu(null);
        }}
      >
        <a className="home-brand" href={import.meta.env.BASE_URL} aria-label="OneLaser home">
          <img src={asset("onelaser-logo-transparent.svg")} alt="OneLaser" />
        </a>
        <button className="home-menu-button" type="button" aria-expanded={menuOpen} aria-controls="home-navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="home-navigation" className={menuOpen ? "home-nav is-open" : "home-nav"} aria-label="Main navigation">
          <div className="home-nav__item">
            <ExternalLink href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines" aria-haspopup="true" aria-controls="home-mega-machines" aria-expanded={activeMegaMenu === "machines"} data-mega-trigger="machines" onMouseEnter={() => setActiveMegaMenu("machines")} onFocus={() => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("machines"); }} onKeyDown={enterMegaMenu("machines")}>Laser Machines <CaretDown size={13} weight="bold" /></ExternalLink>
          </div>
          <ExternalLink href="https://www.1laser.com/collections/laser-accessories" onMouseEnter={() => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Accessories</ExternalLink>
          <ExternalLink href="https://www.1laser.com/collections/limited-offers" onMouseEnter={() => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Clearance</ExternalLink>
          <div className="home-nav__item">
            <ExternalLink href="https://www.1laser.com/pages/sales-consultation" aria-haspopup="true" aria-controls="home-mega-support" aria-expanded={activeMegaMenu === "support"} data-mega-trigger="support" onMouseEnter={() => setActiveMegaMenu("support")} onFocus={() => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("support"); }} onKeyDown={enterMegaMenu("support")}>Support <CaretDown size={13} weight="bold" /></ExternalLink>
          </div>
          <div className="home-nav__item">
            <ExternalLink href="https://www.1laser.com/pages/laser-engraving-community" aria-haspopup="true" aria-controls="home-mega-community" aria-expanded={activeMegaMenu === "community"} data-mega-trigger="community" onMouseEnter={() => setActiveMegaMenu("community")} onFocus={() => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("community"); }} onKeyDown={enterMegaMenu("community")}>Community <CaretDown size={13} weight="bold" /></ExternalLink>
          </div>
          <ExternalLink href="https://www.1laser.com/pages/contact-us" onMouseEnter={() => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Contact</ExternalLink>
        </nav>
        <div className="home-header__actions" aria-label="OneLaser account and shopping">
          <ExternalLink href="https://www.1laser.com/search" aria-label="Search OneLaser"><MagnifyingGlass size={20} /></ExternalLink>
          <ExternalLink href="https://www.1laser.com/cart" aria-label="View cart"><ShoppingBag size={20} /></ExternalLink>
          <ExternalLink href="https://www.1laser.com/account/login" aria-label="Log in"><UserCircle size={21} /></ExternalLink>
        </div>

        {activeMegaMenu === "machines" && (
          <div id="home-mega-machines" className="home-mega home-mega--machines" aria-label="Laser Machines menu">
            <div className="home-mega__inner">
              <aside className="home-mega__series" aria-label="Machine series">
                {Object.entries(machineMenuSeries).map(([id, series]) => (
                  <button key={id} className={activeMachineSeries === id ? "is-active" : ""} type="button" aria-pressed={activeMachineSeries === id} onMouseEnter={() => setActiveMachineSeries(id)} onFocus={() => setActiveMachineSeries(id)} onClick={() => setActiveMachineSeries(id)}>
                    {series.label}<CaretRight size={15} weight="bold" />
                  </button>
                ))}
              </aside>
              <div className="home-mega__products">
                {machineMenuSeries[activeMachineSeries].products.map((product) => (
                  <ExternalLink className="home-mega-product" href={product.href} key={product.name}>
                    <span className={`home-mega-product__media home-mega-product__media--${activeMachineSeries}`}><img src={product.image} alt={product.name} /></span>
                    <div><h3><ProductName name={product.name} /></h3><p>{product.copy}</p></div>
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
        )}

        {(activeMegaMenu === "support" || activeMegaMenu === "community") && (
          <div id={`home-mega-${activeMegaMenu}`} className={`home-mega home-mega--${activeMegaMenu}`} aria-label={`${activeMegaMenu} menu`}>
            <div className="home-mega__inner home-mega__inner--resources">
              {activeResourceMenu.featured.map((item) => (
                <ExternalLink className="home-mega-resource-card" href={item.href} key={item.label}>
                  <img src={item.image} alt="" />
                  <span>{item.label}<CaretRight size={18} weight="bold" /></span>
                </ExternalLink>
              ))}
              <nav className="home-mega-resource-links" aria-label={`${activeMegaMenu} links`}>
                {activeResourceMenu.links.map(([label, href]) => (
                  <ExternalLink href={href} key={label}>{label}<CaretRight size={15} weight="bold" /></ExternalLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {activeMegaMenu && <button className={`home-mega-backdrop${announcementVisible ? " has-announcement" : ""}`} type="button" onClick={() => setActiveMegaMenu(null)} aria-label="Close expanded navigation" />}

      <div className="page-content" id="top">
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero__copy">
              <h1 id="hero-title">Build More.<br />Deliver Faster.</h1>
              <p>OneLaser turns ideas into reliable output—from first project to full production.</p>
              <a className="button button--primary" href="#finder">
                Start the Finder <ArrowRight weight="bold" />
              </a>
            </div>
            <div className="hero__media">
              <img src={asset("home-product-xrf.png")} alt="OneLaser XRF desktop RF laser" />
            </div>
          </section>

          <section className="audience-strip" aria-label="Choose your path">
            <div className="audience-strip__inner">
              {audiencePaths.map(({ id, title, copy, icon: Icon }) => (
                <button
                  className={audience === id ? "audience-path is-active" : "audience-path"}
                  key={id}
                  type="button"
                  aria-pressed={audience === id}
                  onClick={() => chooseAudience(id)}
                >
                  <span className="audience-path__icon"><Icon /></span>
                  <span><strong>{title}</strong><small>{copy}</small></span>
                  <ArrowRight className="audience-path__arrow" />
                </button>
              ))}
            </div>
          </section>

          <section className="finder section" id="finder" aria-labelledby="finder-title">
            <div className="section-heading section-heading--compact">
              <div>
                <h2 id="finder-title">Find Your OneLaser</h2>
              </div>
            </div>
            <form className="finder-form" onSubmit={submitFinder}>
              <label>
                <span>Material</span>
                <select required value={material} onChange={(event) => { setMaterial(event.target.value); setSubmitted(false); }}>
                  <option value="">Select material</option>
                  <option value="wood">Wood, leather, coated metal</option>
                  <option value="acrylic">Acrylic and signage</option>
                  <option value="glass">Glass and drinkware</option>
                  <option value="mixed">Mixed materials</option>
                </select>
              </label>
              <label>
                <span>Output volume</span>
                <select required value={volume} onChange={(event) => { setVolume(event.target.value); setSubmitted(false); }}>
                  <option value="">Select output volume</option>
                  <option value="small-batch">Projects and small batches</option>
                  <option value="shared">Shared studio or classroom</option>
                  <option value="production">Daily production and repeat orders</option>
                </select>
              </label>
              <label>
                <span>Object format</span>
                <select required value={format} onChange={(event) => { setFormat(event.target.value); setSubmitted(false); }}>
                  <option value="">Select object format</option>
                  <option value="flat">Mostly flat materials</option>
                  <option value="large">Large sheets and panels</option>
                  <option value="cylindrical">Tumblers and cylindrical goods</option>
                </select>
              </label>
              <button className="button button--primary" type="submit">
                Start the Finder <ArrowRight weight="bold" />
              </button>
            </form>

            {submitted && (
              <article className="finder-result" id="finder-result" aria-live="polite">
                <div className="finder-result__copy">
                  <span className="match-label"><CheckCircle weight="fill" /> Your starting match</span>
                  <h3>{recommendation.name}</h3>
                  <p>{recommendation.copy}</p>
                  <div className="proof-list">
                    {recommendation.proof.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <ExternalLink className="button button--dark" href={recommendation.href}>
                    Explore {recommendation.name.replace("™", "")} <ArrowUpRight weight="bold" />
                  </ExternalLink>
                  <ExternalLink className="text-link" href="https://www.1laser.com/products/sales-consultation-call">
                    Confirm with an expert <ArrowRight />
                  </ExternalLink>
                </div>
                <div className="finder-result__media">
                  <img src={asset(recommendation.image)} alt={`${recommendation.name} laser machine`} />
                </div>
              </article>
            )}
          </section>

          <section className="production-path" aria-labelledby="production-path-title">
            <div className="production-path__inner">
              <div className="production-path__heading">
                <h2 id="production-path-title">From an idea to repeatable output.</h2>
                <p>One connected path turns a product goal into a machine choice and a workflow your team can run again.</p>
              </div>
              <ol>
                {productionSteps.map(([number, title, copy]) => (
                  <li key={number}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="machine-section section" id="machines" aria-labelledby="machines-title">
            <div className="section-heading">
              <div>
                <h2 id="machines-title">One platform for every stage of growth.</h2>
                <p>Compare machines by the work they are built to move—not by an isolated wall of specifications.</p>
              </div>
            </div>
            <div className="machine-grid">
              {Object.entries(machines).map(([id, machine]) => (
                <ExternalLink className={`machine-card machine-card--${id}`} href={machine.href} key={id}>
                  <div className="machine-card__copy">
                    <small>{machine.eyebrow}</small>
                    <h3>{machine.name}</h3>
                    <p>{machine.copy}</p>
                  </div>
                  <img src={asset(machine.image)} alt={`${machine.name} laser machine`} />
                  <span>Explore {machine.name.replace("™", "")} <ArrowUpRight /></span>
                </ExternalLink>
              ))}
            </div>
          </section>

          <section className="outcomes section" id="outcomes" aria-labelledby="outcomes-title">
            <div className="section-heading">
              <div>
                <h2 id="outcomes-title">Start with the product. See the right machine.</h2>
                <p>Four familiar projects show how material, production goal, and object format lead to a best-fit OneLaser.</p>
              </div>
            </div>
            <div className="project-grid">
              {projectCards.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__media">
                    <img src={asset(project.image)} alt={project.title} />
                    <span>Project example</span>
                  </div>
                  <div className="project-card__body">
                    <h3>{project.title}</h3>
                    <ol className="project-card__route" aria-label={`How ${project.title} maps to ${project.machine}`}>
                      <li><span>01</span><small>Material</small><strong>{project.material}</strong></li>
                      <li><span>02</span><small>Production goal</small><strong>{project.outcome}</strong></li>
                      <li><span>03</span><small>Best-fit machine</small><strong>{project.machine}</strong></li>
                    </ol>
                    <ExternalLink className="project-card__machine" href={machines[project.machineId].href}>Explore {project.machine} <ArrowUpRight /></ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="trust section" id="why" aria-labelledby="trust-title">
            <div className="section-heading">
              <div>
                <h2 id="trust-title">Why teams choose OneLaser.</h2>
                <p>Three direct cause-and-effect reasons connect engineering decisions to the outcomes owners feel.</p>
              </div>
            </div>
            <div className="trust-grid">
              {trustChains.map(({ number, title, body, icon: Icon }) => (
                <article className="trust-card" key={number}>
                  <div><span>{number}</span><Icon /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="next-step section" aria-labelledby="next-step-title">
            <div className="section-heading section-heading--inverse">
              <div>
                <h2 id="next-step-title">Move from research to the right next step.</h2>
                <p>Choose the path that matches where you are today. OneLaser will help with the rest.</p>
              </div>
            </div>
            <div className="next-step__grid">
              <a href="#finder"><Sparkle /><span><strong>Choose a machine</strong><small>Use the guided finder</small></span><ArrowRight /></a>
              <ExternalLink href="https://www.1laser.com/pages/demoroom"><UsersThree /><span><strong>Book a demo</strong><small>See the workflow</small></span><ArrowUpRight /></ExternalLink>
              <ExternalLink href="https://www.1laser.com/products/sales-consultation-call"><EnvelopeSimple /><span><strong>Get a quote</strong><small>Plan with an expert</small></span><ArrowUpRight /></ExternalLink>
            </div>
          </section>
        </main>

        <footer className="home-footer">
          <div className="home-footer__lead">
            <section>
              <h2>Talk to a Rep</h2>
              <p>Have questions or need help?</p>
              <ExternalLink href="https://www.1laser.com/products/sales-consultation-call">Book A Free Call</ExternalLink>
            </section>
            <section>
              <h2>Unlock Exclusive Updates &amp; Savings!</h2>
              <p>Receive tips, promotions, and project inspiration.</p>
              <form action="https://www.1laser.com/contact#ContactFooter" method="post" target="_blank">
                <input type="hidden" name="form_type" value="customer" />
                <input type="hidden" name="utf8" value="✓" />
                <label className="sr-only" htmlFor="home-footer-email">Email address</label>
                <input id="home-footer-email" name="contact[email]" type="email" autoComplete="email" placeholder="Email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </section>
          </div>
          <div className="home-footer__main">
            <div className="home-footer__links">
              <div><strong>Community</strong><a href="https://www.1laser.com/pages/onelaser-rewards">Purchase Rewards</a><a href="https://af.uppromote.com/OneLaser/register">Become Affiliate</a><a href="https://www.1laser.com/pages/laser-engraving-community">Join Community</a><a href="https://www.1laser.com/pages/testimonials">Testimonials</a><a href="https://www.1laser.com/pages/demoroom">Demo Room</a></div>
              <div><strong>Machines</strong><a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines">OneLaser Machines</a><a href="https://www.1laser.com/collections/x-series">X Series</a><a href="https://www.1laser.com/collections/cobra-series">Cobra Series</a><a href="https://www.1laser.com/collections/hydra-gen-2-rf-laser-engravers-cutters">Hydra Gen2 Series</a><a href="https://www.1laser.com/collections/hydra-series">Hydra Series</a><a href="https://www.1laser.com/products/vertigo-vertical-laser-engraver">VertiGo</a><a href="https://www.1laser.com/collections/laser-accessories">Laser Accessories</a></div>
              <div><strong>Support</strong><a href="https://www.1laser.com/pages/about-us">About Us</a><a href="https://www.1laser.com/pages/contact-us">Contact Us</a><a href="https://www.1laser.com/pages/financing">Financing</a><a href="https://www.1laser.com/blogs/topic">Blog Center</a><a href="https://www.1laser.com/pages/payment-methods">Payment Methods</a><a href="https://www.1laser.com/pages/faq">Common FAQ</a><a href="https://www.1laser.com/pages/laser-cutter-engraving-settings-for-different-materials">Laser Engraving &amp; Cutting Chart</a><a href="https://www.1laser.com/pages/find-demo-host">Schedule a Demo</a><a href="https://www.1laser.com/pages/demoroom">Become a Demo Host</a></div>
              <div><strong>Policy</strong><a href="https://www.1laser.com/pages/shipping-policy">Shipping Policy</a><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/refund-policy">Refund Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="https://www.1laser.com/pages/warranty-policy">Warranty Policy</a><a href="https://www.1laser.com/pages/pre-order-backorder-policy">Pre &amp; Backorder Policy</a><a href="https://www.1laser.com/pages/onelaser-giveaway-general-terms-conditions">Giveaway General Terms &amp; Conditions</a></div>
            </div>
            <div className="home-footer__contact">
              <strong>Contact Us</strong>
              <a href="tel:+16268004130"><Phone size={16} />Phone: 626-800-4130</a>
              <a href="mailto:ts@1laser.com"><EnvelopeSimple size={16} />Tech Support: ts@1laser.com</a>
              <a href="mailto:cs@1laser.com"><EnvelopeSimple size={16} />Customer Support: cs@1laser.com</a>
              <a href="mailto:sales@1laser.com"><EnvelopeSimple size={16} />Sales Consultation: sales@1laser.com</a>
              <p><MapPin size={16} />Headquarters: 20472 Crescent Bay Dr, STE 104, Lake Forest, CA 92630</p>
              <nav className="home-footer__socials" aria-label="OneLaser social media">
                <ExternalLink href="https://www.facebook.com/onelaser.official" aria-label="OneLaser on Facebook"><FacebookLogo size={18} weight="fill" /></ExternalLink>
                <ExternalLink href="https://www.youtube.com/@OneLaser.Official" aria-label="OneLaser on YouTube"><YoutubeLogo size={19} weight="fill" /></ExternalLink>
                <ExternalLink href="https://www.instagram.com/onelaser.official/" aria-label="OneLaser on Instagram"><InstagramLogo size={18} weight="bold" /></ExternalLink>
                <ExternalLink href="https://x.com/OneLaserHQ" aria-label="OneLaser on X"><XLogo size={17} weight="bold" /></ExternalLink>
                <ExternalLink href="https://www.tiktok.com/@onelaser.official" aria-label="OneLaser on TikTok"><TiktokLogo size={18} weight="fill" /></ExternalLink>
              </nav>
            </div>
          </div>
          <div className="home-footer__bottom"><span>© {new Date().getFullYear()} OneLaser. All rights reserved.</span><div><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="#top">Back to top <ArrowUpRight size={13} /></a></div></div>
        </footer>
      </div>
    </div>
  );
}
