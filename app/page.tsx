"use client";

import { useMemo, useState } from "react";

const team = [
  { name: "Masratu Siti Suaibah", role: "Direktur", initials: "MS" },
  { name: "Amartya Nadiva R", role: "Divisi Pemasaran", initials: "AR" },
  { name: "Saskia Althafunissa", role: "Divisi Pelayanan", initials: "SA" },
  { name: "Kasih Afrillia", role: "Divisi Produk & Desain", initials: "KA" },
  { name: "Izul Alfi’al Arif D", role: "Divisi Keuangan", initials: "IA" },
];

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description: "Desain visual untuk membantu bisnis menyampaikan pesan dengan lebih menarik dan konsisten.",
    tags: ["Social Media", "Promotional Design", "Marketing Materials"],
  },
  {
    number: "02",
    title: "Business Identity",
    description: "Materi identitas visual yang membantu bisnis tampil lebih profesional dan mudah dikenali.",
    tags: ["Business Identity", "Personal Branding", "Stationery"],
  },
  {
    number: "03",
    title: "Digital Business Card",
    description: "Kartu nama modern yang menghubungkan kartu fisik dengan profil digital melalui NFC dan QR Code.",
    tags: ["NFC", "QR Code", "Digital Profile"],
  },
  {
    number: "04",
    title: "Custom Design",
    description: "Solusi desain yang disesuaikan dengan kebutuhan, karakter, dan tujuan setiap pelanggan.",
    tags: ["Personalized", "Consultation", "Custom Request"],
  },
];

const projects = [
  {
    title: "Digital Business Card",
    category: "Business Card",
    type: "NFC · QR Code",
    style: "project-card-one",
  },
  {
    title: "Brand Identity Concept",
    category: "Branding",
    type: "Visual Identity",
    style: "project-card-two",
  },
  {
    title: "Creative Social Media",
    category: "Graphic Design",
    type: "Social Media Design",
    style: "project-card-three",
  },
  {
    title: "Digital Profile Preview",
    category: "Digital Design",
    type: "Digital Experience",
    style: "project-card-four",
  },
];

const categories = [
  "All",
  "Business Card",
  "Branding",
  "Graphic Design",
  "Digital Design",
];

function Icon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    arrowUp: (
      <>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m18 6-12 12M6 6l12 12" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  };

  return (
    <svg {...common} aria-hidden="true">
      {paths[name] || paths.arrow}
    </svg>
  );
}

