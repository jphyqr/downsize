import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For Sale By Owner - FSBO",
  description: "Marketplace for buying and selling homes by owner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                   <NavBar/>
                   <main  className=' py-5 md:py-50  md:px-5 lg:px-16'>
        {children}
        <Toaster />
        </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
