"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      className="bg-[#5c3510] bg-cover bg-center px-10 py-20 text-center text-white"
      style={{ backgroundImage: "linear-gradient(rgba(92,53,16,.85), rgba(92,53,16,.85)), url('/coffee_bean.png')" }}
    >
      <h2 className="font-playfair text-5xl font-bold md:text-6xl">Subscribe to get the Latest News</h2>
      <p className="mt-4 font-playfair text-lg">Don&apos;t miss out on our latest news, updates, tips and special offers</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
          setEmail("");
        }}
        className="mx-auto mt-10 flex max-w-xl"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your mail"
          className="w-full bg-card px-5 py-3.5 font-playfair text-lg text-brown placeholder:text-muted focus:outline-none"
        />
        <button type="submit" className="cursor-pointer bg-accent px-6 font-playfair text-lg font-bold text-brown">
          Suscribe
        </button>
      </form>
      {done && <p className="mt-4 font-playfair text-accent">Thank you for subscribing!</p>}
    </section>
  );
}
