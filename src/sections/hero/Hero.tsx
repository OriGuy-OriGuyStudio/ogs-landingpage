'use client';
import BluredBgColors from '@/app/components/hero/BluredBgColors';
import HeroButton from '@/app/components/hero/HeroButton';
import PromotionBanner from '@/app/components/hero/PromotionBanner';
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
      <PromotionBanner
        textTop={texts.promotion}
        textBottom={texts.promotionTextUnder}
      />
      <BluredBgColors />
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
