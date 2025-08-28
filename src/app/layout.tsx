import type { Metadata } from "next";
import { DM_Serif_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AdminPanel } from "./components/AdminPanel";
import SessionProvider from "./components/SessionProvider";
import { AuthHeader } from "./components/AuthHeader";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Big Map Directory",
  description: "Your one-stop shop for early childhood education services and support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${openSans.variable} antialiased`}
      >
        <SessionProvider session={null}>
          <ThemeProvider>
            <div className="relative min-h-screen">
              <header className="bg-card border-b border-border py-3">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-card-foreground font-serif">Big Map</h2>
                  </div>
                  <AuthHeader />
                </div>
              </header>
              <main className="pb-16">
                {children}
              </main>
            </div>
            <AdminPanel />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
