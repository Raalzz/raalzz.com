import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Sawant",
  description:
    "Solutions Architect and Frontend lead at AntStack. Building web apps at the intersection of Frontend and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <header className="flex items-center gap-4 px-6 pt-6 pb-3 md:hidden">
          <h1 className="text-sm font-bold tracking-wide text-foreground">
            Rahul Sawant
          </h1>
        </header>

        <div className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-10 md:grid md:grid-cols-[160px_1fr] md:gap-12 md:pt-10 pb-10">
          <aside className="flex flex-col">
            {/* Nav — horizontal on mobile, vertical on desktop */}
            <div className="md:mt-10 pb-3 md:pb-0">
              <Nav />
            </div>
          </aside>

          <main className="py-4 md:py-0">
            <h1 className="hidden md:block text-sm font-bold tracking-wide text-foreground mb-10">
              Rahul Sawant
            </h1>
            {children}
          </main>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
