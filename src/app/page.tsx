import Image from "next/image";
import QnASection from "@/components/QnASection";

export default function Home() {
  return (
    <>
      <main className="min-h-[80vh] flex flex-col items-center justify-center pt-5 bg-background text-foreground px-6">
        
        {/* Hero Glass Card */}
        <div
          className="
            fade-up
            bg-background/70
            backdrop-blur-md
            border border-green-600/60
            rounded-3xl
            shadow-[0_0_40px_5px_rgba(22,163,74,0.6)]
            p-8 md:p-12
          "
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">

            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Logo.png"
                alt="Ethos Logo"
                width={200}
                height={200}
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>

            {/* Right - Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                The Ethos Collective
              </h1>

              <p className="text-foreground/70 text-lg max-w-xl">
                Rooted in engineering. Driven by systems thinking.
                We design resilient infrastructure, intelligent
                technologies, and scalable solutions for the future.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-5 md:mt-10 flex flex-row gap-4 md:gap-8 justify-center">

          <button
className="
  min-w-[140px]
  px-6 py-3 rounded-2xl
  border border-green-500/40
  text-foreground

  shadow-[0_0_10px_rgba(34,197,94,0.25)]

  hover:shadow-[0_0_18px_rgba(34,197,94,0.5)]
  hover:-translate-y-1

  active:scale-95
  active:shadow-[0_0_12px_rgba(34,197,94,0.6)]

  transition-all duration-300
  touch-manipulation
"




>
  <span className="md:hidden">Join</span>
  <span className="hidden md:inline">Join the Collective</span>
</button>

<button
  className="
  min-w-[140px]
  px-6 py-3 rounded-2xl
  border border-green-500/40
  text-foreground

  shadow-[0_0_10px_rgba(34,197,94,0.25)]

  hover:shadow-[0_0_18px_rgba(34,197,94,0.5)]
  hover:-translate-y-1

  active:scale-95
  active:shadow-[0_0_12px_rgba(34,197,94,0.6)]

  transition-all duration-300
  touch-manipulation
"



>
  <span className="md:hidden">UniSync</span>
  <span className="hidden md:inline">Club Management Tool</span>
</button>


        </div>
      </main>

      <QnASection />
    </>
  );
}
