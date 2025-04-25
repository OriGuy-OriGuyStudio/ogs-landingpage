'use client';
import React from 'react';
import DiffTitles from '@/app/components/differance/DiffTitles';
import ListBenefits from '../../app/components/differance/ListBenefits';
import BenefitsImage from '../../app/components/differance/BenefitsImage';
import StepByStep from '../steps/StepByStep';
import ContactMe from '../ContactMe/ContactMe';
import Image from 'next/image';

function DifferanceOthers() {
  return (
    <div className="relative z-50 grid w-full overflow-y-hidden rounded-3xl bg-colorBrandPurple900dark px-4 py-20 sm:px-20">
      <Image
        src={'/purpleCT2.png'}
        alt={'upRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -top-48 -z-20 size-[32rem] place-self-center md:-top-28 lg:-top-32"
        // style={{ top: '-100px' }}
      />
      <section className="z-20 block w-full">
        <DiffTitles />
        <span className="mt-4 flex w-full flex-col items-center justify-center gap-8 leading-snug lg:w-[100%] lg:flex-row lg:justify-between">
          <ListBenefits />
          <BenefitsImage />
        </span>
      </section>

      <StepByStep />
      <ContactMe />
    </div>
  );
}

export default DifferanceOthers;
