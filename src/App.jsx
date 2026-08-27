import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CaretDown,
  CheckCircle,
  EnvelopeSimple,
  GraduationCap,
  Headset,
  List,
  MagnifyingGlass,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Target,
  User,
  UserCircle,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

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
    image: "product-walnut-serving-board.webp",
  },
  {
    title: "Retail Acrylic Sign",
    material: "Acrylic",
    outcome: "Signage and event production",
    machine: "Cobra",
    image: "home-project-large-acrylic-sign.webp",
  },
  {
    title: "Batch Leather Gifts",
    material: "Leather",
    outcome: "Repeatable corporate orders",
    machine: "Hydra Gen2",
    image: "home-project-batch-leather-gifts.webp",
  },
  {
    title: "Corporate Tumbler Batch",
    material: "Coated drinkware",
    outcome: "Rotary batch personalization",
    machine: "VertiGo",
    image: "home-project-vertigo-corporate-tumbler-batch.webp",
  },
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

export function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audience, setAudience] = useState("maker");
  const [material, setMaterial] = useState("");
  const [volume, setVolume] = useState("");
  const [format, setFormat] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-lock", mobileOpen);
    return () => document.body.classList.remove("menu-lock");
  }, [mobileOpen]);

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
    <div className={activeMenu ? "site-shell has-mega-menu" : "site-shell"}>
      <header className="site-header" onMouseLeave={() => setActiveMenu(null)}>
        <a className="brand" href="#top" aria-label="OneLaser home">
          <img src={asset("onelaser-logo-transparent.svg")} alt="OneLaser" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <button
            type="button"
            aria-expanded={activeMenu === "machines"}
            onMouseEnter={() => setActiveMenu("machines")}
            onFocus={() => setActiveMenu("machines")}
            onClick={() => setActiveMenu("machines")}
          >
            Laser Machines <CaretDown weight="bold" />
          </button>
          <ExternalLink href="https://www.1laser.com/collections/laser-accessories">Accessories</ExternalLink>
          <ExternalLink href="https://www.1laser.com/collections/limited-offers">Clearance</ExternalLink>
          <button
            type="button"
            aria-expanded={activeMenu === "support"}
            onMouseEnter={() => setActiveMenu("support")}
            onFocus={() => setActiveMenu("support")}
            onClick={() => setActiveMenu("support")}
          >
            Support <CaretDown weight="bold" />
          </button>
          <button
            type="button"
            aria-expanded={activeMenu === "community"}
            onMouseEnter={() => setActiveMenu("community")}
            onFocus={() => setActiveMenu("community")}
            onClick={() => setActiveMenu("community")}
          >
            Community <CaretDown weight="bold" />
          </button>
          <ExternalLink href="https://www.1laser.com/pages/contact-us">Contact</ExternalLink>
        </nav>

        <div className="header-actions" aria-label="Quick links">
          <ExternalLink href="https://www.1laser.com/search" className="icon-link" aria-label="Search">
            <MagnifyingGlass />
          </ExternalLink>
          <ExternalLink href="https://www.1laser.com/cart" className="icon-link" aria-label="Cart">
            <ShoppingBag />
          </ExternalLink>
          <ExternalLink href="https://www.1laser.com/account/login" className="icon-link desktop-account" aria-label="Account">
            <UserCircle />
          </ExternalLink>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <List />}
          </button>
        </div>

        {activeMenu && (
          <div className={`mega-menu mega-menu--${activeMenu}`} role="region" aria-label={`${activeMenu} menu`}>
            <div className="mega-menu__inner">
              <div className="mega-menu__intro">
                <p>Explore OneLaser</p>
                <h2>{menuContent[activeMenu].title}</h2>
                <a href="#finder" onClick={() => setActiveMenu(null)}>
                  Start with your work <ArrowRight />
                </a>
              </div>
              <div className="mega-menu__grid">
                {menuContent[activeMenu].links.map(([name, copy, href, image]) => (
                  <ExternalLink className={image ? "mega-card mega-card--machine" : "mega-card"} href={href} key={name}>
                    {image && <img src={asset(image)} alt="" />}
                    <span>
                      <strong>{name}</strong>
                      <small>{copy}</small>
                    </span>
                    <ArrowUpRight />
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#finder" onClick={() => setMobileOpen(false)}>Find your OneLaser</a>
          <a href="#machines" onClick={() => setMobileOpen(false)}>Laser Machines</a>
          <ExternalLink href="https://www.1laser.com/collections/laser-accessories">Accessories</ExternalLink>
          <ExternalLink href="https://www.1laser.com/collections/limited-offers">Clearance</ExternalLink>
          <ExternalLink href="https://www.1laser.com/pages/contact-us">Support &amp; Contact</ExternalLink>
          <ExternalLink href="https://www.1laser.com/pages/laser-engraving-community">Community</ExternalLink>
        </nav>
      )}

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

          <section className="machine-section section" id="machines" aria-labelledby="machines-title">
            <div className="section-heading">
              <div>
                <h2 id="machines-title">One platform for every stage of growth.</h2>
                <p>Compare machines by the work they are built to move—not by an isolated wall of specifications.</p>
              </div>
              <span className="section-index">02 / 05</span>
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
                <h2 id="outcomes-title">See the work. Understand the path.</h2>
                <p>Each project connects the engraved material, production goal, and recommended machine.</p>
              </div>
              <span className="section-index">03 / 05</span>
            </div>
            <div className="project-grid">
              {projectCards.map((project) => (
                <article className="project-card" key={project.title}>
                  <img src={asset(project.image)} alt={project.title} />
                  <div className="project-card__body">
                    <small>{project.material}</small>
                    <h3>{project.title}</h3>
                    <p>{project.outcome}</p>
                    <div><span>Recommended</span><strong>{project.machine}</strong></div>
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
              <span className="section-index">04 / 05</span>
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
              <span className="section-index">05 / 05</span>
            </div>
            <div className="next-step__grid">
              <a href="#finder"><Sparkle /><span><strong>Choose a machine</strong><small>Use the guided finder</small></span><ArrowRight /></a>
              <ExternalLink href="https://www.1laser.com/pages/demoroom"><UsersThree /><span><strong>Book a demo</strong><small>See the workflow</small></span><ArrowUpRight /></ExternalLink>
              <ExternalLink href="https://www.1laser.com/products/sales-consultation-call"><EnvelopeSimple /><span><strong>Get a quote</strong><small>Plan with an expert</small></span><ArrowUpRight /></ExternalLink>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-footer__top">
            <img src={asset("onelaser-logo-transparent.svg")} alt="OneLaser" />
            <p>Build more. Deliver faster.</p>
          </div>
          <div className="site-footer__links">
            <div><strong>Machines</strong><ExternalLink href={machineLinks.xrf}>XRF</ExternalLink><ExternalLink href={machineLinks.cobra}>Cobra Series</ExternalLink><ExternalLink href={machineLinks.hydra}>Hydra Gen2</ExternalLink><ExternalLink href={machineLinks.vertigo}>VertiGo</ExternalLink></div>
            <div><strong>Support</strong><ExternalLink href="https://zohodesk.1laser.com/portal/en/newticket">Submit a Ticket</ExternalLink><ExternalLink href="https://www.1laser.com/products/engineer-1-on-1-training-support">1-on-1 Training</ExternalLink><ExternalLink href="https://wiki.1laser.com/">Knowledge Base</ExternalLink></div>
            <div><strong>Community</strong><ExternalLink href="https://www.1laser.com/pages/onelaser-rewards">Purchase Rewards</ExternalLink><ExternalLink href="https://www.1laser.com/pages/laser-engraving-community">Join Community</ExternalLink><ExternalLink href="https://www.1laser.com/pages/testimonials">Testimonials</ExternalLink></div>
            <div><strong>Contact</strong><ExternalLink href="https://www.1laser.com/pages/contact-us">Contact Us</ExternalLink><ExternalLink href="https://www.1laser.com/pages/financing">Financing</ExternalLink><ExternalLink href="https://www.1laser.com/blogs/topic">Blogs</ExternalLink></div>
          </div>
          <div className="site-footer__bottom"><span>OneLaser homepage design exploration</span><ExternalLink href="https://www.1laser.com/">Visit 1laser.com <ArrowUpRight /></ExternalLink></div>
        </footer>
      </div>
    </div>
  );
}
