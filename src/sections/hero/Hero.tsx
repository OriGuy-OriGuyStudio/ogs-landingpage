'use client';
import BluredBgColors from '@/app/components/hero/BluredBgColors';
import HeroButton from '@/app/components/hero/HeroButton';
import MainHeroTitles from '@/app/components/hero/MainHeroTitles';
import PromotionBanner from '@/app/components/hero/PromotionBanner';
import SecondaryHeroTitle from '@/app/components/hero/SecondaryHeroTitle';
import SmallHeroTitle from '@/app/components/hero/SmallHeroTitle';
import {
  MotionValue,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from 'framer-motion';

interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

const HeroSection = ({ scrollYProgress }: HeroSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rounded = useTransform(scrollYProgress, [0, 1], [0, 24]);
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

  // Define proper variants for parent and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: 'backOut',
        delayChildren: 2,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scaleZ: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleZ: 1,
      transition: {
        duration: 0.86,
        circIn: { duration: 0.86 },
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        style={{ scale, rotate, borderRadius: rounded }}
        className="sticky top-0 z-0 flex h-screen w-full origin-center flex-col items-center justify-center bg-colorBrandPurple900dark px-4 text-center font-sans leading-none text-colorBrandWhiteYellow100light sm:items-center sm:justify-center sm:px-20 sm:text-center"
      >
        <BluredBgColors />
        <PromotionBanner textBottom={texts.promotionTextUnder} />

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <m.div variants={itemVariants}>
            <SmallHeroTitle text={texts.smallTitle} />
          </m.div>

          <m.div variants={itemVariants}>
            <MainHeroTitles
              mainText={texts.mainTitle}
              colorText={texts.colorTitle}
            />
          </m.div>

          <m.div variants={itemVariants}>
            <SecondaryHeroTitle text={texts.description} />
          </m.div>

          <m.div variants={itemVariants}>
            <HeroButton text={texts.button} />
          </m.div>

          <m.p variants={itemVariants} className="text-textsizebrandp">
            {texts.textUnderButton}
          </m.p>
        </m.div>
      </m.section>
    </LazyMotion>
  );
};

export default HeroSection;
