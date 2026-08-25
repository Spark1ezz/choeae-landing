export default function Footer() {
  return (
    <footer className="bg-[#050408] border-t border-white/5 py-12 text-moon-grey">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start leading-none gap-1">
            <span className="font-sora font-bold text-2xl text-pearl tracking-widest">CHOEAE <span className="text-holo-violet text-sm">✦</span></span>
            <span className="font-kr text-[10px] tracking-widest">최애</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-pearl transition-colors">Product</a>
            <a href="#community" className="hover:text-pearl transition-colors">Community</a>
            <a href="#" className="hover:text-pearl transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-pearl transition-colors">Discord</a>
            <a href="#" className="hover:text-pearl transition-colors">Terms</a>
            <a href="#" className="hover:text-pearl transition-colors">Privacy</a>
          </div>
          
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>Made for collectors. Powered by fandom.</p>
          <p className="text-center md:text-right max-w-2xl opacity-60">
            CHOEAE is an independent collectibles platform and is not affiliated with or endorsed by any artist, entertainment agency, record label or group referenced on the platform.
          </p>
        </div>

        <div className="mt-6 text-center text-[10px] text-moon-grey/30 font-mono select-none">
          1.1.3
        </div>
      </div>
    </footer>
  );
}
