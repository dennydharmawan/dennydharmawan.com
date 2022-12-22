import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function IconButton(
  props: {
    children: React.ReactNode;
    href?: string;
  } & React.HTMLAttributes<HTMLAnchorElement>
) {
  const { href = '/', children, className } = props;

  return (
    <Link href={href} legacyBehavior>
      <a
        className={twMerge(
          'text-primary-pacific-600 z-10 flex items-center justify-center relative transition  w-6 h-6 after:absolute after:w-full after:h-full hover:text-gray-50 after:bg-primary-pacific-600 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:rounded-full after:scale-[0] hover:after:scale-[1] after:transition',
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
