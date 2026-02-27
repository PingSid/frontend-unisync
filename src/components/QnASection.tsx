import QnABlock from "./QnABlock";

export default function QnASection() {
  return (
    <section className="py-16 px-6 bg-background text-foreground">
    <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">

        <QnABlock
          question="Why does Ethos exist?"
          answer="Ethos exists to introduce systems thinking into student growth.

It is designed to create structured coordination, ensure consistent and disciplined academic engagement, promote ethical and responsible execution enhance knowledge beyond classroom boundaries
Build a culture of research, innovation, and collaboration along with Constant learning growth."
          image="/q1.png"
        />

        <QnABlock
          question="What makes us different?"
          answer="

We encourage participation in technical events, competitions, and collaborative initiatives that strengthen problem-solving and applied learning.


Ethos promotes consistent academic engagement through structured workshops, guided skill development, and knowledge-sharing sessions."
          image="/q2.png"
          reverse
        />

        <QnABlock
          question="What do we actually build?"
          answer="People - Students who think critically, act ethically, and execute with discipline.

Processes - Structured systems that enable accountability, collaboration, and sustained growth.

Projects -  Applied and research-driven initiatives that convert knowledge into impact.

Our goal is not to conduct isolated activities, but to build a culture of structured academic excellence."
          image="/q3.png"
        />

      </div>
    </section>
  );
}
