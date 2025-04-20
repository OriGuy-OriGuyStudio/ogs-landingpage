import { Sparkle } from 'lucide-react';
import React from 'react';

function ListBenefits() {
  return (
    <span className="inline-block w-full space-y-4 lg:w-[60%]">
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">
          תהליך אישי - אתה לא עוד לקוח במערכת, אני מלווה אותך אחד על אחד, תהליך
          אישי ומותאם
        </p>
      </li>
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">
          התאמה מלאה לעסק – בלי תבניות מוכנות מראש
        </p>
      </li>
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">חשיבה אסטרטגית, לא רק עיצוב</p>
      </li>
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">
          אתר שנבנה עם מטרה ברורה - לייצר לך פניות או כל מטרה עסקית שנקבע באפיון
        </p>
      </li>
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">
          שקיפות, זמינות וליווי גם אחרי העלייה לאוויר
        </p>
      </li>
      <li className="flex items-start justify-start gap-2">
        <Sparkle
          size={32}
          color={'#F55274'}
          className="shrink-0 animate-pulse"
        />
        <p className="text-size-brand-h5">
          גישה בגובה העיניים - אולי כלי העבודה שלי מסובכים, אבל לך אני משפט את
          הכל{' '}
        </p>
      </li>
    </span>
  );
}

export default ListBenefits;
