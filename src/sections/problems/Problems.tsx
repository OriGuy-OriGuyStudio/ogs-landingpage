import { motion, MotionValue } from 'motion/react';
import { div } from 'motion/react-client';

interface ProblemsSectionProps {
  scrollYProgress: MotionValue<number>;
}

const ProblemsSection = ({ scrollYProgress }: ProblemsSectionProps) => {
  return (
    <div className="bg-color-brand-purple-900-dark h-full leading-none">
      <h2 className="text-color-brand-whiteYellow-100-light text-size-brand-h1 font-black">
        האם אחד המשפטים האלה מוכר לכם ?{' '}
        <span className="text-color-brand-pink-500-dark text-size-brand-h1 font-black">
          אתם.ן לא לבד
        </span>
      </h2>

      <p>text to cange</p>
    </div>
  );
};

export default ProblemsSection;
