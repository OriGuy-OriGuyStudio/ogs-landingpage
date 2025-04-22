interface HeroButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeroButtonProps) => {
  return (
    <>
      <button className="bg-colorBrandPink500dark text-colorBrandWhiteYellow100light text-textsizebrandh6 group mb-2 cursor-pointer rounded-xl px-6 py-3 font-black shadow-[0px_8px_16px_0_rgba(245,82,116,0.25)]">
        <div className="relative overflow-hidden">
          <p className="duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-7">
            {text}
          </p>
          <p className="text-colorBrandPurple500light right-2/6 absolute top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
            לחצו כאן
          </p>
        </div>
      </button>
    </>
  );
};

export default HeroButton;
