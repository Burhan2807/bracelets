export default function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-brand-purple bg-[#241436] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-xl font-bold brand-gradient-text">
          Knotted &amp; Bright
        </p>
        <p className="max-w-md text-sm text-white/70">
          Handmade bracelets, knotted and strung one at a time. Every order is
          made to order — thank you for supporting a small, independent
          maker.
        </p>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Knotted &amp; Bright. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
