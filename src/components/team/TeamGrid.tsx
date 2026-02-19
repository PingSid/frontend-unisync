import TeamCard from "./TeamCard";

const teamData = [
  {
    title: "The Executive Council",
    members: [
      { name: "Aryan", role: "Systems Architect", image: "/team/member2.png" },
      { name: "Meera", role: "Kernel Explorer", image: "/team/member2.png" },
      { name: "Chris", role: "Kernel Explorer", image: "/team/member2.png" },

    ],
  },
  {
    title: "The Stewardship Council",
    members: [
      { name: "Kabir", role: "Full Stack Dev", image: "/team/member2.png" },
      { name: "Riya", role: "UI Engineer", image: "/team/member2.png" },
      { name: "Sara", role: "UI Engineer", image: "/team/member2.png" },
      { name: "Riya", role: "UI Engineer", image: "/team/member2.png" },
    ],
  },
  {
    title: "Members",
    members: [
      { name: "Zaid", role: "AI Researcher", image: "/team/member2.png" },
      { name: "Zaid", role: "AI Researcher", image: "/team/member2.png" },
      { name: "Zaid", role: "AI Researcher", image: "/team/member2.png" },
      { name: "Zaid", role: "AI Researcher", image: "/team/member2.png" },
    ],
  },
];

export default function TeamGrid() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {teamData.map((section, index) => (
          <div key={index}>
            
            <h2 className="text-3xl font-bold text-center mb-12">
              {section.title}
            </h2>

            <div className="grid gap-8 
                            grid-cols-2 
                            sm:grid-cols-3 
                            md:grid-cols-4">

              {section.members.map((member, i) => (
                <TeamCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
