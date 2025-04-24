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
      className="h-34 fixed left-0 right-0 top-0 flex flex-col items-center justify-center gap-2 text-pretty rounded-bl-3xl rounded-br-3xl bg-colorBrandWhiteYellow100lightOpacity px-4 py-4 text-center text-colorBrandWhiteYellow100light drop-shadow-lg backdrop-blur-sm sm:px-20 md:py-9"
    >
      <motion.p
        ref={topText}
        className="text-textsizebrandh5 font-black text-colorBrandWhiteYellow100light sm:text-textsizebrandh2"
        initial={{ opacity: 0, top: '-1rem' }}
        transition={{ duration: 0.75, ease: 'circIn', delay: 1.25 }}
        whileInView={{ opacity: 1, top: '0rem' }}
      >
        מבצע מיוחד ל{' '}
        <span className="inline-block animate-bounce text-textsizebrandh3 md:text-textsizebrandh1">
          5
        </span>{' '}
        לקוחות ראשונים !
      </motion.p>
      <a href="https://wa.me/message/BAPSKBNTSV6GA1">
        <motion.p
          ref={bottomText}
          className="cursor-pointer text-textsizebrandp font-medium text-colorBrandWhiteYellow100light underline underline-offset-2 sm:text-textsizebrandh5"
          initial={{ opacity: 0, top: '-2rem' }}
          transition={{ duration: 0.75, ease: 'circIn', delay: 1.5 }}
          whileInView={{ opacity: 1, top: '0rem' }}
        >
          {textBottom}
        </motion.p>
      </a>
    </motion.div>
  );
};

export default PromotionBanner;
