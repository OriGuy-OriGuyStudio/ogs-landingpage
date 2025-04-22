'use client';
import ContactMeForm from '@/app/components/contactMe/ContactMeForm';
import { AtSign } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function ContactMe() {
  return (
    <div className="bg-colorBrandPurple900dark bottom-0 h-screen px-2 py-20 sm:px-20">
      <div className="lg:text-textsizebrandh1 text-textsizebrandh2 font-black leading-none">
        <h6>הגעתם עד לכאן?</h6>
        <h6>יאללה, זה הזמן לעבוד כמו שצריך !</h6>
        <p className="text-textsizebrandh5 text-colorBrandPink500dark">
          בחרו מה שנוח לכם, ואני אדאג לשאר
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-16 lg:flex-row">
        <div className="leading-none">
          <h4 className="text-textsizebrandh3 font-black">שונאים טפסים?</h4>
          <h5 className="text-textsizebrandh3 font-black">שלחו לי הודעה</h5>
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
        <div className="leading-none lg:w-5/12">
          <h4 className="text-textsizebrandh3 font-black">שונאים טפסים?</h4>
          <h5 className="text-textsizebrandh3 font-black">שלחו לי הודעה</h5>
          <div className="mt-4 space-y-4">
            <ContactMeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
