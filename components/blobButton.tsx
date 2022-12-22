import { motion } from "framer-motion";
import React from "react";

export default function BlobButton(props: { children: React.ReactNode }) {
  return (
    <motion.button
      initial="hidden"
      whileHover="show"
      className="relative z-10 px-8 py-3 font-semibold transition-transform duration-75 active:scale-[.95] bg-gradient-to-tr from-azul-500 to-azul-700 rounded-sm shadow-md text-white"
    >
      {props.children}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <motion.div
          className="absolute top-0 -left-[16%] flex w-full h-full -z-10"
          style={{
            filter: "url('#goo')",
          }}
        >
          {[0, 1, 2, 3].map((number, idx) => (
            <motion.div
              variants={{
                hidden: {
                  y: '175%',
                  scale: 1.6,
                  left: `${idx * (128 / 4)}%`,
                },
                show: { y: 0 },
              }}
              transition={{ delay: idx * 0.06, ease: 'easeOut' }}
              key={idx}
              className="absolute inline-block w-1/4 h-full scale-150 translate-y-full rounded-full bg-azul-700"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.button>
  );
}
