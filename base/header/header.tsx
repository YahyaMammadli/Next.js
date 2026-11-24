import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-transparent px-10 py-4">
      <Link href="/">
        <Image src="/logo.png" alt="Bean Scene" width={135} height={100} priority />
      </Link>
      <nav className="flex gap-8">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="font-playfair text-sm text-white hover:text-accent">
            {l.label}
          </Link>
        ))}
      </nav>
      <Button>Sign In</Button>
    </header>
  );
}
