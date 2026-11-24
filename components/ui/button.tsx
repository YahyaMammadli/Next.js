import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const base =
  "inline-block cursor-pointer rounded-full bg-accent px-6 py-2.5 font-playfair text-sm font-bold text-[#1e1e1e] shadow-md transition hover:brightness-95";

export default function Button({ href, children, className = "", ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
