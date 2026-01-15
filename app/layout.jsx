import { Sometype_Mono } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tsilaky | Développeur Fullstack",
    template: "%s | Tsilaky"
  },
  description: "Portfolio de Tsilaky, développeur Fullstack spécialisé en React, Next.js et solutions web modernes. Découvrez mes projets et expertises.",
  keywords: ["Développeur Web", "Fullstack", "React", "Next.js", "Madagascar", "Portfolio"],
  authors: [{ name: "Tsilaky" }],
  creator: "Tsilaky",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tsilaky-portfolio.vercel.app/",
    title: "Tsilaky | Développeur Fullstack",
    description: "Conception d'applications web modernes et performantes. Explorez mon univers et mes réalisations.",
    siteName: "Tsilaky Portfolio",
    images: [
      {
        url: "/assets/work/img5.png", 
        width: 1200,
        height: 630,
        alt: "Aperçu du Portfolio de Tsilaky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsilaky | Développeur Fullstack",
    description: "Découvrez mon portfolio de développeur Fullstack.",
    images: ["/assets/work/img5.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased overflow-hidden relative`}>
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            {/* main nav */}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary"><MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
