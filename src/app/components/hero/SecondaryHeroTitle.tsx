interface SecondaryHeroTitleProps {
  text: string;
}

const SecondaryHeroTitle = ({ text }: SecondaryHeroTitleProps) => {
  return (
    <h3 className="text-size-brand-h6 mx-auto mb-8 w-full leading-snug sm:w-5/8">
      {text}
    </h3>
  );
};

export default SecondaryHeroTitle;
