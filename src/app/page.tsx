import Image from "next/image";
import QnASection from "@/components/QnASection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-[80vh] flex flex-col items-center justify-center pt-8 md:pt-12 bg-background text-foreground px-6">
        
        {/* Hero Glass Card */}
        <div
          className="
            w-full max-w-5xl
            fade-up
            bg-background/70
            backdrop-blur-md
            border border-green-600/60
            rounded-3xl
            shadow-[0_0_40px_5px_rgba(22,163,74,0.6)]
            p-8 md:p-12
          "
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Logo.png"
                alt="Ethos Logo"
                width={256}
                height={256}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                The Ethos Collective
              </h1>

              <p className="text-foreground/70 text-base sm:text-lg">
                Building an ethical, collaborative ecosystem that enhances knowledge through structured coordination.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="fade-up mt-10 md:mt-16 w-full max-w-2xl flex gap-4 md:gap-8 justify-center">

          {/* Join the Collective (Google Form Link) */}
          <a
            href="https://forms.gle/m45koAo32TueDmxD9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 text-center
              px-4 sm:px-6 md:px-10
              py-3 sm:py-4 md:py-5
              rounded-2xl

              bg-green-500/80 dark:bg-green-500/80
              border border-green-400/60

              text-foreground text-sm sm:text-base md:text-lg

              shadow-md dark:shadow-[0_0_14px_rgba(255,215,0,0.22)]

              hover:bg-green-500/90 dark:hover:bg-green-500/55
              hover:-translate-y-1
              hover:scale-[1.03]

              active:scale-95

              transition-all duration-300 ease-out
              touch-manipulation
            "
          >
            <span className="md:hidden">Join Ethos</span>
            <span className="hidden md:inline">Join the Collective</span>
          </a>

          {/* UniSync Button */}
<Link
  href="/register"
  className="
    flex-1 text-center
    px-4 sm:px-6 md:px-10
    py-3 sm:py-4 md:py-5
    rounded-2xl

    bg-green-500/80 dark:bg-green-500/80
    border border-green-400/60

    text-foreground text-sm sm:text-base md:text-lg

    shadow-md dark:shadow-[0_0_14px_rgba(255,215,0,0.22)]

    hover:bg-green-500/90 dark:hover:bg-green-500/55
    hover:-translate-y-1
    hover:scale-[1.03]

    active:scale-95

    transition-all duration-300 ease-out
    touch-manipulation
  "
>
  <span className="md:hidden">Club Registration</span>
  <span className="hidden md:inline">Club Registration</span>
</Link>

        </div>
      </main>

      <QnASection />
    </>
  );
}