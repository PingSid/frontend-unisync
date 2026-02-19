import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
<div className="flex flex-col items-center text-center group">
      
<Image
  src={image}
  alt={name}
  width={160}
  height={160}
 className="
  rounded-xl object-cover
  w-28 h-28
  sm:w-32 sm:h-32
  md:w-40 md:h-40
  transition-all duration-300

  shadow-[0_0_20px_rgba(34,197,94,0.8)]
  md:shadow-[0_0_12px_rgba(34,197,94,0.4)]

  md:group-hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]
  md:group-hover:scale-105
"


/>




      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
