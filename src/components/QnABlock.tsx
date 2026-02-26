import Image from "next/image";

type QnABlockProps = {
  question: string;
  answer: string;
  image: string;
  reverse?: boolean;
};

export default function QnABlock({
  question,
  answer,
  image,
  reverse = false,
}: QnABlockProps) {
  return (
    <div
      className={`
        fade-up
        flex flex-col md:flex-row items-center gap-12
        ${reverse ? "md:flex-row-reverse" : ""}
        group
      `}
    >
      
      <div className="w-full md:w-2/5">
        <div
          className="
            rounded-3xl
            overflow-hidden
            border border-emerald-600/40
            shadow-[0_0_25px_rgba(16,185,129,0.35)]
            transition-all duration-500
            group-hover:shadow-[0_0_50px_rgba(16,185,129,0.7)]
            group-hover:-translate-y-2
          "
        >
          <Image
            src={image}
            alt={question}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
          {question}
        </h2>

        <p className="text-foreground/70 leading-relaxed text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
}
