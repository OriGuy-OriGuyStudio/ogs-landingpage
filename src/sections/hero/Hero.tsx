'use client';
import HeroButton from '@/app/components/hero/HeroButton';
import { Search } from 'lucide-react';
import { useRef } from 'react';

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
    promotion: 'מבצע מיוחד ל 5 לקוחות ראשונים !',
    promotionTextUnder: 'לחצו כאן לפרטים נוספים',
  };
  return (
    <section className="text-color-brand-whiteYellow-100-light relative flex h-screen flex-col items-center justify-center text-center leading-none sm:items-center sm:justify-center sm:text-center">
      <div className="bg-color-brand-whiteYellow-100-light/8 text-color-brand-whiteYellow-100-light fixed top-0 right-0 bottom-0 left-0 flex h-34 flex-col items-center justify-center gap-2 rounded-br-3xl rounded-bl-3xl px-4 text-center drop-shadow-lg backdrop-blur-sm sm:px-20">
        <p className="text-size-brand-h5 sm:text-size-brand-h2 font-black">
          {texts.promotion}
        </p>
        <p className="text-size-brand-h6 sm:text-size-brand-h5 font-medium">
          {texts.promotionTextUnder}
        </p>
      </div>
      <div
        className="bg-color-brand-purple-500-light pointer-events-none fixed -z-9 size-80 rounded-full opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', left: '-10%' }}
      />
      <div
        className="bg-color-brand-pink-500-dark pointer-events-none fixed -z-9 size-80 rounded-full opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', right: '-10%' }}
      />
      <div
        className="bg-color-brand-pink-500-dark pointer-events-none fixed -z-9 size-80 rounded-full opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', left: '-10%' }}
      />
      <div
        className="bg-color-brand-purple-500-light pointer-events-none fixed -z-9 size-80 rounded-full opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', right: '-10%' }}
      />

      <div className="w-full max-w-full">
        <p className="text-size-brand-h6">{texts.smallTitle}</p>
        <h1 className="text-size-brand-h2 sm:text-size-brand-h1 mb-2 font-black">
          {texts.mainTitle}{' '}
          <span
            ref={textToScale}
            className="magnify-container text-color-brand-pink-500-dark relative inline-block w-fit border-2"
          >
            "{texts.colorTitle}"
            <span>
              <Search
                size={48}
                className="absolute -top-2 -right-3 sm:size-24"
              />
            </span>
          </span>
        </h1>
        <h3 className="text-size-brand-h6 mx-auto mb-8 w-full leading-snug sm:w-5/8">
          {texts.description}
        </h3>
        <HeroButton text={texts.button} />
        <p className="text-size-brand-p">{texts.textUnderButton}</p>
      </div>
    </section>
  );
};

export default HeroSection;
