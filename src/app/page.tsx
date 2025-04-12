'use client';
import HeroSection from '@/sections/hero/Hero';
import PainSection from '@/sections/pain/PainSection';
import ProblemsSection from '@/sections/problems/Problems';
import { useScroll } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <main ref={container} className="h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroSection scrollYProgress={scrollYProgress} />
      </div>
      <div className="sticky h-screen overflow-hidden">
        <PainSection scrollYProgress={scrollYProgress} />
      </div>
      <div className="sticky h-[300vh] overflow-hidden">
        <ProblemsSection scrollYProgress={scrollYProgress} />
      </div>
    </main>
  );
}
