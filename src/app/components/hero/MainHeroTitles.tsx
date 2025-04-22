import { useRef } from 'react';

interface MainHeroTitlesProps {
  mainText: string;
  colorText: string;
}

const MainHeroTitles = ({ mainText, colorText }: MainHeroTitlesProps) => {
  const textToScale = useRef<HTMLSpanElement>(null);
  return (
    <h1 className="text-textsizebrandh3 sm:text-textsizebrandh1 text-colorBrandWhiteYellow100light mb-2 text-balance font-black leading-none">
      {mainText} <br />
      <span
        ref={textToScale}
        className="magnify-container text-colorBrandPink500dark sm:text-textsizebrandh1 relative inline-block w-fit text-pretty font-black"
      >
        &quot;{colorText}&quot;
      </span>
    </h1>
  );
};

export default MainHeroTitles;
