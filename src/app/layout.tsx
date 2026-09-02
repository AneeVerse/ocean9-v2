import type { Metadata } from "next";
import { DM_Sans, Poppins, Roboto, Oswald, Cinzel } from "next/font/google";
import "./globals.css";
import FloatingActionButton from "@/components/FloatingActionButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ocean 9 - Reliable Underwater Diving, Marine & Offshore Services",
  description:
    "Ocean 9 provides safe and practical solutions for diving, subsea, marine and underwater projects.",
  keywords: [
    "Underwater Diving",
    "Marine Services",
    "Offshore Operations",
    "Air Diving",
    "Saturation Diving",
    "Ocean 9",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable} ${roboto.variable} ${oswald.variable} ${cinzel.variable} font-sans scroll-smooth`}>
      <body className="bg-[#030A16] text-white antialiased font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white">
        {children}
        <FloatingActionButton />
      </body>
    </html>
  );
}
