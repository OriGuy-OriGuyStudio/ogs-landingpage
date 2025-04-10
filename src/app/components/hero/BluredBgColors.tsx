interface BluredBgColorsProps {}

const BluredBgColors = ({}: BluredBgColorsProps) => {
  return (
    <>
      <div
        className="bg-color-brand-purple-500-light pointer-events-none fixed -z-9 size-80 rounded-full opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', left: '-10%' }}
      />
      <div
        className="bg-color-brand-pink-500-dark pointer-events-none fixed -z-9 size-80 rounded-full opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', right: '-10%' }}
      />
      <div
        className="bg-color-brand-pink-500-dark pointer-events-none fixed -z-9 size-80 rounded-full opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', left: '-10%' }}
      />
      <div
        className="bg-color-brand-purple-500-light pointer-events-none fixed -z-9 size-80 rounded-full opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', right: '-10%' }}
      />
    </>
  );
};

export default BluredBgColors;
