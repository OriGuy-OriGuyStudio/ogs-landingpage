'use client';
import PainCTA from '@/app/components/painSection/PainCTA';
import PainTitles from '@/app/components/painSection/PainTitles';
import {
  LazyMotion,
  domAnimation,
  m,
  MotionValue,
  useTransform,
} from 'motion/react';
import { useState, RefObject } from 'react';

interface PainSectionProps {
  scrollYProgress: MotionValue<number>;
  ref: RefObject<HTMLDivElement | null>;
}

const PainSection = ({ scrollYProgress, ref }: PainSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.56, 1]);
  const roundedCorners = useTransform(scrollYProgress, [0, 1], ['0px', '24px']);
  // const ref = useRef(null);
  const [showTitles, setShowTitles] = useState<boolean>(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={{}}
        style={{ scale, rotate, opacity, borderRadius: roundedCorners }}
        className="relative flex h-screen flex-col items-center justify-center bg-colorBrandCyan200light px-4 shadow-2xl sm:gap-6 sm:px-20"
      >
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 flex w-fit flex-col items-center justify-center text-center text-textsizebrandh4 font-extrabold leading-none text-colorBrandGray800dark sm:text-textsizebrandh3"
        >
          <PainCTA ref={ref} setShowTitles={setShowTitles} />
          <PainTitles showTitles={showTitles} />
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default PainSection;
