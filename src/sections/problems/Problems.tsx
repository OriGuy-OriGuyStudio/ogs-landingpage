'use client';
import textsChanges from '@/types/TextsChanges';
import { motion, MotionValue, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import TextsChangeOnScroll from './TextsChangeOnScroll';

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
    <div className="bg-colorBrandPurple900dark z-4 grid h-screen w-full grid-cols-1 px-2 md:px-20 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8">
      <h2 className="text-colorBrandWhiteYellow100light text-textsizebrandh2 md:w-5/8 lg:w-3/8 mb-8 flex flex-col items-start justify-end text-right font-black leading-none md:mx-auto md:items-center md:text-center lg:items-start lg:text-right">
        האם אחד המשפטים האלה מוכר לכם ?{' '}
        <span className="text-colorBrandPink500dark text-textsizebrandh1 lg:items-right block font-black">
          אתם.ן לא לבד
        </span>
      </h2>
      <motion.div
        id="texts"
        className="no-scrollbar h-fit w-full flex-col items-start justify-start overflow-y-scroll text-pretty text-right leading-none md:items-center md:justify-center md:text-center lg:flex lg:w-2/4 lg:items-start lg:text-right"
        key={currentText}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TextsChangeOnScroll texts={texts[currentText]} />
      </motion.div>
    </div>
  );
};

export default ProblemsSection;
