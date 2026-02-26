import TeamCard from "./TeamCard";

const teamData = [
  {
    title: "The Executive Council",
    members: [
      { name: "Suhas Basappa Mali", role: "President", image: "/team/suhas.jpeg" },
      { name: "Rudransh Vatsayan", role: "Vice President", image: "/team/rudransh.jpg" },
      { name: "Yashwanth R", role: "Secretary", image: "/team/yashwanth.jpg" },

    ],
  },
  {
    title: "The Stewardship Council",
    members: [
      { name: "Sidharth Hanish", role: "SysAdmin", image: "/team/sidharth.jpeg" },
      { name: "Sinchana M", role: "AI-ML", image: "/team/member2.png" },
      { name: "Prasad Salagare", role: "UI Engineer", image: "/team/member2.png" },
      { name: "Diwakar S Gowda", role: "UI Engineer", image: "/team/member2.png" },
      { name: "Siddharth R", role: "UI Engineer", image: "/team/siddharth.jpeg" },
          ],
  },
  {
    title: "Members",
    members: [
      { name: "Sri Vidya", role: "", image: "/team/srividya.jpg" },
      { name: "Disha Sudeep", role: "", image: "/team/disha.jpg" },
      { name: "Swasti P", role: "", image: "/team/swasti.jpg" },
      { name: "Manya M", role: "", image: "/team/manya.png" },
      { name: "Sumukh A Bhargav", role: "", image: "/team/sumukh.jpg" },
      { name: "Rohan V", role: "", image: "/team/rohan.jpeg" },
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
