import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 pb-4 pt-4 md:px-6 md:pb-6">
      <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[28px] md:min-h-[calc(100vh-3rem)] md:rounded-[36px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/webp/hero-optimized.webp"
        >
          <source
            src="/videos/7791991-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-8 pt-28 md:px-10 lg:px-12">
        <div className="relative w-full gs-reveal">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold leading-[1.08] text-white sm:text-6xl md:text-7xl">
              Navigate Business with 
               <span className="font-serif-italic font-normal"> Confidence</span>
            </h1>
            <p className="mb-8 max-w-3xl text-sm text-white/90 sm:text-base md:text-lg">
              Expert strategic consulting to drive sustainable growth, operational innovation, and lasting business
              transformation across industries and markets, maximizing impact.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-5 rounded-full bg-white pl-6 pr-3 py-3 text-sm group font-bold text-primary transition hover:bg-accent hover:text-white"
            >
              Book A Free Call
              <span className="flex h-9 w-9 items-center justify-center group-hover:bg-white rounded-full bg-accent text-white group-hover:text-accent">
                <ArrowUpRight className="h-4 w-4 " />
              </span>
            </a>
          </div>

          <div className="mt-10 w-full max-w-sm rounded-2xl border border-white/30 bg-white p-5 shadow-xl md:absolute md:bottom-[-140px] md:right-2 md:mt-0 md:p-6 lg:right-6">
            <h3 className="mb-2 text-lg font-bold leading-tight md:text-xl">Let&apos;s Move Your Business Forward</h3>
            <p className="mb-5 text-xs text-gray-500 md:text-sm">
              Success doesn&apos;t happen by chance—it&apos;s built through smart strategy, informed decisions.
            </p>
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-200 focus-within:border-accent transition">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none px-4 w-full text-sm"
              />
              <button className="bg-accent text-white p-2 rounded-full hover:bg-primary transition shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
