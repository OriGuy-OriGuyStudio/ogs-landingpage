'use client';
import HeroSection from '@/sections/hero/Hero';
import PainSection from '@/sections/pain/PainSection';
import ProblemsSection from '@/sections/problems/Problems';
import { useScroll } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const painSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    console.log('scrollYProgress', problemScrollProgress.get());
  }, [problemScrollProgress]);

  return (
    <main ref={container} className="relative">
      <section className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        <HeroSection scrollYProgress={scrollYProgress} />
      </section>
      <section className="sticky top-0 z-1 h-screen w-full overflow-hidden">
        <PainSection
          ref={painSectionRef}
          scrollYProgress={painScrollProgress}
        />
      </section>
      <div ref={problemSectionRef} className="h-[300vh]">
        <section className="sticky top-0 z-3 h-screen w-full overflow-hidden border-2 border-amber-700">
          <ProblemsSection scrollYProgress={problemScrollProgress} />
        </section>
      </div>
    </main>
  );
}
