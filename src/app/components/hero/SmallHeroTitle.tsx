interface SmallHeroTitleProps {
  text: string;
}

const SmallHeroTitle = ({ text }: SmallHeroTitleProps) => {
  return <p className="text-size-brand-h6">{text}</p>;
};

export default SmallHeroTitle;
