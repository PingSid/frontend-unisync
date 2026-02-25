import QnABlock from "./QnABlock";

export default function QnASection() {
  return (
    <section className="py-16 px-6 bg-background text-foreground">
    <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">

        <QnABlock
          question="Why does Ethos exist?"
          answer="Ethos exists to introduce systems thinking into student growth.

It is designed to:

Create structured coordination 
Ensure consistent and disciplined academic engagement
Promote ethical and responsible execution
Enhance knowledge beyond classroom boundaries
Build a culture of research, innovation, and collaboration along with Constant learning growth."
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
