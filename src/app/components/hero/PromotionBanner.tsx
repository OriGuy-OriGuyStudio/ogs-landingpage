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
      transition={{ duration: 1, ease: 'backOut' }}
      className="bg-color-brand-whiteYellow-100-light/8 text-color-brand-whiteYellow-100-light fixed top-0 right-0 bottom-0 left-0 flex h-34 flex-col items-center justify-center gap-2 rounded-br-3xl rounded-bl-3xl px-4 text-center text-pretty drop-shadow-lg backdrop-blur-sm sm:px-20"
    >
      <motion.p
        ref={topText}
        className="text-size-brand-h5 sm:text-size-brand-h2 text-color-brand-whiteYellow-100-light font-black"
        initial={{ opacity: 0, top: '-1rem' }}
        transition={{ duration: 0.75, ease: 'circIn', delay: 1.25 }}
        whileInView={{ opacity: 1, top: '0rem' }}
      >
        מבצע מיוחד ל{' '}
        <span className="text-size-brand-h2 inline-block animate-bounce">
          5
        </span>{' '}
        לקוחות ראשונים !
      </motion.p>
      <motion.p
        ref={bottomText}
        className="text-size-brand-h6 sm:text-size-brand-h5 text-color-brand-whiteYellow-100-light font-medium"
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
