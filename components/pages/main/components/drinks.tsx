import Image from "next/image";
import Button from "@/components/ui/button";

const drinks = [
  { name: "Cappuccino", image: "/cup.png" },
  { name: "Chai Latte", image: "/cup.png" },
  { name: "Macchiato", image: "/cup.png" },
  { name: "Expresso", image: "/cup.png" },
];

export default function Drinks() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-16">
      <h2 className="text-center font-playfair text-5xl font-bold text-brown md:text-6xl">Enjoy a new blend of coffee style</h2>
      <p className="mt-4 text-center font-playfair text-lg text-muted">
        Explore all flavours of coffee with us. There is always a new cup worth experiencing
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {drinks.map((d) => (
          <article key={d.name} className="border border-accent/20 bg-card text-center">
            <div className="relative h-44 bg-[#e8d9c5]">
              <Image src={d.image} alt={d.name} fill sizes="25vw" className="object-contain p-3" />
            </div>
            <div className="px-4 py-5">
              <h3 className="font-playfair text-xl font-bold text-brown">{d.name}</h3>
              <p className="mt-2 text-sm text-foreground">Coffee 50% | Milk 50%</p>
              <p className="mt-1 font-playfair text-lg font-bold text-brown">$8.50</p>
              <Button className="mt-4">Order Now</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
