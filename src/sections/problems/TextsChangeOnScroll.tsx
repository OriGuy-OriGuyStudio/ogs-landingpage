'use client';
import textsChanges from '@/types/TextsChanges';

interface TextsChangeOnScrollProps {
  texts: textsChanges;
}

const TextsChangeOnScroll = ({ texts }: TextsChangeOnScrollProps) => {
  return (
    <>
      {/* Fixed height container for the title to prevent movement */}
      <h3 className="text-size-brand-h2 mt-6 mb-2 flex min-h-[100px] flex-col justify-start text-right font-black text-pretty md:justify-center md:text-center lg:justify-center lg:text-right">
        {texts.title.text}
        <span className="text-color-brand-red-400-light inline-block">
          {texts.title.highlight}
        </span>
      </h3>

      {/* Fixed height container for the text content */}
      <p className="text-color-brand-whiteYellow-100-light no-scrollbar text-size-brand-h5 overflow-y-scroll leading-snug font-normal whitespace-pre-line">
        {texts.text}
      </p>
    </>
  );
};

export default TextsChangeOnScroll;
