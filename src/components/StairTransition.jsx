
import { AnimatePresence } from "framer-motion";
import React from "react";
import Stairs from "./Stairs";

import { useLocation } from "react-router-dom";

const StairTransition = () => {
  const pathname = useLocation().pathname
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;