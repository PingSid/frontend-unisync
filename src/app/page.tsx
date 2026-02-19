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

            <div className="flex-shrink-0">
              <Image
                src="/Logo.png"
                alt="Ethos Logo"
                width={200}
                height={200}
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>

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
        <div className="fade-up mt-12 md:mt-16 flex flex-row gap-4 md:gap-8 justify-center">

          <button
            className="
              min-w-[220px]
              px-10 py-5 rounded-2xl
              bg-green-500/45
              border border-green-400/60
              text-green-100

              shadow-[0_0_14px_rgba(255,215,0,0.22)]

              hover:bg-green-500/55
              hover:shadow-[0_0_28px_rgba(255,215,0,0.35)]
              hover:-translate-y-1
              hover:scale-[1.03]

              active:scale-95
              active:shadow-[0_0_16px_rgba(255,215,0,0.30)]

              transition-all duration-300 ease-out
              touch-manipulation
            "
          >
            <span className="md:hidden">Join</span>
            <span className="hidden md:inline">Join the Collective</span>
          </button>

          <button
            className="
              min-w-[220px]
              px-10 py-5 rounded-2xl
              bg-green-500/45
              border border-green-400/60
              text-green-100

              shadow-[0_0_14px_rgba(255,215,0,0.22)]

              hover:bg-green-500/55
              hover:shadow-[0_0_28px_rgba(255,215,0,0.35)]
              hover:-translate-y-1
              hover:scale-[1.03]

              active:scale-95
              active:shadow-[0_0_16px_rgba(255,215,0,0.30)]

              transition-all duration-300 ease-out
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
