"use client";
import { motion } from "framer-motion";
import ZoomImage from "./ZoomImage";

export default function ScrollShowImage({
  ...props
}: React.ComponentProps<"img">) {
  return (
    <motion.span
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <ZoomImage {...props} />
    </motion.span>
  );
}
