"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "luxury-btn px-8 py-3.5 text-center text-xs tracking-[0.25em] uppercase font-medium rounded-full transition-all duration-300 inline-block cursor-pointer focus:outline-none";

  const variantClasses = {
    primary: "bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] shadow-lg",
    secondary: "border border-[#F4F2E8]/40 hover:border-[#F4F2E8] text-[#1D2418] bg-white/60",
    dark: "bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] shadow-md"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
