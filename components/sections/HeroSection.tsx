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
    <section className="relative overflow-hidden rounded-[36px] bg-ink-900 text-pearl-50">
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
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-pearl-200">
              {eyebrow}
            </p>
          )}
          <h1 className="text-serifs text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-pearl-200 md:text-base">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-pearl-50 px-6 py-3 text-sm font-semibold text-ink-900 transition duration-160 hover:bg-pearl-100"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-pearl-50/40 px-6 py-3 text-sm font-semibold text-pearl-50 transition duration-160 hover:border-pearl-50"
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
