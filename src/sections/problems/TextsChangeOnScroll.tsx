'use client';
import textsChanges from '@/types/TextsChanges';

interface TextsChangeOnScrollProps {
  texts: textsChanges;
}

const TextsChangeOnScroll = ({ texts }: TextsChangeOnScrollProps) => {
  return (
    <>
      {/* Fixed height container for the title to prevent movement */}
      <h3 className="mb-2 flex min-h-[100px] flex-col justify-start text-balance text-right text-textsizebrandh3 font-extrabold md:justify-center md:text-center md:text-textsizebrandh2 lg:justify-center lg:text-right lg:text-textsizebrandh2">
        {texts.title.text}
        <span className="inline-block text-colorBrandRed400light">
          {texts.title.highlight}
        </span>
      </h3>

      {/* Fixed height container for the text content */}
      <p className="no-scrollbar overflow-y-scroll whitespace-pre-line text-textsizebrandh6 font-normal leading-snug text-colorBrandWhiteYellow100light">
        {texts.text}
      </p>
    </>
  );
};

export default TextsChangeOnScroll;
