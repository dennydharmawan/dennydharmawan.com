import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Container(
  props: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'div'>
) {
  return (
    <div
      {...props}
      className={twMerge(
        'px-4 py-3 lg:px-10 md:px-6 md:py-10 max-w-screen-2xl',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
