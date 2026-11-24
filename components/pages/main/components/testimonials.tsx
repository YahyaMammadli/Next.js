"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Jonny Thomas",
    role: "Project Manager",
    avatar: "/avatar-1.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
  },
  {
    name: "Anna Smith",
    role: "Designer",
    avatar: "/avatar-2.jpg",
    text: "The best coffee in town! Every cup is a small celebration. The atmosphere is cozy and the staff are always smiling. I come here every morning before work and it makes my day.",
  },
  {
    name: "David Lee",
    role: "Developer",
    avatar: "/avatar-3.jpg",
    text: "Great place to focus and get things done. The espresso is rich and the prices are fair. Highly recommended for anyone who loves real coffee.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);
  const next = () => setI((i + 1) % reviews.length);

  return (
    <section className="px-10 pb-24 text-center">
      <h2 className="font-playfair text-5xl font-bold text-brown md:text-6xl">Our coffee perfection feedback</h2>
      <p className="mt-4 font-playfair text-lg text-muted">Our customers has amazing things to say about us</p>

      <div className="relative mx-auto mt-14 max-w-4xl border border-accent/30 bg-card px-12 pt-8 pb-20">
        <span className="absolute top-2 left-8 font-playfair text-9xl leading-none text-brown">&ldquo;</span>
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute top-1/2 -left-8 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-accent text-2xl text-brown shadow-md"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute top-1/2 -right-8 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-accent text-2xl text-brown shadow-md"
        >
          →
        </button>
        <p className="mx-auto mt-10 max-w-2xl font-playfair text-base leading-8 font-semibold text-muted">{r.text}</p>
        <h3 className="mt-8 font-playfair text-2xl font-bold text-brown">{r.name}</h3>
        <p className="mt-1 font-playfair text-lg text-muted">{r.role}</p>
        <div className="absolute -bottom-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-xl bg-[#d9c3a5] font-playfair text-4xl font-bold text-brown shadow-lg">
          {r.name[0]}
        </div>
      </div>
    </section>
  );
}
