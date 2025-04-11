import { Search } from 'lucide-react';
import { useRef } from 'react';

interface MainHeroTitlesProps {
  mainText: string;
  colorText: string;
}

const MainHeroTitles = ({ mainText, colorText }: MainHeroTitlesProps) => {
  const textToScale = useRef<HTMLSpanElement>(null);
  return (
    <h1 className="text-size-brand-h2 sm:text-size-brand-h1 text-color-brand-whiteYellow-100-light mb-2 leading-none font-black text-balance">
      {mainText} <br />
      <span
        ref={textToScale}
        className="magnify-container text-color-brand-pink-500-dark sm:text-size-brand-h1 relative inline-block w-fit font-black text-pretty"
      >
        "{colorText}"
        {/* <span>
          <Search size={48} className="absolute -top-2 sm:size-24" />
        </span> */}
      </span>
    </h1>
  );
};

export default MainHeroTitles;
