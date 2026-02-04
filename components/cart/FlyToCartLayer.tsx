"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

interface TargetPoint {
  x: number;
  y: number;
}

export const FlyToCartLayer = () => {
  const { flyOrigin, resetFly } = useCart();
  const [target, setTarget] = useState<TargetPoint | null>(null);

  useEffect(() => {
    if (!flyOrigin) {
      setTarget(null);
      return;
    }
    const anchor = document.getElementById("cart-anchor");
    if (!anchor) {
      setTarget(null);
      return;
    }
    const rect = anchor.getBoundingClientRect();
    setTarget({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  }, [flyOrigin]);

  return (
    <AnimatePresence>
      {flyOrigin && target ? (
        <motion.div
          key={flyOrigin.key}
          initial={{
            opacity: 0.9,
            scale: 1,
            x: flyOrigin.x,
            y: flyOrigin.y,
          }}
          animate={{
            opacity: 0,
            scale: 0.2,
            x: target.x,
            y: target.y,
          }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          onAnimationComplete={resetFly}
          className="pointer-events-none fixed z-[70] h-3 w-3 rounded-full bg-ember-400 shadow-glow"
        />
      ) : null}
    </AnimatePresence>
  );
};
