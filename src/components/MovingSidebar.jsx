import { motion } from 'framer-motion';

export default function MovingSidebar() {
  // Define your animation variants here
  const variants = {
    animate: {
      // Example animation properties
      x: [0, 10, 0], // Move along the x-axis
      transition: {
        duration: 5, // Duration of the animation
        ease: "easeInOut",
        repeat: Infinity, // Repeat the animation forever
        repeatType: "loop",
      },
    },
    // You can define other variants such as initial, hover, etc.
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-64 bg-gray-800"
      variants={variants}
      animate="animate"
    >
      {/* ... sidebar content ... */}
    </motion.div>
  );
}
