import { ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-10 px-4 md:px-6 gs-reveal">
      <div className="max-w-7xl mx-auto bg-accent rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row">
        <div className="p-8 md:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center text-white">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 opacity-80">[CTA]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Work with Experts to Grow Faster &amp; Run <span className="font-serif-italic">Smarter</span>
          </h2>

          <button className="group inline-flex justify-between items-center gap-4 rounded-full bg-white py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 font-bold text-primary transition hover:bg-gray-100 self-start mb-8 md:mb-10 text-sm md:text-base">

            Get Started
            <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-accent text-white transition">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
          <ul className="space-y-2 md:space-y-3 opacity-90 text-xs md:text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Schedule a Free Consultation
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Discover Custom Solutions
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Start Building Your Competitive Advantage
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 h-[300px] md:h-auto md:min-h-[400px]">
          <img
            src="/images/webp/cta-optimized.webp"
            alt="CTA Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
