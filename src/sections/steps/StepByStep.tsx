'use client';
import Step, { StepProps } from '@/app/components/steps/Step';
import { Code, ListTodo, PhoneCall, Rocket, SplinePointer } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import React from 'react';

function StepByStep() {
  const data: StepProps[] = [
    {
      icon: <PhoneCall className="size-10 md:size-10 lg:size-16" />,
      stage: 'שלב 1',
      title: 'שיחה קצרה להיכרות',
      secondaryTitle: 'קודם מדברים, לא ממלאים טפסים',
      text: 'נקיים פגישה טלפונית ראשונית. ,תספרו לי על העסק שלכם, נבין מה אתם צריכים ונבחן התאמה ראשונית לבניית אתר ביחד, לאחר מכן נתאם לנו שיחת אפיון מלאה בזום',
    },
    {
      icon: <ListTodo className="size-10 md:size-10 lg:size-16" />,
      stage: 'שלב 2',
      title: 'אפיון מדויק',
      secondaryTitle: 'עושים סדר לפני שמתחילים לבנות',
      text: 'פגישת האיפיון תתבצע בזום בצורה דיגיטלית כך שאתם יכולים לבצע אותה מכל מקום שנוח לכם בלי לבזבז זמן יקר. בשיחת האיפיון נדבר בהרחבה על העסק, נקבע מטרות עסקיות לאתר ואני אוכל להתחיל לבנות מבנה לאתר ולייצר את חווית המשתמש שהלקוח שלכם יעבור באתר ',
    },
    {
      icon: <SplinePointer className="size-10 md:size-10 lg:size-16" />,
      stage: 'שלב 3',
      title: 'עיצוב בהתאמה אישית',
      secondaryTitle: 'עיצוב ייחודי ומושך לקוחות עם חווית משתמש מודרנית',
      text: ',בשלב זה האתר שלכם מתחיל לקבל חיים. מתחילים בעיצוב בסיסי מאוד ומתקדמים לעיצוב מלא ומרשים שמתאים בדיוק ללקוחות שלכם ולעסק שלכם. הכל מותאם אישית, מיוחד וללא תבניות גנריות',
    },
    {
      icon: <Code className="size-10 md:size-10 lg:size-16" />,
      stage: 'שלב 4',
      title: 'פיתוח ובדיקות',
      secondaryTitle: 'בניית אתר בסטנדרט גבוה ובדיקות איכות QA',
      text: 'לאחר האישור שלכם על העיצוב אני מיד עובר לתהליך הפיתוח, הפיתוח מתבצע בכלים המתקדמים בתעשייה וברמת פיתוח גבוה. בנוסף האתר שלכם יעבור בדיקות איכות על מנת שנוודא שהכל עובד תקין, מהיר ומאובטח.',
    },
    {
      icon: <Rocket className="size-10 md:size-10 lg:size-16" />,
      stage: 'שלב 5',
      title: 'מסירה הדרכה וליווי',
      secondaryTitle: 'אני לא משאיר אתכם לבד !',
      text: 'איזה כיף 🎉  האתר מוכן! אני מדריך אתכם איך לתפעל אותו ואם שכחתם משהו אל דאגה אתם מקבלים ממני גם סרטון הסבר שזמין לכם תמיד בכל שעה ובכל מקום. עם שירות הליווי שלי – אתם לא נשארים לבד גם אחרי שהוא באוויר (שירות תמיכה בתשלום).',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-colorBrandPurple900dark py-20">
      <span className="text-center text-textsizebrandh1 font-black leading-none text-colorBrandWhiteYellow100light">
        <h3>איך זה עובד בפועל?</h3>
        <h3> שלב אחרי שלב </h3>
        <h3>בלי סיבוכים</h3>
      </span>
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        {data.map((card, index) => {
          return (
            <Step
              icon={card.icon}
              stage={card.stage}
              title={card.title}
              secondaryTitle={card.secondaryTitle}
              text={card.text}
              key={index}
            />
          );
        })}
      </div>
      <div className="mt-8 text-center text-textsizebrandh4 font-black leading-none">
        <p>אתם לא צריכים להבין בטכנולוגיה,</p>
        <LazyMotion features={domAnimation}>
          <m.p
            initial={{ letterSpacing: 0 }}
            whileInView={{ letterSpacing: '0.1rem' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
            }}
            className="text-colorBrandPink500dark"
          >
            אני כבר דואג להכל.
          </m.p>
          <p>אתם מתמקדמים בעסק שלכם,</p>
          <m.p
            initial={{ letterSpacing: 0 }}
            whileInView={{ letterSpacing: '0.1rem' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
            }}
            className="text-colorBrandPink500dark"
          >
            ואני דואג שהאתר יעבוד 24/7.
          </m.p>
        </LazyMotion>
      </div>
    </div>
  );
}

export default StepByStep;
