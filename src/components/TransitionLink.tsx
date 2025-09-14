"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

function pageAnimate() {
  // Old page slides out to the left
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-50px)" },
    ],
    {
      duration: 400,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  // New page slides in from the right
  document.documentElement.animate(
    [
      { opacity: 0, transform: "translateX(50px)" },
      { opacity: 1, transform: "translateX(0)" },
    ],
    {
      duration: 400,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

interface TransitionLinkProps extends LinkProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({
  children,
  href,
  onClick,
  ...props
}: PropsWithChildren<TransitionLinkProps>) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    e.preventDefault();

    if (href.toString() === pathname) {
      return;
    }

    router.push(href.toString(), { onTransitionReady: pageAnimate });
  };

  return (
    <Link href={href} {...props} onClick={handleLinkClick}>
      {children}
    </Link>
  );
}