'use client';
import textsChanges from '@/types/TextsChanges';

interface TextsChangeOnScrollProps {
  texts: textsChanges;
}

const TextsChangeOnScroll = ({ texts }: TextsChangeOnScrollProps) => {
  return (
    <>
      {/* Fixed height container for the title to prevent movement */}
      <h3 className="text-textsizebrandh2 mb-2 mt-6 flex min-h-[100px] flex-col justify-start text-pretty text-right font-black md:justify-center md:text-center lg:justify-center lg:text-right">
        {texts.title.text}
        <span className="text-colorBrandRed400light inline-block">
          {texts.title.highlight}
        </span>
      </h3>

      {/* Fixed height container for the text content */}
      <p className="text-colorBrandWhiteYellow100light no-scrollbar text-textsizebrandh5 overflow-y-scroll whitespace-pre-line font-normal leading-snug">
        {texts.text}
      </p>
    </>
  );
};

export default TextsChangeOnScroll;