function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
}) {
  const text =
    message ||
    "Halo IDQODE, saya ingin bertanya mengenai layanan dan produk IDQODE.";

  return (
    <a
      className={className}
      href={`https://wa.me/6285762569023?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lamination, setLamination] = useState("Glossy");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const closeMenu = () => setMenuOpen(false);

  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const text = `Halo IDQODE, saya ingin menghubungi Anda.

Nama: ${name}
Email: ${email}
Layanan: ${service}
Pesan: ${message}`;

    window.open(
      `https://wa.me/6285762569023?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main>
      {/* NAVBAR */}
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="IDQODE home"
        >
          <span className="brand-name">
            IDQODE
            <small>CREATIVE DIGITAL STUDIO</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "Home",
            "About",
            "Services",
            "Products",
            "Portfolio",
            "Our Team",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <WhatsAppLink
            className="nav-cta"
            message="Halo IDQODE, saya ingin berkonsultasi mengenai layanan Anda."
          >
            Let's Talk <Icon name="arrowUp" size={15} />
          </WhatsAppLink>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero section-dark" id="home">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="eyebrow light">
            <span className="eyebrow-dot" />
            CREATIVE DESIGN & DIGITAL SOLUTIONS
          </div>

          <h1>
            Your Identity
            <br />
            <em>Goes Digital.</em>
          </h1>

          <p className="hero-copy">
            Kami membantu personal maupun bisnis membangun identitas yang
            berkesan melalui desain kreatif dan solusi digital.
          </p>

          <div className="hero-actions">
            <a href="#products" className="button button-beige">
              Explore Our Product <Icon name="arrow" size={17} />
            </a>

            <a href="#about" className="text-link light-link">
              Discover IDQODE <Icon name="arrowUp" size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span>01 / 04</span>
            <span className="meta-line" />
            <span>CREATIVITY MEETS TECHNOLOGY</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Digital business card mockup">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-glow" />

          <div className="floating-label label-nfc">
            <span className="nfc-symbol">)))</span>
            <span>
              NFC ENABLED
              <small>Tap to connect</small>
            </span>
          </div>

          <div className="business-card">
            <div className="card-top">
              <span className="card-logo">
                IDQODE<span>.</span>
              </span>
              <span className="card-chip">DIGITAL CARD</span>
            </div>

            <div className="card-center">
              <span className="card-monogram">iQ</span>
              <span className="card-tagline">
                YOUR IDENTITY
                <br />
                GOES DIGITAL.
              </span>
            </div>

            <div className="card-bottom">
              <span>
                CONNECT
                <br />
                WITHOUT LIMITS
              </span>
              <span className="card-nfc">)))</span>
            </div>
          </div>

          <div className="floating-label label-qr">
            <div className="qr-mini">
              <i />
              <i />
              <i />
              <b />
            </div>
            <span>
              SCAN & CONNECT
              <small>QR Code access</small>
            </span>
          </div>

          <div className="hero-caption">
            A NEW WAY TO MAKE CONNECTIONS
          </div>
        </div>

        <a href="#about" className="scroll-cue">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      {/* ABOUT */}
      <section className="intro section-pad" id="about">
        <div className="section-kicker">01 — WHO WE ARE</div>

        <div className="intro-layout">
          <h2>
            Ideas deserve
            <br />a <em>distinctive</em>
            <br />
            identity.
          </h2>

          <div className="intro-copy">
            <p className="lead">
              Kami percaya setiap identitas memiliki cerita. IDQODE hadir
              untuk membantu cerita itu tampil lebih kuat melalui kreativitas
              dan teknologi.
            </p>

            <p>
              IDQODE merupakan bisnis kreatif yang berfokus pada layanan
              desain dan solusi identitas digital. Kami menggabungkan
              pendekatan visual yang thoughtful dengan kemudahan teknologi
              untuk mendukung kebutuhan personal maupun bisnis.
            </p>

            <a href="#team" className="text-link dark-link">
              Meet Our Team <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>

        <div className="intro-stats">
          <div>
            <strong>01</strong>
            <span>
              CREATIVE
              <br />
              APPROACH
            </span>
          </div>
          <div>
            <strong>02</strong>
            <span>
              DIGITAL
              <br />
              SOLUTIONS
            </span>
          </div>
          <div>
            <strong>∞</strong>
            <span>
              ROOM TO
              <br />
              CREATE
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-pad" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 — WHAT WE DO</div>
            <h2>
              Creative services,
              <br />
              <em>made for you.</em>
            </h2>
          </div>

          <p>
            Solusi kreatif yang dirancang untuk membantu ide dan identitas
            bisnismu tampil lebih menonjol.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number} / 04</span>
                <span className="service-icon">
                  <Icon name="arrowUp" size={18} />
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <WhatsAppLink
                className="service-link"
                message={`Halo IDQODE, saya tertarik dengan layanan ${service.title}. Boleh minta informasi lebih lanjut?`}
              >
                Discuss this service <Icon name="arrow" size={16} />
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="product-section section-dark" id="products">
        <div className="product-heading">
          <div>
            <div className="section-kicker light">03 — FEATURED PRODUCT</div>
            <h2>
              Your card.
              <br />
              <em>Your connection.</em>
            </h2>
          </div>

          <p>
            Kenalkan diri dan bagikan informasi kontak dengan cara yang lebih
            praktis melalui IDQODE Digital Business Card.
          </p>
        </div>

        <div className="product-showcase">
          <div className="product-visual">
            <div className="product-halo" />

            <div className="product-card-visual">
              <div className="product-card-brand">
                IDQODE<span>.</span>
              </div>

              <div className="product-card-symbol">iQ</div>

              <div className="product-card-foot">
                <span>
                  YOUR IDENTITY
                  <br />
                  GOES DIGITAL.
                </span>

                <div className="product-qr">
                  <i />
                  <i />
                  <i />
                  <b />
                </div>
              </div>
            </div>

            <div className="visual-note">
              <span className="note-line" /> ROUNDED CORNER DESIGN
            </div>
          </div>

          <div className="product-details">
            <span className="product-label">
              IDQODE / DIGITAL BUSINESS CARD
            </span>

            <h3>
              More than a
              <br />
              <em>business card.</em>
            </h3>

            <p className="product-description">
              Kartu nama modern yang menghubungkan kartu fisik dengan halaman
              profil digital. Cukup satu sentuhan atau satu pemindaian untuk
              membagikan identitasmu.
            </p>

            <div className="feature-list">
              <div>
                <span className="feature-icon">NFC</span>
                <span>
                  <b>NFC Technology</b>
                  <small>
                    Tap kartu ke smartphone yang mendukung NFC.
                  </small>
                </span>
              </div>

              <div>
                <span className="feature-icon qr-feature">▦</span>
                <span>
                  <b>QR Code</b>
                  <small>Pindai QR Code untuk membuka profil digital.</small>
                </span>
              </div>

              <div>
                <span className="feature-icon round-feature">◜</span>
                <span>
                  <b>Rounded Corner</b>
                  <small>
                    Desain sudut membulat yang modern dan elegan.
                  </small>
                </span>
              </div>
            </div>

            <div className="lamination-picker">
              <span className="picker-label">PILIHAN LAMINATING</span>

              <div className="lamination-options">
                {["Glossy", "Doff"].map((option) => (
                  <button
                    key={option}
                    className={
                      lamination === option
                        ? "lamination-option selected"
                        : "lamination-option"
                    }
                    onClick={() => setLamination(option)}
                  >
                    <span
                      className={`lamination-swatch ${option.toLowerCase()}`}
                    />
                    {option}
                    {lamination === option && (
                      <Icon name="check" size={15} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-price">
              <span>STARTING FROM</span>
              <strong>Rp45.000–55.000</strong>
              <small>
                Harga menyesuaikan spesifikasi dan jumlah pesanan.
              </small>
            </div>

            <WhatsAppLink
              className="button button-beige product-button"
              message={`Halo IDQODE, saya tertarik dengan Digital Business Card dengan laminating ${lamination}. Saya ingin mengetahui detail produk dan harganya.`}
            >
              Customize Your Card <Icon name="arrow" size={17} />
            </WhatsAppLink>

            <p className="design-only">
              Hanya butuh desain tanpa cetak?{" "}
              <WhatsAppLink message="Halo IDQODE, saya ingin bertanya mengenai jasa desain kartu nama tanpa cetak.">
                Tanyakan jasa desain saja.
              </WhatsAppLink>
            </p>
          </div>
        </div>

        <div className="product-benefits">
          <div className="section-kicker light">
            WHY DIGITAL BUSINESS CARD?
          </div>

          <div className="benefit-grid">
            {[
              "Desain modern, premium, dan profesional.",
              "Dilengkapi NFC dan QR Code.",
              "Memudahkan akses profil dan informasi kontak.",
              "Praktis tanpa perlu terus mencetak kartu nama kertas.",
              "Cocok untuk personal branding maupun kebutuhan bisnis.",
            ].map((item, i) => (
              <div className="benefit" key={item}>
                <span>0{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="nfc-note">
            Cukup dekatkan kartu ke smartphone yang mendukung NFC atau pindai
            QR Code untuk membuka halaman profil digital Anda.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section section-pad" id="portfolio">
        <div className="section-heading">
          <div>
            <div className="section-kicker">04 — SELECTED WORKS</div>
            <h2>
              Made with
              <br />
              <em>intention.</em>
            </h2>
          </div>

          <p>
            Jelajahi eksplorasi visual dan konsep kreatif IDQODE. Galeri ini
            dapat diperbarui dengan karya final bisnis.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "filter active" : "filter"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article
              className={`portfolio-card ${project.style}`}
              key={project.title}
            >
              <div className="project-art">
                {project.category === "Business Card" && (
                  <div className="mini-card-art">
                    <span>IDQODE.</span>
                    <b>iQ</b>
                    <small>YOUR IDENTITY GOES DIGITAL.</small>
                  </div>
                )}

                {project.category === "Branding" && (
                  <div className="brand-art">
                    <span>iQ</span>
                    <b>
                      IDENTITY
                      <br />
                      IN EVERY
                      <br />
                      DETAIL.
                    </b>
                  </div>
                )}

                {project.category === "Graphic Design" && (
                  <div className="graphic-art">
                    <span>
                      MAKE
                      <br />
                      IT
                      <br />
                      <i>MATTER.</i>
                    </span>
                    <b>DESIGN STUDY / 024</b>
                  </div>
                )}

                {project.category === "Digital Design" && (
                  <div className="phone-art">
                    <div className="phone-screen">
                      <span>YOUR PROFILE</span>
                      <b>Alex Morgan</b>
                      <small>Creative Professional</small>
                      <div className="phone-lines" />
                      <div className="phone-action">SAVE CONTACT</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <span className="project-arrow">
                  <Icon name="arrowUp" size={17} />
                </span>
              </div>

              <p className="project-type">
                {project.type} · Concept Preview
              </p>
            </article>
          ))}
        </div>

        <p className="portfolio-disclaimer">
          * Visual konsep / placeholder. Ganti dengan dokumentasi karya
          IDQODE yang sebenarnya sebelum dipublikasikan.
        </p>
      </section>

      {/* OUR TEAM */}
      <section className="team-section section-pad" id="our-team">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              05 — THE PEOPLE BEHIND IDQODE
            </div>
            <h2>
              Creative minds.
              <br />
              <em>One direction.</em>
            </h2>
          </div>

          <p>
            Kenali tim di balik IDQODE yang menjalankan setiap bagian bisnis
            dengan peran masing-masing.
          </p>
        </div>

        <div className="team-grid">
          {team.map((person, i) => (
            <article className="team-card" key={person.name}>
              <div className={`team-avatar avatar-${i}`}>
                <span>{person.initials}</span>
                <small>IDQODE TEAM</small>
              </div>

              <div className="team-role">{person.role}</div>
              <h3>{person.name}</h3>
            </article>
          ))}
        </div>

        <div className="org-note">
          <span className="org-line" />
          ONE TEAM, DIFFERENT ROLES, SHARED VISION.
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-dark" id="contact">
        <div className="contact-top">
          <div>
            <div className="section-kicker light">06 — LET'S CONNECT</div>
            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>
          </div>

          <p>
            Ceritakan kebutuhanmu kepada kami. Tim IDQODE siap membantu
            menemukan solusi kreatif yang tepat.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <a
              href="https://wa.me/6285762569023"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">WA</span>
              <span>
                <small>WHATSAPP</small>
                <b>+62 857-6256-9023</b>
              </span>
              <Icon name="arrowUp" size={17} />
            </a>

            <a
              href="mailto:idqode.contact@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <span>
                <small>EMAIL</small>
                <b>idqode.contact@gmail.com</b>
              </span>
              <Icon name="arrowUp" size={17} />
            </a>

            <a
              href="https://www.instagram.com/idqode/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <Icon name="instagram" />
              </span>
              <span>
                <small>INSTAGRAM</small>
                <b>@idqode</b>
              </span>
              <Icon name="arrowUp" size={17} />
            </a>

            <div className="contact-item address-item">
              <span className="contact-icon">
                <Icon name="pin" />
              </span>
              <span>
                <small>BUSINESS ADDRESS</small>
                <b>
                  Pademangan Timur, Kec. Pademangan,
                  <br />
                  Jakarta Utara, DKI Jakarta 14410
                </b>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-heading">
              <h3>Send us a message.</h3>
              <p>
                Isi formulir berikut, lalu lanjutkan percakapan melalui
                WhatsApp.
              </p>
            </div>

            <label>
              YOUR NAME
              <input name="name" placeholder="Nama lengkap" required />
            </label>

            <label>
              EMAIL ADDRESS
              <input
                name="email"
                type="email"
                placeholder="nama@email.com"
                required
              />
            </label>

            <label>
              SERVICE INTERESTED IN
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Pilih layanan
                </option>
                <option>Digital Business Card</option>
                <option>Graphic Design</option>
                <option>Business Identity</option>
                <option>Custom Design</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              MESSAGE
              <textarea
                name="message"
                rows={3}
                placeholder="Ceritakan kebutuhanmu..."
                required
              />
            </label>

            <button className="button button-beige form-submit" type="submit">
              Send via WhatsApp <Icon name="arrow" size={17} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-name">
              IDQODE
              <small>CREATIVE DIGITAL STUDIO</small>
            </span>
          </a>

          <div className="footer-tagline">
            Your Identity
            <br />
            <em>Goes Digital.</em>
          </div>

          <div className="footer-links">
            <span>EXPLORE</span>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-links">
            <span>GET IN TOUCH</span>
            <a href="mailto:idqode.contact@gmail.com">Email Us</a>
            <a
              href="https://www.instagram.com/idqode/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/6285762569023"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} IDQODE. ALL RIGHTS RESERVED.
          </span>
          <span>DESIGNED WITH PURPOSE.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}