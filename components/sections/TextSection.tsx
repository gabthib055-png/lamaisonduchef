import Link from "next/link";

interface TextSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  cta?: {
    label: string;
    href: string;
  };
  children?: React.ReactNode;
}

export const TextSection = ({
  eyebrow,
  title,
  description,
  align = "center",
  cta,
  children,
}: TextSectionProps) => {
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section className="py-16 md:py-24">
      <div className={`max-w-2xl ${alignmentClasses}`}>
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ink-500">
            {eyebrow}
          </p>
        )}
        <h2 className="text-serifs text-balance text-2xl font-semibold text-ink-900 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-ink-600 md:text-base">
          {description}
        </p>
        {cta && (
          <div className="mt-6">
            <Link
              href={cta.href}
              className="inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
};
