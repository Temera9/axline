"use client";

import { useScrollEffects } from "../hooks/useScrollEffects";
import { useEffect } from "react";

declare global {
  interface Window {
    ScrollEffects: () => void;
  }
}

interface ScrollEffectsProviderProps {
  children: React.ReactNode;
}

export default function ScrollEffectsProvider({
  children,
}: ScrollEffectsProviderProps) {
  useScrollEffects();

  useEffect(() => {
    // Rendre ScrollEffects disponible globalement pour compatibilité
    if (typeof window !== "undefined") {
      window.ScrollEffects = () => {
        // Cette fonction est maintenant gérée par le hook useScrollEffects
        console.log("ScrollEffects called via global function");
      };
    }
  }, []);

  return <>{children}</>;
}
