'use client';
import textsChanges from '@/types/TextsChanges';
import {
  LazyMotion,
  domAnimation,
  m,
  MotionValue,
  useMotionValueEvent,
} from 'motion/react';
import { useState } from 'react';
import TextsChangeOnScroll from './TextsChangeOnScroll';
import Image from 'next/image';

interface ProblemsSectionProps {
  scrollYProgress: MotionValue<number>;
}

const ProblemsSection = ({ scrollYProgress }: ProblemsSectionProps) => {
  const [currentText, setCurrentText] = useState(0);
  const texts: textsChanges[] = [
    {
      title: {
        text: 'עשיתי אתר בעבר',
        highlight: 'וזה לא עבד לי',
      },
      text: 'אולי פשוט לא בנו לכם אותו נכון. \n אתר לא אמור להיות רק "יפה".\nהוא צריך לגרום לאנשים לפנות אליכם. \n וזה בדיוק מה שאני עושה',
    },
    {
      title: {
        text: 'אני לא מבין בטכנולוגיה',
        highlight: 'זה מאוד מסובך !',
      },
      text: 'אתם לא צריכים להבין בטכנולוגיה.\nאני מלווה אתכם מההתחלה ועד הסוף.\nהאתר יהיה קל לניהול גם אחרי המסירה.\nואם תצטרכו עזרה אני כאן בשבילכם.\nאני לא עוזב את הלקוחות שלי',
    },
    {
      title: {
        text: 'היום הכל זה רשתות חברתיות ו AI',
        highlight: 'אתר זה לא רלוונטי',
      },
      text: 'נכון, רשתות חברתיות ו AI עושים רעש וללא ספק הם חלק בלתי נפרד מתהליך השיווק.\nאבל כשהלוקח רוצה לבדוק אותך ברצינות הוא מחפש אתר מקצועי.\nזה המקום היחידי בו אתם שולטים על מה שהלקוח רואה, בלי אלגוריתמים, בלי הסחות דעת רק אתם והמסר שלכם.\nאתר טוב לא מחליף את הרשתות החברתיות הוא כלי שיווקי שמשלים את המעטפת של העסק שלכם.',
    },
  ];
  // Listen for changes to scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll position to text index
    if (latest < 0.33) {
      setCurrentText(0);
    } else if (latest < 0.66) {
      setCurrentText(1);
    } else {
      setCurrentText(2);
    }
  });

  return (
    <div className="z-4 relative grid h-screen w-full bg-colorBrandPurple900dark px-4 md:px-20">
      <Image
        src={'/purpleCT2.png'}
        alt={'upRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -top-16 size-80 place-self-center md:-top-28 md:size-[36rem] lg:-top-32"
        // style={{ top: '-100px' }}
      />
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-evenly">
        <h2 className="flex flex-col items-start justify-end text-balance text-right text-textsizebrandh2 font-black leading-none text-colorBrandWhiteYellow100light md:items-center md:text-center lg:items-start lg:text-right">
          האם אחד המשפטים האלה מוכר לכם ?{' '}
          <span className="lg:items-right inline-block text-textsizebrandh1 font-black text-colorBrandPink500dark">
            אתם.ן לא לבד
          </span>
        </h2>
        <LazyMotion features={domAnimation}>
          <m.div
            id="texts"
            className="no-scrollbar w-full flex-col items-start justify-start overflow-y-scroll text-balance text-right leading-none md:items-center md:justify-center md:text-center lg:flex lg:items-start lg:text-right"
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextsChangeOnScroll texts={texts[currentText]} />
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default ProblemsSection;
