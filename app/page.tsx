
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Smartphone,
  Palette,
  CreditCard,
  QrCode,
  Wifi,
  Check,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Layers,
  MonitorSmartphone,
  MessageCircle,
} from "lucide-react";

const WHATSAPP = "6285762569023";

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tim Kami", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Jasa Desain Kartu Nama",
    description:
      "Pembuatan desain kartu nama yang disesuaikan dengan kebutuhan, karakter, dan identitas visual pelanggan.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Desain dan Kartu Fisik",
    description:
      "Layanan pembuatan desain sekaligus penyediaan kartu nama fisik melalui proses pemesanan percetakan.",
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Desain Saja",
    description:
      "Layanan pembuatan desain kartu nama dalam bentuk file digital tanpa pemesanan kartu fisik.",
  },
];

const products = [
  {
    number: "01",
    name: "Kartu NFC",
    category: "KARTU DIGITAL",
    description:
      "Kartu nama dengan teknologi NFC untuk memudahkan berbagi informasi kontak secara digital.",
    features: ["Teknologi NFC", "Berbagi informasi digital", "Desain profesional"],
    type: "nfc",
  },
  {
    number: "02",
    name: "Kartu Art Carton",
    category: "KARTU FISIK",
    description:
      "Kartu nama berbahan Art Carton yang dilengkapi QR Code dan memiliki pilihan bentuk serta finishing.",
    features: ["QR Code", "Sharp dan Rounded", "Glossy dan Doff"],
    type: "carton",
  },
  {
    number: "03",
    name: "Desain Saja",
    category: "FILE DIGITAL",
    description:
      "Desain kartu nama sesuai identitas dan kebutuhan pelanggan dalam bentuk file digital.",
    features: ["Desain sesuai kebutuhan", "File digital", "Tanpa kartu fisik"],
    type: "design",
  },
];

const team = [
  { name: "Masratu Siti Suaibah", role: "Direktur", number: "01" },
  { name: "Amartya Nadiva R", role: "Divisi Pemasaran", number: "02" },
  { name: "Saskia Althafunissa", role: "Divisi Pelayanan", number: "03" },
  { name: "Kasih Afrillia", role: "Divisi Produk dan Desain", number: "04" },
  { name: "Izul Alfi'al Arif D", role: "Divisi Keuangan", number: "05" },
];

