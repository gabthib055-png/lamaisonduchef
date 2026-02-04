import { ExperienceFooter } from "@/components/experience/layout/ExperienceFooter";
import { ExperienceHeader } from "@/components/experience/layout/ExperienceHeader";
import { experienceSections } from "@/components/experience/sections/sectionRegistry";

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHeader sections={experienceSections} />
      <main className="flex flex-col gap-16">
        {experienceSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <section.Component />
          </section>
        ))}
      </main>
      <ExperienceFooter />
    </>
  );
}
