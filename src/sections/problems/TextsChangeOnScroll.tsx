import textsChanges from '@/types/TextsChanges';

interface TextsChangeOnScrollProps {
  texts: textsChanges;
}

const TextsChangeOnScroll = ({ texts }: TextsChangeOnScrollProps) => {
  return (
    <div className="flex flex-col items-start justify-start text-right leading-none text-pretty sm:w-1/2">
      {/* Fixed height container for the title to prevent movement */}
      <div className="mb-2 flex min-h-[100px] flex-col justify-start">
        <h3 className="text-size-brand-h3 mt-6 flex flex-col text-right font-black">
          {texts.title.text}
          <span className="text-color-brand-red-400-light inline-block">
            {texts.title.highlight}
          </span>
        </h3>
      </div>

      {/* Fixed height container for the text content */}
      <div className="min-h-[300px]">
        <p className="text-color-brand-whiteYellow-100-light text-size-brand-h6 leading-snug font-normal whitespace-pre-line">
          {texts.text}
        </p>
      </div>
    </div>
  );
};

export default TextsChangeOnScroll;
