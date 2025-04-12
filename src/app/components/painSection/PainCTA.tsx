import { motion, useInView } from 'motion/react';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface PainCTAProps {
  ref: RefObject<null>;
  setShowTitles: Dispatch<SetStateAction<boolean>>;
}

const PainCTA = ({ ref, setShowTitles }: PainCTAProps) => {
  const [count, setCount] = useState(3);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setCount(3); // Reset the countdown when not in view
      setCountdownStarted(false); // Reset countdown started state
      setShowTitles(false); // Hide titles when not in view
      return;
    }
    setShowTitles(true); // Show titles when in view
    const initialDelay = setTimeout(() => {
      setCountdownStarted(true);
    }, 1500); // 2.5 second initial delay

    if (isInView && count === -1) setCount(3);

    return () => clearTimeout(initialDelay);
  }, [isInView, count]);

  // Countdown effect
  useEffect(() => {
    if (!countdownStarted || count <= -1) return;

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count, countdownStarted]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-color-brand-whiteYellow-100-light border-color-brand-pink-500-dark text-color-brand-gray-800-dark flex h-fit w-fit flex-col items-center justify-center rounded-4xl rounded-tr-[100px] border-4 p-8 text-center leading-none shadow-2xl sm:items-center sm:justify-center sm:text-center"
    >
      <p className="text-size-brand-h1 text-color-brand-purple-500-light font-black">
        אם
      </p>
      <p className="text-size-brand-h3 font-black">הלקוח לא</p>
      <p className="text-size-brand-h4 inline-flex items-center justify-center gap-2 font-black whitespace-nowrap">
        מבין תוך
        <span className="text-size-brand-h1 text-color-brand-purple-500-light inline-flex flex-col">
          <motion.span
            key={count}
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0.4 }}
            transition={{ duration: 0.9, type: 'spring' }}
            className="inline-block"
          >
            {count}
          </motion.span>
          <span className="text-color-brand-pink-500-dark text-size-brand-p">
            שניות
          </span>
        </span>
        מה אתם
      </p>
      <p className="text-size-brand-h2 font-black">מציעים</p>
      <p className="text-size-brand-h1 text-color-brand-red-400-light font-black whitespace-nowrap">
        איבדתם אותו
      </p>
    </motion.div>
  );
};

export default PainCTA;
