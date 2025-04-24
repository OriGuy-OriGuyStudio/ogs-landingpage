'use client';
import ContactMeForm from '@/app/components/contactMe/ContactMeForm';
import { AtSign } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function ContactMe() {
  return (
    <div className="bottom-0 bg-colorBrandPurple900dark px-4 py-20 sm:px-20">
      <div className="text-textsizebrandh3 font-black leading-none md:text-textsizebrandh1">
        <h6>הגעתם עד לכאן?</h6>
        <h6>יאללה, זה הזמן לעבוד כמו שצריך !</h6>
        <p className="mt-2 text-textsizebrandh4 text-colorBrandPink500dark">
          בחרו מה שנוח לכם, ואני אדאג לשאר
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="leading-none">
          <h4 className="text-textsizebrandh4 font-black">שונאים טפסים?</h4>
          <h5 className="text-textsizebrandh4 font-black">שלחו לי הודעה</h5>
          <div className="mt-4 space-y-4">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={'/whatsapp.svg'}
                alt={'whatsapp link'}
                width={40}
                height={40}
                className="size-8 lg:size-10"
              />
              <a
                className="text-textsizebrandh5 font-normal"
                href="https://wa.me/message/BAPSKBNTSV6GA1"
              >
                {' '}
                0547520899
              </a>
            </div>
            <div className="flex flex-row items-center gap-4">
              <AtSign size={40} className="size-8 lg:size-10" />
              <a
                className="text-textsizebrandh5 font-normal"
                href="mailto:origuy@origuystudio.com"
              >
                {' '}
                origuy@origuystudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 border-colorBrandWhiteYellow100lightOpacity"></div>

        <div className="leading-none lg:w-5/12">
          <h4 className="text-textsizebrandh4 font-black">אוהבים טפסים?</h4>
          <h5 className="text-textsizebrandh4 font-black">שלחו לי הודעה</h5>
          <div className="mt-4 space-y-4">
            <ContactMeForm />
          </div>
        </div>
      </div>
      <a
        href="http://origuystudio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src={'/fullLogoWhiteSVG.svg'}
          width={72}
          height={72}
          alt={'studio ori guy'}
          className="mx-auto mt-16"
        />
      </a>
    </div>
  );
}

export default ContactMe;
