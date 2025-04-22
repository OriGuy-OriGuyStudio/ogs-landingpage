interface SecondaryHeroTitleProps {
  text: string;
}

const SecondaryHeroTitle = ({ text }: SecondaryHeroTitleProps) => {
  return (
    <h3 className="text-textsizebrandh6 sm:w-5/8 mx-auto mb-8 w-full leading-snug">
      {text}
    </h3>
  );
};

export default SecondaryHeroTitle;
