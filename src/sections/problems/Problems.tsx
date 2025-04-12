import { MotionValue } from 'motion/react';

interface ProblemsSectionProps {
  scrollYProgress: MotionValue<number>;
}

const ProblemsSection = ({ scrollYProgress }: ProblemsSectionProps) => {
  return (
    <div className="bg-color-brand-purple-900-dark h-[300vh]">
      problem Section
    </div>
  );
};

export default ProblemsSection;
