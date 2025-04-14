import textsChanges from '@/types/TextsChanges';
import { log } from 'console';
import { motion, MotionValue, useMotionValueEvent } from 'motion/react';
import { div } from 'motion/react-client';
import { title } from 'process';
import { use, useEffect, useState } from 'react';
import { text } from 'stream/consumers';
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
      text: 'נכון, רשתות חברתיות ו AI עושים רעש וללא ספק הם חלק בלתי נפרד מתהליך השיווק.\nאבל כשהלוקח רוצה לבדוק אותך ברצינות הוא מחפש אתר מקצועי.\nזה המקום היחידי בו אתם שולטים על מה שהלקוח רואה, בלי אלגוריתמים, בלי הסחות דעת רק אתם והמסר שלכם.\nאתר טוב לא מחליף את הרשתות החברתיות הוא כלי שיווקי שמשלים את המעטפת של העסק שלכם.\n אתר מאפשר ללקוח להרגיש בטוח, להבין מי אתם ולהשאיר פרטים.',
    },
  ];
  // Listen for changes to scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll position to text index
    console.log('latest', latest);

    if (latest < 0.33) {
      setCurrentText(0);
    } else if (latest < 0.66) {
      setCurrentText(1);
    } else {
      setCurrentText(2);
    }
  });

  return (
    <div className="bg-color-brand-purple-900-dark flex h-full flex-col items-center justify-center px-4 sm:px-20">
      <div className="w-full max-w-4xl">
        <h2 className="text-color-brand-whiteYellow-100-light text-size-brand-h1 mb-8 text-right leading-none font-black">
          האם אחד המשפטים האלה מוכר לכם ?{' '}
          <span className="text-color-brand-pink-500-dark text-size-brand-h1 font-black">
            אתם.ן לא לבד
          </span>
        </h2>
        <motion.div
          className="w-full"
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextsChangeOnScroll texts={texts[currentText]} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemsSection;
