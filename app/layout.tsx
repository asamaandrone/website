import type { Metadata } from "next";
import { Instrument_Sans, Michroma, Chakra_Petch } from "next/font/google";
import "./globals.css";

const font = Michroma({
  subsets: ["latin"],
  weight: "400"
});
const bodyStyles = " dark"

export const metadata: Metadata = {
  title: "Asamaan",
  description: "Building the next generation of autonomous vehicles & softwares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className + bodyStyles}>{children}</body>
    </html>
  );
}
