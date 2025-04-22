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
        className="border-color-brand-purple-500-light shadow-color-brand-purple-500-light border-6 flex flex-col gap-4 rounded-2xl px-8 py-10 shadow-md lg:w-10/12"
      >
        <div
          id="top"
          className="flex flex-col items-start gap-4 lg:flex-row lg:items-center"
        >
          <motion.span
            initial={{ scale: 0.8, rotate: 0 }}
            whileInView={{ scale: 1.05, rotate: '10deg' }}
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
            <p className="text-colorBrandPink500dark mt-2">{secondaryTitle}</p>
          </div>
        </div>
        <div id="bottom">
          <p className="text-textsizebrandh6 w-full leading-snug lg:w-8/12">
            {text}
          </p>
        </div>
      </motion.div>
      <motion.span
        whileInView={{ rotate: '90deg' }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <StepForward className="text-colorBrandPink500dark size-16 lg:size-16" />
      </motion.span>
    </>
  );
}

export default Step;
