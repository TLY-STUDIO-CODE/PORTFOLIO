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
  description: "Portfolio de Tsilaky, Développeur Fullstack spécialisé en solutions web modernes et design UI/UX.",
  keywords: ["Développeur Fullstack", "React", "Next.js", "Portfolio", "Tsilaky"],
  authors: [{ name: "Tsilaky" }],
  creator: "Tsilaky",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tsilaky-portfolio.vercel.app/",
    title: "Tsilaky | Développeur Fullstack",
    description: "Découvrez mes projets et mon expertise en développement web.",
    siteName: "Tsilaky Portfolio",
    images: [
      {
        url: "/assets/work/img1.png", // Assurez-vous que cette image existe dans public/
        width: 1200,
        height: 630,
        alt: "Aperçu du Portfolio de Tsilaky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsilaky | Développeur Fullstack",
    description: "Portfolio professionnel et projets récents.",
    images: ["/assets/work/img1.png"],
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
