import Image from 'next/image';

const BluredBgColors = () => {
  return (
    <>
      <Image
        src={'/purpleTL2.png'}
        alt={'upLeft'}
        width={64}
        height={64}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none fixed -z-50 inline size-96 md:size-[36rem]"
        style={{ top: '0', left: '0' }}
      />
      <Image
        src={'/pinkTR2.png'}
        alt={'upRight'}
        width={20}
        height={20}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ top: '0', right: '0' }}
      />
      <Image
        src={'/pinkBL2.png'}
        alt={'downLeft'}
        width={20}
        height={20}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute -z-50 size-80 md:size-[36rem]"
        style={{ bottom: '0', left: '0' }}
      />
      <Image
        src={'/purpleBR2.png'}
        alt={'downRight'}
        width={20}
        loading="eager"
        fetchPriority="high"
        height={20}
        className="pointer-events-none absolute -z-50 size-96 md:size-[36rem]"
        style={{ bottom: '0', right: '0' }}
      />
    </>
  );
};

export default BluredBgColors;
