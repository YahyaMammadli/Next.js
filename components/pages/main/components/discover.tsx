import Image from "next/image";
import Button from "@/components/ui/button";

export default function Discover() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-10 py-24 md:grid-cols-2">
      <div>
        <h2 className="font-playfair text-5xl font-bold text-brown md:text-6xl">Discover the best coffee</h2>
        <p className="my-8 max-w-xl font-playfair text-xl leading-relaxed text-muted">
          Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="flex justify-center">
        <Image src="/coffee-cup.png" alt="Cup made of coffee beans" width={460} height={400} className="h-auto w-full max-w-md" />
      </div>
    </section>
  );
}
