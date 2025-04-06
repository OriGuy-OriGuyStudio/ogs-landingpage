interface HeroButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeroButtonProps) => {
  return (
    <>
      <button className=" mb-2 cursor-pointer  bg-color-brand-pink-500-dark  shadow-[0px_8px_16px_0_rgba(245,82,116,0.25)] px-6 py-3 rounded-xl  text-color-brand-whiteYellow-100-light font-black text-size-brand-h6 group">
        <div className="relative overflow-hidden">
          <p className="group-hover:translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {text}
          </p>
          <p className="absolute text-color-brand-purple-500-light top-7 right-2/6 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            לחצו כאן
          </p>
        </div>
      </button>
    </>
  );
};

export default HeroButton;
