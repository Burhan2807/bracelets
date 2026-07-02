export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#2b2420] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-xl italic">Knotted &amp; Bright</p>
        <p className="max-w-md text-sm text-white/60">
          Handmade bracelets, knotted and strung one at a time. Every order is
          made to order — thank you for supporting a small, independent
          maker. FOR MUKI meri jaan
        </p>
        <p className="text-xs text-white/35">
          {`© ${new Date().getFullYear()} Knotted & Bright. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
