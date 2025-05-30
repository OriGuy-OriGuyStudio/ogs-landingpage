'use client';
import DemoProjects from '@/sections/demoProjects/DemoProjects';
import DifferanceOthers from '@/sections/differanceOthers/DifferanceOthers';
import HeroSection from '@/sections/hero/Hero';
import PainSection from '@/sections/pain/PainSection';
import ProblemsSection from '@/sections/problems/Problems';
import SolutionSection from '@/sections/solution/SolutionSection';
import { useScroll } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const painSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      console.log(locomotiveScroll);
    })();
  }, []);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: painScrollProgress } = useScroll({
    target: painSectionRef,
    offset: ['start end', 'start start'], // This range covers from when the section appears to when it's fully in view
  });
  const { scrollYProgress: problemScrollProgress } = useScroll({
    target: problemSectionRef,
    offset: ['start start', 'end end'], // This range covers from when the section appears to when it's fully in view
  });
  const { scrollYProgress: soltutionScrollProgress } = useScroll({
    target: solutionSectionRef,
    offset: ['start start', 'end end'], // This range covers from when the section appears to when it's fully in view
  });

  return (
    <main ref={container} className={`relative`}>
      <section className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-transparent">
        <HeroSection scrollYProgress={scrollYProgress} />
      </section>
      <section className="z-1 sticky top-0 h-screen w-full overflow-hidden bg-transparent">
        <PainSection
          ref={painSectionRef}
          scrollYProgress={painScrollProgress}
        />
      </section>
      <div ref={problemSectionRef} className="relative h-[300vh]">
        <section className="no-scrollbar z-3 sticky top-0 w-full overflow-x-hidden overflow-y-scroll rounded-3xl bg-transparent shadow-2xl">
          <ProblemsSection scrollYProgress={problemScrollProgress} />
        </section>
      </div>
      <div ref={solutionSectionRef} className="relative h-[500vh]">
        <section className="no-scrollbar z-6 sticky top-0 h-screen w-full overflow-x-hidden bg-transparent shadow-2xl">
          <SolutionSection scrollYProgress={soltutionScrollProgress} />
        </section>
      </div>
      <section className="no-scrollbar sticky top-0 z-10 h-screen w-full overflow-x-hidden bg-colorBrandGray800dark bg-transparent shadow-2xl">
        <DemoProjects />
      </section>
      <section className="no-scrollbar sticky top-0 z-10 w-full overflow-x-hidden shadow-2xl">
        <DifferanceOthers />
      </section>
    </main>
  );
}
