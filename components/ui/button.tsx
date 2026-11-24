import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-full bg-accent px-6 py-2.5 font-playfair text-sm font-bold text-[#1e1e1e] shadow-md transition hover:brightness-95 ${className}`}
    >
      {children}
    </button>
  );
}
