import clsx from "clsx";
import type { ReactNode } from "react";

interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export const CinematicReveal = ({
  children,
  className,
  delayMs = 0,
}: CinematicRevealProps) => {
  return (
    <div
      className={clsx("transition duration-700 ease-out", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
      data-animation="cinematic-reveal"
    >
      {children}
    </div>
  );
};
