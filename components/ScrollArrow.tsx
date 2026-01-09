"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollArrow() {
  return (
    <motion.div
      className="flex justify-center w-full"
      style={{ marginBottom: "0", marginTop: "0rem" }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown size={40} className="text-gray-400" />
    </motion.div>
  );
}
