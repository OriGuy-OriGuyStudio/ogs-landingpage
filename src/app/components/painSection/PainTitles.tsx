import { motion } from 'framer-motion';

interface PainTitlesProps {
  showTitles: boolean;
}

const PainTitles = ({ showTitles }: PainTitlesProps) => {
  if (!showTitles) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4.5 }}
      className="mt-8 flex w-fit flex-col items-center justify-center text-center text-textsizebrandh4 font-extrabold leading-none text-colorBrandGray800dark sm:text-textsizebrandh3"
    >
      <h2 className="mb-2 text-textsizebrandh3 font-black md:text-textsizebrandh2 lg:text-textsizebrandh2">
        רוב <span className="text-colorBrandPink500dark">האתרים</span> נראים
        טוב.
      </h2>
      <h3 className="mb-4 text-textsizebrandh5 font-bold leading-none sm:w-[60%]">
        אבל הם לא מספרים את{' '}
        <span className="font-bold text-colorBrandRed400light">הסיפור שלך</span>
        , לא בונים{' '}
        <span className="font-bold text-colorBrandRed400light">אמון</span> ולא
        מביאים{' '}
        <span className="font-bold text-colorBrandRed400light">תוצאות</span>.
      </h3>
      <p className="w-full text-pretty text-textsizebrandh6 font-normal leading-normal sm:w-[70%]">
        בעלי עסקים משקיעים אלפי שקלים באתר, אבל בסוף נשארים עם משהו יפה שלא באמת
        מביא פניות.
      </p>
      <a href="https://wa.me/message/BAPSKBNTSV6GA1">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, type: 'spring' }}
          whileTap={{ scale: 0.95, rotate: -1, transition: { duration: 0.12 } }}
          className="mt-6 rounded-2xl bg-colorBrandPink500dark px-6 py-3 text-textsizebrandh6 text-colorBrandWhiteYellow100light"
        >
          רוצים אתר שמביא תוצאות?
        </motion.button>
      </a>
    </motion.div>
  );
};

export default PainTitles;
