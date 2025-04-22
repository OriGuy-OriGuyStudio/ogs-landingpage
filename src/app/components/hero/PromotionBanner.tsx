import { motion } from 'framer-motion';
import { useRef } from 'react';
interface PromotionBannerProps {
  textBottom: string;
}

const PromotionBanner = ({ textBottom }: PromotionBannerProps) => {
  const topText = useRef<HTMLParagraphElement>(null);
  const bottomText = useRef<HTMLParagraphElement>(null);
  return (
    <motion.div
      initial={{ opacity: 0, top: '-8.5rem' }}
      whileInView={{ opacity: 1, top: '0rem' }}
      transition={{ duration: 1, type: 'spring' }}
      className="bg-colorBrandWhiteYellow100lightOpacity text-colorBrandWhiteYellow100light h-34 fixed left-0 right-0 top-0 flex flex-col items-center justify-center gap-2 text-pretty rounded-bl-3xl rounded-br-3xl px-2 py-4 text-center drop-shadow-lg backdrop-blur-sm sm:px-20"
    >
      <motion.p
        ref={topText}
        className="text-textsizebrandh5 sm:text-textsizebrandh2 text-colorBrandWhiteYellow100light font-black"
        initial={{ opacity: 0, top: '-1rem' }}
        transition={{ duration: 0.75, ease: 'circIn', delay: 1.25 }}
        whileInView={{ opacity: 1, top: '0rem' }}
      >
        מבצע מיוחד ל{' '}
        <span className="text-textsizebrandh2 inline-block animate-bounce">
          5
        </span>{' '}
        לקוחות ראשונים !
      </motion.p>
      <motion.p
        ref={bottomText}
        className="text-textsizebrandh6 sm:text-textsizebrandh5 text-colorBrandWhiteYellow100light font-medium"
        initial={{ opacity: 0, top: '-2rem' }}
        transition={{ duration: 0.75, ease: 'circIn', delay: 1.5 }}
        whileInView={{ opacity: 1, top: '0rem' }}
      >
        {textBottom}
      </motion.p>
    </motion.div>
  );
};

export default PromotionBanner;
