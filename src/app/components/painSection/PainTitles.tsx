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
      className="text-textsizebrandh4 sm:text-textsizebrandh3 text-colorBrandGray800dark mt-8 flex w-fit flex-col items-center justify-center text-center font-extrabold leading-none"
    >
      <h2 className="text-textsizebrandh2 mb-2 font-black">
        רוב <span className="text-colorBrandPink500dark">האתרים</span> נראים
        טוב.
      </h2>
      <h3 className="text-textsizebrandh5 mb-4 font-extrabold leading-none sm:w-[60%]">
        אבל הם לא מספרים את{' '}
        <span className="text-colorBrandRed400light font-extrabold">
          הסיפור שלך
        </span>
        , לא בונים{' '}
        <span className="text-colorBrandRed400light font-extrabold">אמון</span>{' '}
        ולא מביאים{' '}
        <span className="text-colorBrandRed400light font-extrabold">
          תוצאות
        </span>
        .
      </h3>
      <p className="text-textsizebrandp w-[70%] text-pretty font-normal leading-normal sm:w-[60%]">
        בעלי עסקים משקיעים אלפי שקלים באתר, אבל בסוף נשארים עם משהו יפה שלא באמת
        מביא פניות.
      </p>
      <button className="bg-colorBrandPink500dark text-textsizebrandh6 text-colorBrandWhiteYellow100light mt-6 rounded-2xl px-6 py-3">
        רוצים אתר שמביא תוצאות?
      </button>
    </motion.div>
  );
};

export default PainTitles;
