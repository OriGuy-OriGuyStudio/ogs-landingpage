import { color } from "motion/react";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const texts = {
    smallTitle: ":לאתר שלך יש תפקיד אחד",
    mainTitle: "לגרום לאנשים לעצור, להרגיש, ולהגיד",
    colorTitle: "זה בדיוק מה שחיפשתי",
    description:
      "אפיון, עיצוב ובניית אתרים לעסקים שמבינים שהאתר שלהם צריך לעבוד עבורם, להציג את הערך, לבלוט מהמתחרים ולייצר פניות.",
    button: "רוצים אתר שמייצר לקוחות? לחצו כאן",
    textUnderButton: "בלי התחייבות, רק שיחת היכרות",
  };
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <p className="text-size-brand-p">{texts.smallTitle}</p>
      <h1 className="text-size-brand-h1 font-black">
        {texts.mainTitle}{" "}
        <span className="text-color-brand-pink-500-dark">
          "{texts.colorTitle}"
        </span>
      </h1>
      <h3>{texts.description}</h3>
      <button>{texts.button}</button>
      <p>{texts.textUnderButton}</p>
    </div>
  );
};

export default HeroSection;
