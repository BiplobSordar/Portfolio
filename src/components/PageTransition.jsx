
import { AnimatePresence, motion } from "framer-motion";

import { useLocation } from "react-router-dom";


const PageTransition = ({ children }) => {
  const pathname = useLocation().pathname;
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-bodyColor top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;