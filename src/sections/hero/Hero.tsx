'use client';
import HeroButton from '@/app/components/hero/HeroButton';
import { Search } from 'lucide-react';
import { color } from 'motion/react';
import { use, useRef } from 'react';
import { text } from 'stream/consumers';

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const textToScale = useRef<HTMLSpanElement>(null);
  const texts = {
    smallTitle: 'לאתר שלך יש תפקיד אחד:',
    mainTitle: 'לגרום לאנשים לעצור, להרגיש, ולהגיד',
    colorTitle: 'זה בדיוק מה שחיפשתי',
    description:
      'אפיון, עיצוב ובניית אתרים לעסקים שמבינים שהאתר שלהם צריך לעבוד עבורם, להציג את הערך, לבלוט מהמתחרים ולייצר פניות.',
    button: 'רוצים אתר שמייצר לקוחות?',
    textUnderButton: 'בלי התחייבות, רק שיחת היכרות',
  };
  return (
    <div className="text-color-brand-whiteYellow-100-light text-right leading-none sm:text-center">
      <div className="bg-color-brand-purple-500-light absolute top-0 left-0 -z-9 h-60 w-60 blur-[800px]" />
      <div className="bg-color-brand-pink-500-dark absolute top-0 right-0 -z-9 h-60 w-60 blur-[800px]" />
      <div className="bg-color-brand-pink-500-dark absolute bottom-0 left-0 -z-9 h-60 w-60 blur-[800px]" />
      <div className="bg-color-brand-purple-500-light absolute right-0 bottom-0 -z-9 h-60 w-60 blur-[800px]" />
      <p className="text-size-brand-p">{texts.smallTitle}</p>
      <h1 className="text-size-brand-h2 sm:text-size-brand-h1 mb-2 font-black">
        {texts.mainTitle}{' '}
        <span
          ref={textToScale}
          className="magnify-container text-color-brand-pink-500-dark relative block"
        >
          "{texts.colorTitle}"
          <span>
            <Search size={60} className="absolute -top-1 -right-3" />
          </span>
        </span>
      </h1>
      <h3 className="text-size-brand-h6 mx-auto mb-8 w-full leading-snug sm:w-5/8">
        {texts.description}
      </h3>
      <HeroButton text={texts.button} />
      <p className="text-size-brand-p">{texts.textUnderButton}</p>
    </div>
  );
};

export default HeroSection;
