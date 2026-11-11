
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDQODE | Identitasmu, Kini Lebih Digital",
  description:
    "IDQODE menyediakan jasa desain kartu nama, kartu NFC, dan kartu Art Carton dengan QR Code untuk kebutuhan identitas profesional.",
  keywords: [
    "IDQODE",
    "Kartu Nama",
    "Kartu NFC",
    "QR Code",
    "Desain Kartu Nama",
    "Kartu Art Carton",
  ],
  authors: [{ name: "IDQODE" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
