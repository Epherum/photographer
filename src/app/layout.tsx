import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { silk, nunito } from "./fonts";

export const metadata: Metadata = {
  title: "Yesser Barka - Photographer",
  description: "Global Luxury Destination Wedding & Editorial Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ViewTransitions>
        <body
          suppressHydrationWarning
          className={`${silk.variable} ${nunito.variable} antialiased`}
        >
          <Nav />
          <main>
            <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          </main>
          <Footer />
        </body>
      </ViewTransitions>
    </html>
  );
}
