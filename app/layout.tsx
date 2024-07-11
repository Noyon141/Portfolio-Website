import { Navbar } from "@/components/Navbar";
import cn from "@/lib/cn";
import LocomotiveProvider from "@/providers/locomotiveProvider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "200", "900"],
});

export const metadata: Metadata = {
  title: "Mofijur Rahman - Portfolio",
  description: "Mofijur Rahman's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LocomotiveProvider>
        <body className={cn("text-white ", urbanist.className)}>
          <div className="py-4 min-w-screen min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900">
            <div className="h-16">
              <Navbar />
            </div>
            <div className="h-[calc(100vh-4rem)]">{children}</div>
          </div>
        </body>
      </LocomotiveProvider>
    </html>
  );
}
