import { color } from "motion/react";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const texts = {
    smallTitle: "לאתר שלך יש תפקיד אחד:",
    mainTitle: "לגרום לאנשים לעצור, להרגיש, ולהגיד",
    colorTitle: "זה בדיוק מה שחיפשתי",
    description:
      "אפיון, עיצוב ובניית אתרים לעסקים שמבינים שהאתר שלהם צריך לעבוד עבורם, להציג את הערך, לבלוט מהמתחרים ולייצר פניות.",
    button: "רוצים אתר שמייצר לקוחות? לחצו כאן",
    textUnderButton: "בלי התחייבות, רק שיחת היכרות",
  };
  return (
    <div className="text-right text-color-brand-whiteYellow-100-light sm:text-center leading-none">
      <p className="text-size-brand-p">{texts.smallTitle}</p>
      <h1 className="text-size-brand-h2 sm:text-size-brand-h1 font-black mb-2 ">
        {texts.mainTitle}{" "}
        <span className="text-color-brand-pink-500-dark block ">
          "{texts.colorTitle}"
        </span>
      </h1>
      <h3 className="text-size-brand-h5 leading-snug mb-8 w-full sm:w-5/8 mx-auto">
        {texts.description}
      </h3>
      <button className="text-size-brand-h6 font-black">{texts.button}</button>
      <p className="text-size-brand-p-small">{texts.textUnderButton}</p>
    </div>
  );
};

export default HeroSection;
