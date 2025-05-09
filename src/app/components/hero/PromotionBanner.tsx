import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useRef } from 'react';
interface PromotionBannerProps {
  textBottom: string;
}

const PromotionBanner = ({ textBottom }: PromotionBannerProps) => {
  const topText = useRef<HTMLParagraphElement>(null);
  const bottomText = useRef<HTMLParagraphElement>(null);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, top: '-8.5rem' }}
        whileInView={{ opacity: 1, top: '0rem' }}
        transition={{ duration: 1, type: 'spring' }}
        className="h-34 fixed left-0 right-0 top-0 flex flex-col items-center justify-center gap-2 text-pretty rounded-bl-3xl rounded-br-3xl bg-colorBrandWhiteYellow100lightOpacity px-4 py-4 text-center text-colorBrandWhiteYellow100light drop-shadow-lg backdrop-blur-sm sm:px-20 md:py-9"
      >
        <m.p
          ref={topText}
          className="text-textsizebrandh5 font-black text-colorBrandWhiteYellow100light sm:text-textsizebrandh2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'circInOut', delay: 0.5 }}
        >
          מבצע מיוחד ל{' '}
          <span className="inline-block animate-bounce text-textsizebrandh3 md:text-textsizebrandh1">
            5
          </span>{' '}
          לקוחות ראשונים !
        </m.p>
        <a href="https://wa.me/message/BAPSKBNTSV6GA1">
          <m.p
            ref={bottomText}
            className="cursor-pointer text-textsizebrandp font-medium text-colorBrandWhiteYellow100light underline underline-offset-2 sm:text-textsizebrandh5"
            initial={{ opacity: 0, top: '-2rem' }}
            transition={{ duration: 0.75, ease: 'circIn', delay: 1.5 }}
            whileInView={{ opacity: 1, top: '0rem' }}
          >
            {textBottom}
          </m.p>
        </a>
      </m.div>
    </LazyMotion>
  );
};

export default PromotionBanner;
