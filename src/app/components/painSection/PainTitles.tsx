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
      className="text-size-brand-h4 sm:text-size-brand-h3 text-color-brand-gray-800-dark mt-8 flex w-fit flex-col items-center justify-center text-center leading-none font-extrabold"
    >
      <h2 className="text-size-brand-h2 mb-2 font-black">
        רוב <span className="text-color-brand-pink-500-dark">האתרים</span> נראים
        טוב.
      </h2>
      <h3 className="text-size-brand-h5 mb-4 leading-none font-extrabold sm:w-[60%]">
        אבל הם לא מספרים את{' '}
        <span className="text-color-brand-red-400-light font-extrabold">
          הסיפור שלך
        </span>
        , לא בונים{' '}
        <span className="text-color-brand-red-400-light font-extrabold">
          אמון
        </span>{' '}
        ולא מביאים{' '}
        <span className="text-color-brand-red-400-light font-extrabold">
          תוצאות
        </span>
        .
      </h3>
      <p className="text-size-brand-p w-[70%] leading-normal font-normal text-pretty sm:w-[60%]">
        בעלי עסקים משקיעים אלפי שקלים באתר, אבל בסוף נשארים עם משהו יפה שלא באמת
        מביא פניות.
      </p>
      <button className="bg-color-brand-pink-500-dark text-size-brand-h6 text-color-brand-whiteYellow-100-light mt-6 rounded-2xl px-6 py-3">
        רוצים אתר שמביא תוצאות?
      </button>
    </motion.div>
  );
};

export default PainTitles;
