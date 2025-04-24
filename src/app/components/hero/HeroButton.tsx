import { motion } from 'motion/react';

interface HeroButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeroButtonProps) => {
  return (
    <>
      <a href="https://wa.me/message/BAPSKBNTSV6GA1">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, type: 'spring' }}
          whileTap={{ scale: 0.95, rotate: -1, transition: { duration: 0.12 } }}
          className="group mb-2 cursor-pointer rounded-xl bg-colorBrandPink500dark px-6 py-3 text-textsizebrandh6 font-black text-colorBrandWhiteYellow100light shadow-[0px_8px_16px_0_rgba(245,82,116,0.25)]"
        >
          {text}
        </motion.button>
      </a>
    </>
  );
};

export default HeroButton;
