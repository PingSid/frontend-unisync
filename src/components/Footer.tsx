export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-emerald-600/20 bg-background">
      
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">
            Ethos Collective
          </h3>
          <p className="text-foreground/60">
            We serve as a bridge between departments, student bodies, and technical communities — ensuring alignment rather than fragmentation.
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">
            Navigation
          </h4>
          
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">
            Connect
          </h4>
          <p className="text-foreground/60">
            ethos.collective.vvce@gmail.com
          </p>
          <p className="text-foreground/60">
            Built with discipline and curiosity.
          </p>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-emerald-600/10 py-6 text-center text-foreground/40 text-sm">
        © {new Date().getFullYear()} Ethos Collective. All rights reserved.
      </div>

    </footer>
  );
}
