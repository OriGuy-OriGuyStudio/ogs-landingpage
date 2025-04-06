"use client";
import HeroButton from "@/app/components/hero/HeroButton";
import { Search } from "lucide-react";
import { color } from "motion/react";
import { use, useRef } from "react";
import { text } from "stream/consumers";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const textToScale = useRef<HTMLSpanElement>(null);
  const texts = {
    smallTitle: "לאתר שלך יש תפקיד אחד:",
    mainTitle: "לגרום לאנשים לעצור, להרגיש, ולהגיד",
    colorTitle: "זה בדיוק מה שחיפשתי",
    description:
      "אפיון, עיצוב ובניית אתרים לעסקים שמבינים שהאתר שלהם צריך לעבוד עבורם, להציג את הערך, לבלוט מהמתחרים ולייצר פניות.",
    button: "רוצים אתר שמייצר לקוחות?",
    textUnderButton: "בלי התחייבות, רק שיחת היכרות",
  };
  return (
    <div className="text-right text-color-brand-whiteYellow-100-light sm:text-center leading-none">
      <p className="text-size-brand-p">{texts.smallTitle}</p>
      <h1 className="text-size-brand-h2 sm:text-size-brand-h1 font-black mb-2 ">
        {texts.mainTitle}{" "}
        <span
          ref={textToScale}
          className=" relative magnify-container text-color-brand-pink-500-dark block "
        >
          "{texts.colorTitle}"
          <span>
            <Search size={60} className="absolute -top-1 -right-3 " />
          </span>
        </span>
      </h1>
      <h3 className="text-size-brand-h6 leading-snug mb-8 w-full sm:w-5/8 mx-auto">
        {texts.description}
      </h3>
      <HeroButton text={texts.button} />
      <p className="text-size-brand-p">{texts.textUnderButton}</p>
    </div>
  );
};

export default HeroSection;
