
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f6ef] border-b border-[#dce5d5]">
      <nav className="container-wide mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-5">

        {/* Runa Natura Logo */}
        <Link href="/" aria-label="Runa Natura Startseite">
          <Image
            src="/logo.png"
            alt="Runa Natura"
            width={240}
            height={100}
            className="w-40 md:w-52 h-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-medium text-[#344b3b]">
          <Link href="/">Startseite</Link>
          <Link href="/coaching">Coaching</Link>
          <Link href="/workshops">Workshops</Link>
          <Link href="/community">Community</Link>
          <Link href="/buchen">Buchen</Link>
          <Link href="/login">Login</Link>
        </div>

      </nav>
    </header>
  );
}
