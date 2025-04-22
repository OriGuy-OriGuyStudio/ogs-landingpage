'use client';
import HeroButton from '@/app/components/hero/HeroButton';
import { Braces, Handshake, Target } from 'lucide-react';
import { MotionValue } from 'motion';
import { motion, useMotionValueEvent, useTransform } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';

interface SolutionSectionProps {
  scrollYProgress: MotionValue<number>;
}

const SolutionSection = ({ scrollYProgress }: SolutionSectionProps) => {
  // Scale animation for the heading
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [2, 1, 1]);
  // Track which text is currently visible
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Array of solution texts
  const solutionTexts = [
    {
      Icon: '',
      description: '',
      button: '',
    },
    {
      title: 'האתר לא מייצר פניות ?',
      icon: (
        <motion.span
          initial={{ opacity: 0.5, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'tween',
            duration: 1,
          }}
          className="inline-block"
        >
          <Braces
            className="inline-block size-[40px] lg:size-[64px]"
            color="#f55274"
          />
        </motion.span>
      ),
      description:
        'איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.\nאני עובד אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.\nלא משנה אם כבר יש לכם אתר  ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם אתר שבאמת עובד ומותאם אישית עבורכם.',
      button: '',
    },
    {
      title: 'אפשר גם אחרת',
      icon: (
        <motion.span
          initial={{ opacity: 0.5, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'tween',
            duration: 1,
          }}
          className="inline-block"
        >
          <Target className="size-[40px] lg:size-[64px]" color="#f55274" />
        </motion.span>
      ),
      description:
        'אתר ברור, נעים, ומדויק לעסק שלכם.\nכזה שמסביר בדיוק מה אתם מציעים, ומעודד לקוחות לפנות דווקא אליכם.',
      button: '',
    },
    {
      title: 'עושים את זה ביחד',
      icon: (
        <motion.span
          initial={{ opacity: 0.5, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            duration: 1,
          }}
          className="inline-block"
        >
          <Handshake className="size-[40px] lg:size-[64px]" color="#f55274" />
        </motion.span>
      ),
      description:
        'התהליך פשוט, אישי, מקצועי, בלי כאבי ראש וטרטור בין ספקים שונים.\nאתם מתמקדים במה שאתם עושים הכי טוב ואני דואג שהאתר יעבוד בשבילם.',
      button: (
        <span className="mt-4 inline-block animate-bounce">
          <HeroButton text={'בואו נעשה את זה כמו שצריך'} />
        </span>
      ),
    },
  ];
  const [hasShownConfetti, setHasShownConfetti] = useState(false);
  // Listen for scroll progress changes and update the text + trigger confetti
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Text changing logic
    if (latest < 0.25) {
      setCurrentTextIndex(0);
    } else if (latest < 0.5) {
      setCurrentTextIndex(1);
    } else if (latest < 0.75) {
      setCurrentTextIndex(2);
    } else {
      setCurrentTextIndex(3);
    }

    // Trigger confetti when the section first becomes visible
    // and we haven't shown it yet
    if (latest > 0.05 && latest < 0.35 && !hasShownConfetti) {
      setHasShownConfetti(true);

      // Set up confetti colors and options
      const colors = ['#3521AB', '#F55274'];

      // Left side confetti
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        startVelocity: 30,
        gravity: 0.5,
        ticks: 200,
      });

      // Right side confetti
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
        colors: colors,
        startVelocity: 30,
        gravity: 0.5,
        ticks: 200,
      });
    }
    setHasShownConfetti(false);
  });

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-2 gap-4 bg-colorBrandGreen500medium px-2 text-colorBrandGray800dark md:px-20">
      <Image
        src={'/upRight.png'}
        alt={'upRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ top: '0', right: '0' }}
      />
      {/* Header with scale animation */}
      <motion.div
        style={{ scale }}
        className="items-right z-10 mb-4 flex flex-col justify-end text-right md:items-center md:text-center"
      >
        <h3 className="text-textsizebrandh1 font-black leading-none">
          הגיע הזמן לעשות
        </h3>
        <h3 className="text-textsizebrandh1 font-black leading-none text-colorBrandPurple500light">
          את זה כמו שצריך
        </h3>
        {/* <p>{scrollYProgress.get()}</p> */}
      </motion.div>

      {/* Text container */}
      <div className="relative mx-auto w-full max-w-2xl">
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="flex-start text-background flex h-fit flex-col gap-2 whitespace-pre-wrap text-pretty text-right text-textsizebrandh5 font-medium leading-snug md:text-center lg:items-center">
            <span className="flex flex-row items-center justify-start gap-4 text-textsizebrandh4 font-extrabold">
              {solutionTexts[currentTextIndex].icon}{' '}
              {solutionTexts[currentTextIndex].title}
            </span>

            {solutionTexts[currentTextIndex].description}
            {solutionTexts[currentTextIndex].button}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSection;
