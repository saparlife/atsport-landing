import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtSport - Көкпар әлемі | Қазақстанның бірінші көкпар қосымшасы",
  description: "AtSport - көкпар іс-шараларын табыңыз, ат сатыңыз және сатып алыңыз, қызметтерді пайдаланыңыз. Қазақстанның бірінші көкпар қосымшасы iOS және Android платформаларында.",
  keywords: "көкпар, кокпар, ат сату, коневозка, атбегі, той басшы, казахстан, ат спорт",
  openGraph: {
    title: "AtSport - Көкпар әлемі",
    description: "Қазақстанның бірінші көкпар қосымшасы",
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
