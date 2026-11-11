
"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP = "6285762569023";

const menu = [
  ["Beranda", "#beranda"],
  ["Tentang Kami", "#tentang"],
  ["Layanan", "#layanan"],
  ["Produk", "#produk"],
  ["Portofolio", "#portofolio"],
  ["Tim Kami", "#tim"],
  ["Kontak", "#kontak"],
];

const team = [
  ["Masratu Siti Suaibah", "Direktur"],
  ["Amartya Nadiva R", "Divisi Pemasaran"],
  ["Saskia Althafunissa", "Divisi Pelayanan"],
  ["Kasih Afrillia", "Divisi Produk dan Desain"],
  ["Izul Alfi'al Arif D", "Divisi Keuangan"],
];

const services = [
  {
    no: "01",
    icon: "✦",
    title: "Jasa Desain Kartu Nama",
    desc: "Pembuatan desain kartu nama yang disesuaikan dengan kebutuhan, karakter, dan identitas visual pelanggan.",
  },
  {
    no: "02",
    icon: "▣",
    title: "Desain dan Kartu Fisik",
    desc: "Pembuatan desain sekaligus penyediaan kartu nama fisik melalui proses pemesanan percetakan.",
  },
  {
    no: "03",
    icon: "▤",
    title: "Desain Saja",
    desc: "Layanan pembuatan desain kartu nama dalam bentuk file digital tanpa pemesanan kartu fisik.",
  },
];

const products = [
  {
    no: "01",
    type: "nfc",
    category: "KARTU DIGITAL",
    title: "Kartu NFC",
    desc: "Kartu nama yang menggunakan teknologi NFC untuk memudahkan pengguna membagikan informasi kontak secara digital.",
    features: ["Teknologi NFC", "Berbagi informasi digital", "Desain profesional"],
  },
  {
    no: "02",
    type: "carton",
    category: "KARTU FISIK",
    title: "Kartu Art Carton",
    desc: "Kartu nama berbahan Art Carton yang dilengkapi QR Code untuk memudahkan akses informasi atau profil digital.",
    features: ["Dilengkapi QR Code", "Bentuk Sharp dan Rounded", "Finishing Glossy dan Doff"],
  },
  {
    no: "03",
    type: "design",
    category: "FILE DIGITAL",
    title: "Desain Saja",
    desc: "Layanan desain kartu nama sesuai identitas dan kebutuhan pelanggan tanpa pemesanan kartu fisik.",
    features: ["Desain sesuai kebutuhan", "File digital", "Tanpa kartu fisik"],
  },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    arrow: "↗",
    check: "✓",
    wifi: "⌁",
    qr: "▦",
    palette: "✦",
    card: "▣",
    phone: "⌕",
    mail: "✉",
    pin: "⌖",
    instagram: "◎",
    menu: "☰",
    close: "×",
    sparkle: "✧",
    message: "◉",
  };

  return (
    <span aria-hidden="true" className="inline-flex items-center justify-center">
      {icons[name] || "•"}
    </span>
  );
}

