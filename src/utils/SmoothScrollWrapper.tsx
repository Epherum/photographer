// src/utils/SmoothScrollWrapper.tsx
"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { LenisProvider } from "@/context/LenisContext";

function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

function LenisContextProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  const value = useMemo(
    () => ({
      start: () => lenis?.start(),
      stop: () => lenis?.stop(),
    }),
    [lenis]
  );

  return <LenisProvider value={value}>{children}</LenisProvider>;
}

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.06,
        wheelMultiplier: 1.3
      }}
    >
      <ScrollToTop />
      <LenisContextProvider>{children}</LenisContextProvider>
    </ReactLenis>
  );
}