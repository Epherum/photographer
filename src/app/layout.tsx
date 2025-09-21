"use client";
import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";
import { silk, nunito } from "./fonts";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="en">
      <ViewTransitions>
        <body
          suppressHydrationWarning
          className={`${silk.variable} ${nunito.variable} antialiased`}
        >
          <Nav onMenuToggle={toggleMenu} menuOpen={menuOpen} />
          <Menu isOpen={menuOpen} onClose={closeMenu} />
          <main>
            <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          </main>
          <Footer />
        </body>
      </ViewTransitions>
    </html>
  );
}
