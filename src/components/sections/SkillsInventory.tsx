import { skillGroups } from "@/content";
import { Container } from "@/components/layout/Container";

export function SkillsInventory() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="section-rule py-12 sm:py-16"
    >
      <Container>
        <p className="meta-label mb-1">Capabilities</p>
        <h2
          id="skills-heading"
          className="text-xl sm:text-2xl font-semibold tracking-tight mb-8"
        >
          Technical range
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground mb-3 pb-2 border-b border-border">
                {group.title}
              </h3>
              <ul className="space-y-1.5" role="list">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
