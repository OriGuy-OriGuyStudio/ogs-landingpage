import { Heart, Sparkle } from 'lucide-react';
import React from 'react';

import { motion } from 'motion/react';
import DiffTitles from '@/app/components/differance/DiffTitles';
import ListBenefits from '../../app/components/differance/ListBenefits';
import BenefitsImage from '../../app/components/differance/BenefitsImage';
import StepByStep from '../steps/StepByStep';
import DiffHighlight from '@/app/components/differance/DiffHighlight';
import ContactMe from '../ContactMe/ContactMe';
import Image from 'next/image';

function DifferanceOthers() {
  return (
    <div className="bg-color-brand-purple-900-dark sticky top-0 z-10 px-4 py-20 sm:px-20">
      <DiffHighlight />
      <section className="z-20">
        <DiffTitles />
        <ul className="mt-4 flex w-full flex-col items-center justify-center gap-8 leading-snug lg:w-[100%] lg:flex-row lg:justify-between">
          <ListBenefits />
          <BenefitsImage />
        </ul>
      </section>
      <StepByStep />
      <ContactMe />
      <a
        href="http://origuystudio.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={'/fullLogoWhiteSVG.svg'}
          width={72}
          height={72}
          alt={'studio ori guy'}
          className="mx-auto"
        />
      </a>
    </div>
  );
}

export default DifferanceOthers;
