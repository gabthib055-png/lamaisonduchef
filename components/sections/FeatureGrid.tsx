interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  title?: string;
  features: Feature[];
}

export const FeatureGrid = ({ eyebrow, title, features }: FeatureGridProps) => {
  return (
    <section className="py-16 md:py-24">
      {(eyebrow || title) && (
        <div className="mb-12 text-center">
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-balance text-2xl font-medium text-foreground md:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
              {feature.icon}
            </div>
            <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
