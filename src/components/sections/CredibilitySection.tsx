import { credibilitySignals, education, currentJourney } from "@/content";
import { Container } from "@/components/layout/Container";

export function CredibilitySection() {
  return (
    <section
      aria-labelledby="credibility-heading"
      className="section-rule py-12 sm:py-16"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education + journey */}
          <div>
            <p className="meta-label mb-1">Background</p>
            <h2
              id="credibility-heading"
              className="text-xl sm:text-2xl font-semibold tracking-tight mb-6"
            >
              Education &amp; journey
            </h2>

            {/* Education block */}
            <div className="mb-6 pb-6 border-b border-border">
              <p className="text-sm font-medium text-foreground mb-0.5">{education.institution}</p>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
              <p className="meta-label mt-1">{education.period} &mdash; Expected {education.expectedGraduation}</p>

              <div className="mt-3">
                <p className="text-xs font-medium text-foreground mb-1.5">Relevant coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {education.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="meta-label px-2 py-0.5 bg-secondary border border-border rounded-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Current journey */}
            <div className="space-y-4">
              {currentJourney.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-medium text-foreground mb-0.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credibility signals */}
          <div>
            <p className="meta-label mb-1">Signals</p>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
              Credibility
            </h3>

            <ul className="space-y-4" role="list">
              {credibilitySignals.map((signal, i) => (
                <li key={signal.title} className="pb-4 border-b border-border last:border-0">
                  <span className="meta-label block mb-1">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-medium text-foreground mb-0.5">{signal.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
