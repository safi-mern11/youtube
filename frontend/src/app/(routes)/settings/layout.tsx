import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Sidebar from "@/app/components/settings/Sidebar";
import Header from "@/app/components/common/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube",
  description: "Watch anything you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Sidebar />
          {children}
        </ThemeProvider>
      </div>
  );
}
