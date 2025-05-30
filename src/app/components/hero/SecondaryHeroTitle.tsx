interface SecondaryHeroTitleProps {
  text: string;
}

const SecondaryHeroTitle = ({ text }: SecondaryHeroTitleProps) => {
  return (
    <h2 className="sm:w-5/8 mx-auto mb-8 w-full text-textsizebrandh6 leading-snug lg:w-3/4">
      {text}
    </h2>
  );
};

export default SecondaryHeroTitle;
