import HeroSection from "@/sections/hero/Hero";

export default function Home() {
  return (
    <div className="min-w-screen flex items-center  justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-size-brand-h1 font-black text-color-brand-cyan-500-medium">
        סטודיו אורי גיא
      </h1>
      <HeroSection />
    </div>
  );
}
