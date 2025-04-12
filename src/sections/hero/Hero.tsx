'use client';
import BluredBgColors from '@/app/components/hero/BluredBgColors';
import HeroButton from '@/app/components/hero/HeroButton';
import MainHeroTitles from '@/app/components/hero/MainHeroTitles';
import PromotionBanner from '@/app/components/hero/PromotionBanner';
import SecondaryHeroTitle from '@/app/components/hero/SecondaryHeroTitle';
import SmallHeroTitle from '@/app/components/hero/SmallHeroTitle';
import { Scale, Search } from 'lucide-react';
import { useRef } from 'react';
import { delay, motion, MotionValue, useTransform } from 'framer-motion';
import { span, tr } from 'motion/react-client';
import { circIn } from 'motion';

interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

const HeroSection = ({ scrollYProgress }: HeroSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
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
    <motion.section
      style={{ scale, rotate }}
      className="text-color-brand-whiteYellow-100-light bg-color-brand-purple-900-dark sticky top-0 z-0 flex h-screen origin-center flex-col items-center justify-center px-4 text-center leading-none sm:items-center sm:justify-center sm:px-20 sm:text-center"
    >
      <PromotionBanner
        textTop={texts.promotion}
        textBottom={texts.promotionTextUnder}
      />
      <BluredBgColors />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants}>
          <SmallHeroTitle text={texts.smallTitle} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <MainHeroTitles
            mainText={texts.mainTitle}
            colorText={texts.colorTitle}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SecondaryHeroTitle text={texts.description} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <HeroButton text={texts.button} />
        </motion.div>

        <motion.p variants={itemVariants} className="text-size-brand-p">
          {texts.textUnderButton}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
