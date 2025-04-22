interface SmallHeroTitleProps {
  text: string;
}

const SmallHeroTitle = ({ text }: SmallHeroTitleProps) => {
  return <p className="text-textsizebrandh6">{text}</p>;
};

export default SmallHeroTitle;