function CardMockup({ type }: { type: string }) {
  if (type === "nfc") {
    return (
      <div className="mockup-area">
        <div className="mockup-card nfc-card">
          <div className="flex justify-between items-center">
            <span className="font-black tracking-[.2em]">IDQODE.</span>
            <span className="text-2xl">⌁</span>
          </div>
          <div className="mt-9">
            <p className="text-[9px] tracking-[.3em] text-blue-200">
              KARTU NAMA DIGITAL
            </p>
            <h3 className="mt-2 text-3xl font-bold">Your Identity.</h3>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <span className="text-[9px] tracking-widest text-blue-200">
              CONNECT DIGITALLY
            </span>
            <span className="text-2xl">⌁</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "carton") {
    return (
      <div className="mockup-area">
        <div className="mockup-card carton-card">
          <div className="flex justify-between items-center">
            <span className="font-black tracking-[.2em]">IDQODE.</span>
            <span className="text-[9px] tracking-widest text-blue-400">
              PERSONAL CARD
            </span>
          </div>
          <div className="mt-9 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Nama Anda</h3>
              <p className="mt-2 text-[9px] tracking-widest text-blue-400">
                PROFESSIONAL IDENTITY
              </p>
            </div>
            <div className="rounded-lg bg-[#173b70] p-3 text-white text-3xl">
              ▦
            </div>
          </div>
          <div className="mt-8 h-1 w-12 rounded-full bg-blue-400" />
          <p className="mt-2 text-[9px] tracking-widest text-blue-400">
            YOUR IDENTITY, YOUR STORY.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mockup-area">
      <div className="mockup-card design-card">
        <div className="flex justify-between items-center">
          <span className="font-black tracking-[.2em]">IDQODE.</span>
          <span className="text-2xl text-blue-400">✦</span>
        </div>
        <p className="mt-9 text-[9px] tracking-widest text-blue-400">
          DESAIN KREATIF
        </p>
        <h3 className="mt-2 text-3xl font-bold">Your Name.</h3>
        <p className="mt-2 text-xs text-slate-500">
          Identitas profesional dalam satu desain.
        </p>
        <div className="mt-8 flex gap-2">
          <div className="h-2 w-12 rounded-full bg-[#173b70]" />
          <div className="h-2 w-8 rounded-full bg-blue-300" />
          <div className="h-2 w-5 rounded-full bg-blue-100" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shape, setShape] = useState("Rounded");
  const [finish, setFinish] = useState("Glossy");

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Kartu NFC",
    message: "",
  });

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = [
      "Halo IDQODE, saya ingin mendapatkan informasi mengenai layanan.",
      "",
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `Layanan: ${form.service}`,
      `Pesan: ${form.message}`,
      ...(form.service === "Kartu Art Carton"
        ? [`Bentuk: ${shape}`, `Finishing: ${finish}`]
        : []),
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main className="overflow-hidden bg-white text-[#173b70]">
      {/* NAVIGASI */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#beranda">
            <span className="text-2xl font-black tracking-[.12em]">
              IDQODE<span className="text-blue-400">.</span>
            </span>
            <span className="block text-[9px] font-semibold tracking-[.25em] text-slate-400">
              IDENTITAS DIGITAL KREATIF
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {menu.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs font-semibold text-slate-600 transition hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="#kontak" className="primary-button hidden lg:inline-flex">
            Hubungi Kami <Icon name="arrow" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-blue-100 px-3 py-2 text-xl lg:hidden"
            aria-label="Buka menu"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-blue-100 bg-white px-6 py-5 lg:hidden">
            {menu.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* BERANDA */}
      <section id="beranda" className="hero-section">
        <div className="hero-circle circle-one" />
        <div className="hero-circle circle-two" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-white/5 px-4 py-2">
              <Icon name="sparkle" />
              <span className="text-[10px] font-bold tracking-[.2em] text-blue-200">
                KREATIVITAS DAN TEKNOLOGI DIGITAL
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl">
              Identitas Profesional,
              <span className="mt-2 block text-[#9cc9ff]">
                Kini Lebih Digital.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-blue-100/80 md:text-base">
              IDQODE membantu individu dan pelaku usaha membangun identitas
              profesional melalui desain kartu nama yang kreatif, modern,
              dan fungsional.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#produk" className="light-button">
                Lihat Produk <Icon name="arrow" />
              </a>
              <a href="#tentang" className="outline-button">
                Tentang IDQODE
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-7">
              {[
                ["Kreatif", "Desain personal"],
                ["Modern", "Teknologi digital"],
                ["Praktis", "Identitas profesional"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="text-lg font-bold">{title}</p>
                  <p className="mt-1 text-[10px] text-blue-200">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[32px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <CardMockup type="nfc" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl text-blue-200">⌁</p>
                  <p className="mt-2 text-xs font-bold">Teknologi NFC</p>
                  <p className="mt-1 text-[10px] text-blue-200">
                    Berbagi informasi
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl text-blue-200">▦</p>
                  <p className="mt-2 text-xs font-bold">QR Code</p>
                  <p className="mt-1 text-[10px] text-blue-200">
                    Akses lebih praktis
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-white px-5 py-4 text-[#173b70] shadow-xl">
              <p className="text-[10px] font-semibold tracking-widest text-blue-400">
                IDENTITASMU
              </p>
              <p className="text-sm font-bold">Kini Lebih Digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">TENTANG KAMI</p>
            <h2 className="section-title">
              Mengenal Lebih Dekat IDQODE.
            </h2>
            <p className="body-copy">
              IDQODE merupakan usaha di bidang desain kreatif yang berfokus
              pada pembuatan identitas profesional melalui kartu nama. Kami
              menyediakan layanan desain sesuai kebutuhan pelanggan serta
              pilihan kartu fisik yang menggabungkan tampilan menarik dengan
              teknologi digital.
            </p>
            <p className="body-copy mt-4">
              Melalui perpaduan kreativitas dan teknologi, IDQODE berupaya
              memberikan solusi identitas yang praktis, modern, dan dapat
              digunakan untuk mendukung kebutuhan personal maupun bisnis.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#eff6ff] p-5">
                <p className="text-3xl text-blue-500">✦</p>
                <h3 className="mt-3 font-bold">Kreativitas</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Mengutamakan desain yang menarik dan sesuai kebutuhan.
                </p>
              </div>
              <div className="rounded-2xl bg-[#eff6ff] p-5">
                <p className="text-3xl text-blue-500">◇</p>
                <h3 className="mt-3 font-bold">Inovasi</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Menggabungkan desain dengan teknologi digital.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#eaf3ff] p-7 md:p-10">
            <div className="rounded-2xl bg-[#173b70] p-7 text-white">
              <p className="eyebrow-light">VISI KAMI</p>
              <h3 className="mt-4 text-2xl font-bold">
                Menjadi Penyedia Layanan Kreatif dan Inovatif.
              </h3>
              <p className="mt-4 text-sm leading-7 text-blue-100">
                Menjadi penyedia layanan desain dan kartu nama yang kreatif,
                inovatif, serta mampu mendukung kebutuhan identitas profesional
                di era digital.
              </p>
            </div>

            <div className="mt-7">
              <p className="eyebrow">MISI KAMI</p>
              <div className="mt-5 space-y-4">
                {[
                  "Menghasilkan desain kartu nama yang menarik dan sesuai kebutuhan pelanggan.",
                  "Menyediakan pilihan kartu nama dengan tampilan dan fungsi yang beragam.",
                  "Memanfaatkan QR Code dan NFC untuk mempermudah pertukaran informasi.",
                  "Memberikan pelayanan yang responsif dan mengutamakan kepuasan pelanggan.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="section-padding bg-[#f1f7fd]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">LAYANAN KAMI</p>
            <h2 className="section-title">Solusi untuk Identitasmu.</h2>
            <p className="body-copy mt-5">
              Kami menyediakan pilihan layanan yang dapat disesuaikan dengan
              kebutuhan identitas personal maupun bisnis.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.no}
                className="service-card"
              >
                <div className="flex items-center justify-between">
                  <div className="service-icon">{item.icon}</div>
                  <span className="text-sm font-bold text-blue-300">
                    {item.no}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.desc}
                </p>
                <a href="#kontak" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Konsultasikan <Icon name="arrow" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">PRODUK KAMI</p>
              <h2 className="section-title">Pilihan Produk IDQODE.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500">
              Pilih produk yang sesuai dengan kebutuhan dan gaya identitas
              profesionalmu.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.no} className="product-card">
                <CardMockup type={product.type} />

                <div className="p-7">
                  <p className="eyebrow">{product.category}</p>
                  <h3 className="mt-3 text-2xl font-bold">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {product.desc}
                  </p>

                  <div className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span className="text-xs font-medium text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {product.type === "carton" && (
                    <div className="mt-6 rounded-2xl bg-[#f1f7fd] p-4">
                      <p className="text-xs font-bold">Pilihan Bentuk Kartu</p>
                      <div className="mt-3 flex gap-2">
                        {["Sharp", "Rounded"].map((item) => (
                          <button
                            key={item}
                            onClick={() => setShape(item)}
                            className={`option-button ${
                              shape === item ? "option-active" : ""
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      <p className="mt-5 text-xs font-bold">Pilihan Finishing</p>
                      <div className="mt-3 flex gap-2">
                        {["Glossy", "Doff"].map((item) => (
                          <button
                            key={item}
                            onClick={() => setFinish(item)}
                            className={`option-button ${
                              finish === item ? "option-active" : ""
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      <p className="mt-4 text-[10px] text-slate-500">
                        Pilihan: {shape} • {finish}
                      </p>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Halo IDQODE, saya tertarik dengan ${product.title}. ${
                        product.type === "carton"
                          ? `Pilihan bentuk: ${shape}, finishing: ${finish}.`
                          : ""
                      } Mohon informasi lebih lanjut.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button mt-7 w-full"
                  >
                    Tanya Produk <Icon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="section-padding bg-[#102a56] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow-light">MENGAPA IDQODE?</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Lebih dari Sekadar Kartu Nama.
            </h2>
            <p className="mt-5 text-sm leading-7 text-blue-100/70">
              Kami menggabungkan kreativitas dan teknologi untuk menghadirkan
              identitas yang lebih praktis dan profesional.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["✦", "Desain Sesuai Kebutuhan", "Desain memperhatikan karakter dan identitas pelanggan."],
              ["▣", "Pilihan Produk", "Tersedia kartu NFC, Art Carton, dan desain saja."],
              ["▦", "Teknologi Digital", "QR Code dan NFC memudahkan berbagi informasi."],
              ["◇", "Tampilan Profesional", "Desain memperhatikan estetika dan keterbacaan."],
              ["✧", "Pilihan Finishing", "Art Carton tersedia dengan finishing Glossy dan Doff."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="border-t border-white/20 pt-6">
                <p className="text-3xl text-blue-300">{icon}</p>
                <h3 className="mt-6 font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-7 text-blue-100/70">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio" className="section-padding bg-[#f1f7fd]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">PORTOFOLIO</p>
            <h2 className="section-title">Inspirasi Desain.</h2>
            <p className="body-copy mt-5">
              Beberapa contoh konsep desain kartu nama yang dapat menjadi
              inspirasi untuk identitas profesional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Identitas Digital", "nfc", "KARTU NFC"],
              ["Kartu Profesional", "carton", "ART CARTON"],
              ["Desain Personal", "design", "DESAIN"],
            ].map(([title, type, label]) => (
              <div key={title} className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
                <CardMockup type={type} />
                <div className="flex items-center justify-between p-3">
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-[10px] font-semibold tracking-widest text-blue-500">
                      {label}
                    </p>
                  </div>
                  <span className="text-xl text-blue-500">↗</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-xs text-slate-400">
            Ilustrasi konsep produk. Gambar dapat diganti dengan hasil desain asli IDQODE.
          </p>
        </div>
      </section>

      {/* TIM */}
      <section id="tim" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="eyebrow">TIM KAMI</p>
            <h2 className="section-title">Di Balik IDQODE.</h2>
            <p className="body-copy mx-auto mt-5 max-w-xl">
              Tim yang bekerja sama dalam menghadirkan layanan dan produk
              kreatif IDQODE.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map(([name, role], index) => (
              <div key={name} className="team-card">
                <div className="team-avatar">{name.charAt(0)}</div>
                <p className="mt-5 text-base font-bold">{name}</p>
                <p className="mt-2 text-xs font-medium text-blue-500">{role}</p>
                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-blue-200" />
                <p className="mt-4 text-[10px] text-slate-400">
                  ANGGOTA {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="section-padding bg-[#eaf3ff]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">HUBUNGI KAMI</p>
            <h2 className="section-title">
              Mari Bangun Identitas Profesional Bersama IDQODE.
            </h2>
            <p className="body-copy mt-6">
              Memiliki pertanyaan atau ingin memesan kartu nama? Hubungi
              IDQODE untuk mendapatkan informasi lebih lanjut mengenai
              layanan dan produk yang tersedia.
            </p>

            <div className="mt-10 space-y-6">
              {[
                ["phone", "WhatsApp", "+62 857-6256-9023"],
                ["mail", "Email", "idqode.contact@gmail.com"],
                ["instagram", "Instagram", "@idqode"],
                ["pin", "Alamat", "Pademangan Timur, Kecamatan Pademangan, Jakarta Utara, DKI Jakarta 14410"],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-blue-600">
                    <Icon name={icon} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-bold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={sendMessage} className="rounded-[28px] bg-white p-7 shadow-xl shadow-blue-900/5 md:p-10">
            <h3 className="text-2xl font-bold">Kirim Pesan</h3>
            <p className="mt-2 text-sm text-slate-400">
              Isi formulir berikut untuk menghubungi kami melalui WhatsApp.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="form-label">Nama Lengkap</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Masukkan nama Anda"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Alamat Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="nama@email.com"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Jenis Layanan</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="form-input"
                >
                  <option>Kartu NFC</option>
                  <option>Kartu Art Carton</option>
                  <option>Desain Saja</option>
                  <option>Informasi Lainnya</option>
                </select>
              </div>

              {form.service === "Kartu Art Carton" && (
                <div className="rounded-xl bg-[#f1f7fd] p-4">
                  <p className="form-label">Bentuk Kartu</p>
                  <div className="mt-2 flex gap-2">
                    {["Sharp", "Rounded"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setShape(item)}
                        className={`option-button ${shape === item ? "option-active" : ""}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <p className="form-label mt-4">Finishing</p>
                  <div className="mt-2 flex gap-2">
                    {["Glossy", "Doff"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFinish(item)}
                        className={`option-button ${finish === item ? "option-active" : ""}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="form-label">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                  className="form-input resize-none"
                />
              </div>

              <button type="submit" className="primary-button w-full">
                Kirim melalui WhatsApp <Icon name="arrow" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102a56] px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <a href="#beranda" className="text-3xl font-black tracking-[.12em]">
              IDQODE<span className="text-blue-300">.</span>
            </a>
            <p className="mt-3 text-xs font-semibold tracking-[.2em] text-blue-200">
              IDENTITASMU, KINI LEBIH DIGITAL.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/70">
              Solusi desain kreatif dan kartu nama untuk mendukung identitas
              profesional di era digital.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Navigasi</h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {menu.map(([label, href]) => (
                <a key={href} href={href} className="text-xs text-blue-100/70 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Informasi Kontak</h3>
            <div className="mt-5 space-y-4 text-xs text-blue-100/70">
              <p>+62 857-6256-9023</p>
              <p>idqode.contact@gmail.com</p>
              <a href="https://instagram.com/idqode" target="_blank" rel="noreferrer">
                Instagram: @idqode
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-blue-100/50 md:flex-row">
          <p>© {new Date().getFullYear()} IDQODE. Seluruh hak cipta dilindungi.</p>
          <a href="#beranda" className="hover:text-white">
            Kembali ke atas ↑
          </a>
        </div>
      </footer>

      {/* TOMBOL WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi IDQODE melalui WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#173b70] text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-blue-600"
      >
        <Icon name="message" />
      </a>
    </main>
  );
}
