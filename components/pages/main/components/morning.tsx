import Image from "next/image";
import Button from "@/components/ui/button";

export default function Morning() {
  return (
    <section
      className="relative overflow-hidden bg-[#5c3510] bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(92,53,16,.8), rgba(92,53,16,.8)), url('/coffee_bean.png')" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-10 py-20 md:grid-cols-2">
        <div className="text-white">
          <h2 className="font-playfair text-5xl leading-tight font-bold md:text-6xl">
            Get a chance to have an Amazing morning
          </h2>
          <p className="my-8 max-w-sm font-playfair text-xl">
            We are giving you are one time opportunity to experience a better life with coffee.
          </p>
          <Button href="#menu">Order Now</Button>
        </div>
        <div className="flex justify-center">
          <Image src="/cup.png" alt="Takeaway coffee cup" width={420} height={420} className="h-auto w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
