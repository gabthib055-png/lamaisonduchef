export const experienceTheme = {
  layout: {
    background: "bg-ink-950 text-pearl-50",
    container:
      "mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-12",
    section: "flex flex-col gap-6",
  },
  text: {
    eyebrow: "text-[0.65rem] uppercase tracking-[0.35em] text-pearl-200",
    label: "text-xs uppercase tracking-[0.3em] text-pearl-300",
    title: "text-3xl font-serif text-pearl-50 md:text-4xl",
    subtitle: "text-sm text-pearl-200 md:text-base",
    body: "text-sm text-pearl-200",
  },
  surfaces: {
    panel: "rounded-3xl border border-white/10 bg-ink-900/50 p-6 shadow-card",
    card: "rounded-2xl border border-white/10 bg-ink-900/40 p-5",
  },
  effects: {
    separator: "h-px w-full bg-white/10",
  },
} as const;
