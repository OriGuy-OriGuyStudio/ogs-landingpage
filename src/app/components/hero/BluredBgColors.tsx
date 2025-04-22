import Image from 'next/image';

const BluredBgColors = () => {
  return (
    <>
      {/* <div
        className="pointer-events-none fixed -z-50 size-80 rounded-full bg-colorBrandPurple500light opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', left: '-10%' }}
      /> */}
      <Image
        src={'/upLeft.png'}
        alt={'upLeft'}
        width={64}
        height={64}
        className="pointer-events-none absolute -z-50 md:size-[36rem]"
        style={{ top: '0', left: '0' }}
      />
      <Image
        src={'/upRight.png'}
        alt={'upRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ top: '0', right: '0' }}
      />
      <Image
        src={'/downLeft.png'}
        alt={'downLeft'}
        width={20}
        height={20}
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ bottom: '0', left: '0' }}
      />
      <Image
        src={'/downRight.png'}
        alt={'downRight'}
        width={20}
        height={20}
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ bottom: '0', right: '0' }}
      />
      {/* <div
        className="pointer-events-none fixed -z-50 size-80 rounded-full bg-colorBrandPink500dark opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ top: '-10%', right: '-10%' }}
      /> */}
      {/* <div
        className="pointer-events-none fixed -z-50 size-80 rounded-full bg-colorBrandPink500dark opacity-50 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', left: '-10%' }}
      /> */}
      {/* <div
        className="pointer-events-none fixed -z-50 size-80 rounded-full bg-colorBrandPurple500light opacity-80 blur-[100px] sm:blur-[200px] md:size-[36rem]"
        style={{ bottom: '-10%', right: '-10%' }}
      /> */}
    </>
  );
};

export default BluredBgColors;
