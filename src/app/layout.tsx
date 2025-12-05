import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtSport - Ат спорты әлемі | Қазақстанның бірінші ат спорты қосымшасы",
  description: "AtSport - барлық ат спорты түрлері бір қосымшада. Көкпар, байга және басқа да ат спорты іс-шараларын табыңыз, ат сатыңыз, қызметтерді пайдаланыңыз.",
  keywords: "ат спорт, көкпар, байга, кокпар, ат сату, коневозка, атбегі, конный спорт, казахстан",
  openGraph: {
    title: "AtSport - Ат спорты әлемі",
    description: "Қазақстанның бірінші ат спорты қосымшасы. Көкпар, байга және барлық ат спорты түрлері.",
    type: "website",
    locale: "kk_KZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
