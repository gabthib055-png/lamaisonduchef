import Link from "next/link";

interface ImageSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  cta?: {
    label: string;
    href: string;
  };
}

export const ImageSection = ({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  cta,
}: ImageSectionProps) => {
  const contentOrder = imagePosition === "left" ? "md:order-2" : "md:order-1";
  const imageOrder = imagePosition === "left" ? "md:order-1" : "md:order-2";

  return (
    <section className="py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className={contentOrder}>
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ink-500">
              {eyebrow}
            </p>
          )}
          <h2 className="text-serifs text-balance text-2xl font-semibold text-ink-900 md:text-3xl">
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
        <div className={`${imageOrder} overflow-hidden rounded-3xl`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
