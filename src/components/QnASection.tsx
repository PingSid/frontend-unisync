import QnABlock from "./QnABlock";

export default function QnASection() {
  return (
    <section className="py-16 px-6 bg-background text-foreground">
    <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">

        <QnABlock
          question="Why does Ethos exist?"
          answer="Because engineering without philosophy becomes fragile. We exist to design systems that endure complexity, scale intelligently, and serve real-world needs."
          image="/q1.jpg"
        />

        <QnABlock
          question="What makes us different?"
          answer="We think in systems. Infrastructure, software, leadership — all interconnected. We build with long-term resilience, not short-term noise."
          image="/q2.jpg"
          reverse
        />

        <QnABlock
          question="What do we actually build?"
          answer="Platforms, infrastructure tools, internal systems, and experimental technology. We prototype, test, refine, and deploy with discipline."
          image="/q3.jpg"
        />

      </div>
    </section>
  );
}
