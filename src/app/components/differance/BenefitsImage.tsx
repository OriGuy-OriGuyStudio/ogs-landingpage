import { motion } from 'motion/react';
import Image from 'next/image';

function BenefitsImage() {
  return (
    <motion.span
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        type: 'spring',
        repeatType: 'reverse',
        repeat: Infinity,
      }}
      className="text-shadow-2xl shrink"
    >
      <Image src="/heart.svg" width={300} height={300} alt="heart icon" />
    </motion.span>
  );
}

export default BenefitsImage;
