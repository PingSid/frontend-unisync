export default function AboutPage() {
  return (
    <main className="bg-background text-foreground px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Header Section */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About The Ethos Collective
          </h1>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            We are a systems-driven collective rooted in engineering discipline,
            long-term thinking, and resilient technological design.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
            Our Mission
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            To design and deploy infrastructure, tools, and platforms that
            endure complexity. We believe engineering must be guided by
            philosophy — otherwise it collapses under scale.
          </p>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
            Our Philosophy
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            We think in systems. Software, infrastructure, leadership,
            and community are interconnected. Every solution we build
            is designed with resilience, modularity, and long-term
            adaptability in mind.
          </p>
        </section>

        {/* How We Work Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
            How We Work
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            We prototype rigorously. We test under constraints.
            We iterate deliberately. We deploy with discipline.
            Our process is structured, not reactive.
          </p>
        </section>

      </div>
    </main>
  );
}
