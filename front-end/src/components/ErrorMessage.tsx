import { motion } from 'framer-motion';

export function ErrorMessage({ message }: Readonly<{ message: string }>) {
  return (
    <motion.span
      className="text-xs text-red-400 font-light"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 25, bounce: 5, stiffness: 500 }}
    >
      {message}
    </motion.span>
  );
}
