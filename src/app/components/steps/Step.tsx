import { StepForward } from 'lucide-react';
import { motion } from 'motion/react';

import React from 'react';

export interface StepProps {
  icon: any;
  stage: string;
  title: string;
  secondaryTitle: string;
  text: string;
}

function Step({ icon, secondaryTitle, stage, text, title }: StepProps) {
  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.75,
          type: 'spring',
        }}
        id="card"
        className="border-1 flex flex-col gap-4 rounded-2xl border-colorBrandPurple500light px-8 py-10 shadow-sm shadow-colorBrandPurple500light lg:w-10/12"
      >
        <div
          id="top"
          className="flex flex-col items-start gap-4 lg:flex-row lg:items-center"
        >
          <motion.span
            initial={{ scale: 0.8, rotate: 0 }}
            whileInView={{ scale: 1, rotate: '-5deg' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
            }}
            className="inline-block"
          >
            {icon}
          </motion.span>
          <div className="font-black leading-none">
            <h4 className="text-textsizebrandh5">{stage}</h4>
            <h5 className="text-textsizebrandh3">{title}</h5>
            <p className="mt-2 text-colorBrandPink500dark">{secondaryTitle}</p>
          </div>
        </div>
        <div id="bottom">
          <p className="w-full text-textsizebrandh6 leading-snug lg:w-8/12">
            {text}
          </p>
        </div>
      </motion.div>
      <motion.span
        whileInView={{ rotate: '90deg' }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <StepForward className="size-16 text-colorBrandPink500dark lg:size-16" />
      </motion.span>
    </>
  );
}

export default Step;