function CardMockup({ type }: { type: string }) {
  return (
    <div className="relative flex min-h-[245px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eaf3ff] via-[#d7e8fc] to-[#c2dcfa] p-5">
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/60" />
      <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/60" />

      {type === "nfc" && (
        <div className="relative w-full max-w-[300px] rotate-[-7deg] rounded-2xl bg-gradient-to-br from-[#173b70] to-[#10264b] p-6 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold tracking-[0.2em]">IDQODE.</span>
            <Wifi size={22} />
          </div>
          <div className="mt-9">
            <p className="text-[10px] tracking-[0.25em] text-blue-200">
              KARTU NAMA DIGITAL
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">
              Your Identity.
            </p>
          </div>
          <div className="mt-7 flex items-end justify-between">
            <span className="text-xs tracking-widest text-blue-200">
              CONNECT DIGITALLY
            </span>
            <div className="rounded-full border border-white/40 p-2">
              <Wifi size={19} />
            </div>
          </div>
        </div>
      )}

      {type === "carton" && (
        <div className="relative w-full max-w-[300px] rotate-[5deg] rounded-xl border border-blue-100 bg-white p-6 text-[#173b70] shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold tracking-[0.2em]">
              IDQODE.
            </span>
            <span className="text-[9px] tracking-widest text-blue-400">
              PERSONAL CARD
            </span>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">Nama Anda</div>
              <p className="mt-1 text-[10px] tracking-widest text-blue-500">
                PROFESSIONAL IDENTITY
              </p>
            </div>
            <div className="rounded-lg bg-[#173b70] p-3 text-white">
              <QrCode size={36} />
            </div>
          </div>
          <div className="mt-8 h-1 w-12 rounded-full bg-blue-400" />
          <p className="mt-2 text-[9px] tracking-widest text-blue-400">
            YOUR IDENTITY, YOUR STORY.
          </p>
        </div>
      )}

      {type === "design" && (
        <div className="relative w-full max-w-[300px] rounded-2xl border border-white bg-white/90 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold tracking-[0.2em] text-[#173b70]">
              IDQODE.
            </span>
            <Palette className="text-blue-400" size={22} />
          </div>
          <div className="mt-8">
            <p className="text-[10px] tracking-[0.2em] text-blue-400">
              DESAIN KREATIF
            </p>
            <p className="mt-2 text-3xl font-bold text-[#173b70]">
              Your Name.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Identitas profesional dalam satu desain.
            </p>
          </div>
          <div className="mt-7 flex gap-2">
            <div className="h-2 w-12 rounded-full bg-[#173b70]" />
            <div className="h-2 w-8 rounded-full bg-blue-300" />
            <div className="h-2 w-5 rounded-full bg-blue-100" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedShape, setSelectedShape] = useState("Rounded");
  const [selectedFinish, setSelectedFinish] = useState("Glossy");

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Kartu NFC",
    message: "",
  });

  function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = [
      "Halo IDQODE, saya ingin mendapatkan informasi mengenai layanan.",
      "",
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `Layanan: ${form.service}`,
      `Pesan: ${form.message}`,
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
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#beranda" className="group">
            <span className="text-2xl font-black tracking-[0.12em] text-[#173b70]">
              IDQODE<span className="text-blue-400">.</span>
            </span>
            <span className="block text-[9px] font-semibold tracking-[0.3em] text-slate-400">
              IDENTITAS DIGITAL KREATIF
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-semibold text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontak"
            className="hidden items-center gap-2 rounded-full bg-[#173b70] px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-600 lg:flex"
          >
            Hubungi Kami <ArrowUpRight size={15} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-blue-100 p-2 lg:hidden"
            aria-label="Buka menu navigasi"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-[#173b70]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* BERANDA */}
      <section
        id="beranda"
        className="relative overflow-hidden bg-[#102a56] text-white"
      >
        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-blue-300/10" />
        <div className="absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-blue-300/10" />
        <div className="absolute -bottom-48 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/5 px-4 py-2">
              <Sparkles size={14} className="text-blue-300" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200">
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
              <a
                href="#produk"
                className="inline-flex items-center gap-3 rounded-full bg-[#dcecff] px-7 py-4 text-sm font-bold text-[#173b70] transition hover:bg-white"
              >
                Lihat Produk <ArrowRight size={17} />
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Tentang IDQODE <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-7">
              <div>
                <p className="text-xl font-bold">Kreatif</p>
                <p className="mt-1 text-xs text-blue-200">Desain personal</p>
              </div>
              <div>
                <p className="text-xl font-bold">Modern</p>
                <p className="mt-1 text-xs text-blue-200">Teknologi digital</p>
              </div>
              <div>
                <p className="text-xl font-bold">Praktis</p>
                <p className="mt-1 text-xs text-blue-200">Identitas profesional</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <CardMockup type="nfc" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <Wifi className="mb-2 text-blue-200" size={21} />
                  <p className="text-xs font-bold">Teknologi NFC</p>
                  <p className="mt-1 text-[10px] text-blue-200">
                    Berbagi informasi
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <QrCode className="mb-2 text-blue-200" size={21} />
                  <p className="text-xs font-bold">QR Code</p>
                  <p className="mt-1 text-[10px] text-blue-200">
                    Akses lebih praktis
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white px-5 py-4 text-[#173b70] shadow-xl">
              <p className="text-[10px] font-semibold tracking-widest text-blue-400">
                IDENTITASMU
              </p>
              <p className="text-sm font-bold">Kini Lebih Digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              TENTANG KAMI
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#173b70] md:text-5xl">
              Mengenal Lebih Dekat IDQODE.
            </h2>
            <p className="mt-7 text-sm leading-8 text-slate-500">
              IDQODE merupakan usaha di bidang desain kreatif yang berfokus
              pada pembuatan identitas profesional melalui kartu nama. Kami
              menyediakan layanan desain sesuai kebutuhan pelanggan serta
              pilihan kartu fisik yang menggabungkan tampilan menarik dengan
              teknologi digital.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-500">
              Melalui perpaduan kreativitas dan teknologi, IDQODE berupaya
              memberikan solusi identitas yang praktis, modern, dan dapat
              digunakan untuk mendukung kebutuhan personal maupun bisnis.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#eff6ff] p-5">
                <Sparkles className="mb-3 text-blue-500" size={23} />
                <p className="font-bold">Kreativitas</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Mengutamakan desain yang menarik dan sesuai kebutuhan.
                </p>
              </div>
              <div className="rounded-2xl bg-[#eff6ff] p-5">
                <Layers className="mb-3 text-blue-500" size={23} />
                <p className="font-bold">Inovasi</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Menggabungkan desain dengan teknologi digital.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#eaf3ff] p-7 md:p-10">
            <div className="rounded-2xl bg-[#173b70] p-7 text-white">
              <p className="text-xs font-bold tracking-[0.2em] text-blue-200">
                VISI KAMI
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Menjadi Identitas Profesional yang Lebih Baik.
              </h3>
              <p className="mt-4 text-sm leading-7 text-blue-100">
                Menjadi penyedia layanan desain dan kartu nama yang kreatif,
                inovatif, serta mampu mendukung kebutuhan identitas profesional
                di era digital.
              </p>
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold tracking-[0.2em] text-blue-500">
                MISI KAMI
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "Menghasilkan desain kartu nama yang menarik dan sesuai kebutuhan pelanggan.",
                  "Menyediakan pilihan kartu nama dengan tampilan dan fungsi yang beragam.",
                  "Memanfaatkan QR Code dan NFC untuk mempermudah pertukaran informasi.",
                  "Memberikan pelayanan yang responsif dan mengutamakan kepuasan pelanggan.",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Check size={14} className="text-blue-600" />
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="bg-[#f1f7fd] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              LAYANAN KAMI
            </p>
            <h2 className="mt-4 text-4xl font-bold text-[#173b70] md:text-5xl">
              Solusi untuk Identitasmu.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Kami menyediakan pilihan layanan yang dapat disesuaikan dengan
              kebutuhan identitas personal maupun bisnis.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="group rounded-3xl border border-blue-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-[#eaf3ff] p-4 text-blue-600">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-blue-300">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-[#173b70]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                  <a
                    href="#kontak"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                  >
                    Konsultasikan <ArrowUpRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
                PRODUK KAMI
              </p>
              <h2 className="mt-4 text-4xl font-bold text-[#173b70] md:text-5xl">
                Pilihan Produk IDQODE.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500">
              Pilih produk yang sesuai dengan kebutuhan dan gaya identitas
              profesionalmu.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.number}
                className="overflow-hidden rounded-3xl border border-blue-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CardMockup type={product.type} />
                <div className="p-7">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-blue-500">
                    {product.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#173b70]">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {product.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check size={16} className="text-blue-500" />
                        <span className="text-xs font-medium text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  {product.type === "carton" && (
                    <div className="mt-6 rounded-2xl bg-[#f1f7fd] p-4">
                      <p className="text-xs font-bold text-[#173b70]">
                        Pilihan Kartu Art Carton
                      </p>
                      <div className="mt-4">
                        <p className="text-[10px] font-semibold text-slate-500">
                          BENTUK KARTU
                        </p>
                        <div className="mt-2 flex gap-2">
                          {["Sharp", "Rounded"].map((shape) => (
                            <button
                              key={shape}
                              onClick={() => setSelectedShape(shape)}
                              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                selectedShape === shape
                                  ? "bg-[#173b70] text-white"
                                  : "bg-white text-slate-600"
                              }`}
                            >
                              {shape}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-[10px] font-semibold text-slate-500">
                          FINISHING
                        </p>
                        <div className="mt-2 flex gap-2">
                          {["Glossy", "Doff"].map((finish) => (
                            <button
                              key={finish}
                              onClick={() => setSelectedFinish(finish)}
                              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                selectedFinish === finish
                                  ? "bg-[#173b70] text-white"
                                  : "bg-white text-slate-600"
                              }`}
                            >
                              {finish}
                            </button>
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 text-[10px] text-slate-500">
                        Pilihan: {selectedShape} • {selectedFinish}
                      </p>
                    </div>
                  )}
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Halo IDQODE, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#173b70] py-3.5 text-xs font-bold text-white transition hover:bg-blue-600"
                  >
                    Tanya Produk <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-[#102a56] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-300">
              MENGAPA IDQODE?
            </p>
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
              {
                icon: Palette,
                title: "Desain Sesuai Kebutuhan",
                desc: "Desain dibuat dengan memperhatikan karakter dan identitas pelanggan.",
              },
              {
                icon: Layers,
                title: "Pilihan Produk",
                desc: "Tersedia kartu NFC, Art Carton, dan desain saja.",
              },
              {
                icon: QrCode,
                title: "Teknologi Digital",
                desc: "QR Code dan NFC memudahkan berbagi informasi kontak.",
              },
              {
                icon: Sparkles,
                title: "Tampilan Profesional",
                desc: "Desain memperhatikan estetika dan keterbacaan.",
              },
              {
                icon: CreditCard,
                title: "Pilihan Finishing",
                desc: "Art Carton tersedia dalam finishing Glossy dan Doff.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-white/20 pt-6">
                  <Icon size={27} className="text-blue-300" />
                  <h3 className="mt-6 text-base font-bold">{item.title}</h3>
                  <p className="mt-3 text-xs leading-7 text-blue-100/70">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio" className="bg-[#f1f7fd] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              PORTOFOLIO
            </p>
            <h2 className="mt-4 text-4xl font-bold text-[#173b70] md:text-5xl">
              Inspirasi Desain.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Beberapa contoh konsep desain kartu nama yang dapat menjadi
              inspirasi untuk identitas profesional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Identitas Digital", type: "nfc", label: "NFC" },
              { title: "Kartu Profesional", type: "carton", label: "ART CARTON" },
              { title: "Desain Personal", type: "design", label: "DESAIN" },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm"
              >
                <CardMockup type={item.type} />
                <div className="flex items-center justify-between p-3">
                  <div>
                    <p className="font-bold text-[#173b70]">{item.title}</p>
                    <p className="mt-1 text-[10px] font-semibold tracking-widest text-blue-500">
                      {item.label}
                    </p>
                  </div>
                  <ArrowUpRight className="text-blue-500" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-xs text-slate-400">
            Ilustrasi konsep produk. Gambar dapat diganti dengan hasil desain
            asli IDQODE.
          </p>
        </div>
      </section>

      {/* TIM */}
      <section id="tim" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              TIM KAMI
            </p>
            <h2 className="mt-4 text-4xl font-bold text-[#173b70] md:text-5xl">
              Di Balik IDQODE.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Tim yang bekerja sama dalam menghadirkan layanan dan produk
              kreatif IDQODE.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <div
                key={member.number}
                className="rounded-3xl border border-blue-100 bg-[#f7faff] p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#173b70] to-[#6aa5e8] text-2xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <p className="mt-5 text-base font-bold text-[#173b70]">
                  {member.name}
                </p>
                <p className="mt-2 text-xs font-medium text-blue-500">
                  {member.role}
                </p>
                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-blue-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="bg-[#eaf3ff] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              HUBUNGI KAMI
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#173b70] md:text-5xl">
              Mari Bangun Identitas Profesional Bersama IDQODE.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-500">
              Memiliki pertanyaan atau ingin memesan kartu nama? Hubungi
              IDQODE untuk mendapatkan informasi lebih lanjut mengenai
              layanan dan produk yang tersedia.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-white p-3 text-blue-600">
                  <Phone size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp</p>
                  <p className="mt-1 text-sm font-bold text-[#173b70]">
                    +62 857-6256-9023
                  </p>
                </div>
              </a>

              <a
                href="mailto:idqode.contact@gmail.com"
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-white p-3 text-blue-600">
                  <Mail size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="mt-1 text-sm font-bold text-[#173b70]">
                    idqode.contact@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/idqode"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-white p-3 text-blue-600">
                  <Instagram size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Instagram</p>
                  <p className="mt-1 text-sm font-bold text-[#173b70]">
                    @idqode
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600">
                  <MapPin size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Alamat</p>
                  <p className="mt-1 max-w-xs text-sm font-bold leading-6 text-[#173b70]">
                    Pademangan Timur, Kecamatan Pademangan, Jakarta Utara,
                    DKI Jakarta 14410
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={sendMessage}
            className="rounded-[28px] bg-white p-7 shadow-xl shadow-blue-900/5 md:p-10"
          >
            <h3 className="text-2xl font-bold text-[#173b70]">
              Kirim Pesan
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Isi formulir berikut untuk menghubungi kami melalui WhatsApp.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold text-[#173b70]">
                  Nama Lengkap
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Masukkan nama Anda"
                  className="w-full rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-[#173b70]">
                  Alamat Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-[#173b70]">
                  Jenis Layanan
                </label>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-slate-700 outline-none focus:border-blue-400"
                >
                  <option>Kartu NFC</option>
                  <option>Kartu Art Carton</option>
                  <option>Desain Saja</option>
                  <option>Informasi Lainnya</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-[#173b70]">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                  className="w-full resize-none rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-slate-700 outline-none focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#173b70] py-4 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Kirim melalui WhatsApp <ArrowUpRight size={17} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102a56] px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <a href="#beranda" className="text-3xl font-black tracking-[0.12em]">
              IDQODE<span className="text-blue-300">.</span>
            </a>
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-blue-200">
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
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs text-blue-100/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Informasi Kontak</h3>
            <div className="mt-5 space-y-4 text-xs text-blue-100/70">
              <p>+62 857-6256-9023</p>
              <p>idqode.contact@gmail.com</p>
              <a
                href="https://instagram.com/idqode"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Instagram size={15} /> @idqode
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

      {/* TOMBOL WHATSAPP MENGAMBANG */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi IDQODE melalui WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#173b70] text-white shadow-xl shadow-blue-900/20 transition hover:scale-110 hover:bg-blue-600"
      >
        <MessageCircle size={25} />
      </a>
    </main>
  );
}
