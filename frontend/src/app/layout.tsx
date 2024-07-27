import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "./components/common/ThemeProvider";
import Header from "./components/common/header/Header";
import StoreProvider from "./StoreProvider";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/youtube.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div id="youtube">
          <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div>{children}</div>
          </ThemeProvider>
        </StoreProvider>
        </div>
        
      </body>
    </html>
  );
}
