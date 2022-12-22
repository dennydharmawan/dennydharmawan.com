import { motion } from "framer-motion";
import React from "react";

export default function IconButtonContained(props: {
  children: React.ReactNode;
}) {
  return (
    <motion.a
      className="relative overflow-hidden text-white rounded-lg after:outline-[#1a67f8]  after:absolute after:block after:w-full after:h-full after:rounded-md after:outline after:outline-4 after:top-0 after:right:0 after:transition after:ease-in after:hover:scale-[.90] after:z-0 bg-neutral-800 after:duration-150"
      initial={{
        border: '0px',
      }}
      whileHover={{
        color: '#1a67f8',
        boxShadow: '0 2px 40px -4px #1a67f8',
      }}
      transition={{
        ease: 'easeIn',
        duration: 0.15,
      }}
    >
      <div className="z-10 px-3 py-3">{props.children}</div>
    </motion.a>
  );
}
