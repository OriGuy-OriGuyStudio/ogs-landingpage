'use client';
import HeroButton from '@/app/components/hero/HeroButton';
import { Braces, Handshake, Target } from 'lucide-react';
import { MotionValue } from 'motion';
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import JSConfetti from 'js-confetti';

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
        <LazyMotion features={domAnimation}>
          <m.span
            initial={{ opacity: 0.5, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'tween',
              duration: 1,
            }}
            className="inline-block"
          >
            <Braces
              className="inline-block size-[40px] lg:size-[48px]"
              color="#f55274"
            />
          </m.span>
        </LazyMotion>
      ),
      description:
        'איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.\nאני עובד אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.\nלא משנה אם כבר יש לכם אתר  ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם אתר שבאמת עובד ומותאם אישית עבורכם.',
      button: '',
    },
    {
      title: 'אפשר גם אחרת',
      icon: (
        <LazyMotion features={domAnimation}>
          <m.span
            initial={{ opacity: 0.5, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'tween',
              duration: 1,
            }}
            className="inline-block"
          >
            <Target
              className="inline-block size-[40px] lg:size-[48px]"
              color="#f55274"
            />
          </m.span>
        </LazyMotion>
      ),
      description:
        'אתר ברור, נעים, ומדויק לעסק שלכם.\nכזה שמסביר בדיוק מה אתם מציעים, ומעודד לקוחות לפנות דווקא אליכם.',
      button: '',
    },
    {
      title: 'עושים את זה ביחד',
      icon: (
        <LazyMotion features={domAnimation}>
          <m.span
            initial={{ opacity: 0.5, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
            className="inline-block"
          >
            <Handshake
              className="inline-block size-[40px] lg:size-[48px]"
              color="#f55274"
            />
          </m.span>
        </LazyMotion>
      ),
      description:
        'התהליך פשוט, אישי, מקצועי, בלי כאבי ראש וטרטור בין ספקים שונים.\nאתם מתמקדים במה שאתם עושים הכי טוב ואני דואג שהאתר יעבוד בשבילם.',
      button: <HeroButton text={'בואו נעשה את זה כמו שצריך'} />,
    },
  ];
  // const [hasShownConfetti, setHasShownConfetti] = useState(false);
  // Listen for scroll progress changes and update the text + trigger confetti
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const jsConfetti = new JSConfetti();

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
    if (latest > 0 && latest < 0.06) {
      // setHasShownConfetti(true);

      // Set up confetti colors and options
      const colors = ['#3521AB', '#F55274'];
      jsConfetti.addConfetti({
        confettiColors: ['#3521AB', '#F55274'],
        confettiRadius: 6,
        confettiNumber: 25,
      });
    }
    // setHasShownConfetti(false);
    //
    setTimeout(() => {
      jsConfetti.clearCanvas();
    }, 2500);
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 text-balance rounded-3xl bg-colorBrandGreen500medium px-4 text-colorBrandGray800dark md:px-20">
      <Image
        src={'/greenCT2.png'}
        alt={'upRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -top-16 size-80 place-self-center md:-top-28 md:size-[36rem] lg:-top-32"
        // style={{ top: '-100px' }}
      />
      <LazyMotion features={domAnimation}>
        <m.div
          style={{ scale }}
          className="items-right z-10 mb-2 flex flex-col justify-end text-right md:items-center md:text-center"
        >
          <h3 className="text-textsizebrandh2 font-black leading-none md:text-textsizebrandh1">
            הגיע הזמן לעשות
          </h3>
          <h3 className="text-textsizebrandh2 font-black leading-none text-colorBrandPurple500light md:text-textsizebrandh1">
            את זה כמו שצריך
          </h3>
        </m.div>

        <m.div
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-2xl flex-col items-center justify-start text-center lg:place-self-center"
        >
          <p className="flex-start text-background flex h-fit flex-col gap-2 whitespace-pre-wrap text-right text-textsizebrandh6 font-medium leading-snug md:text-center lg:items-center lg:justify-center">
            <span className="flex flex-row items-center gap-2 text-textsizebrandh4 font-extrabold md:justify-center">
              {solutionTexts[currentTextIndex].icon}{' '}
              {solutionTexts[currentTextIndex].title}
            </span>

            {solutionTexts[currentTextIndex].description}
            {solutionTexts[currentTextIndex].button}
          </p>
        </m.div>
      </LazyMotion>

      {/* </div> */}
    </div>
  );
};

export default SolutionSection;
