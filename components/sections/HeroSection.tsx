import Link from "next/link";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
}

export const HeroSection = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-foreground text-background">
      {backgroundImage && (
        <div className={`absolute inset-0 ${overlay ? "opacity-40" : ""}`}>
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="relative z-10 px-8 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-background/70">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-balance text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground no-underline transition-all duration-300 hover:bg-background/90"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-background/40 px-6 py-3 text-sm font-medium text-background no-underline transition-all duration-300 hover:border-background"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
