import Image from "next/image";
import Button from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-10 py-4">
      <a href="#home">
        <Image src="/logo.png" alt="Bean Scene" width={135} height={100} priority />
      </a>
      <nav className="flex gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="font-playfair text-sm text-white hover:text-accent">
            {l.label}
          </a>
        ))}
      </nav>
      <Button href="#subscribe">Sign In</Button>
    </header>
  );
}
