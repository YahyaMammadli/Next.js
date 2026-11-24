import Button from "@/components/ui/button";

export default function Banner() {
  return (
    <section
      className="relative flex h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/coffee_image.png')" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/overlay.png')" }}
      />
      <div className="relative z-10 px-10 text-white md:px-[10%]">
        <p className="font-playfair text-xl md:text-2xl">We&apos;ve got your morning covered with</p>
        <h1 className="font-script text-8xl leading-tight md:text-9xl">Coffee</h1>
        <p className="mb-8 max-w-md font-playfair text-sm text-white/90 md:text-base">
          It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
        </p>
        <Button>Order Now</Button>
      </div>
    </section>
  );
}
