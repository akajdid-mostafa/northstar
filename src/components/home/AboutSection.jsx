import { ArrowUpRight, Pin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl gs-reveal pt-[7rem] min-[425px]:pt-[3rem] min-[480px]:pt-0">
        <h2 className="mb-12 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-primary md:mb-16 md:text-6xl lg:text-7xl">
          Since 2016, we&apos;re a team of all in all{' '}
          <span className="font-serif-italic font-normal text-accent">experienced</span> consultations, combine for strategic
          instant.
        </h2>

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex h-full flex-col justify-between gap-12 lg:col-span-3">
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 md:text-base">
              At Optimo, We help businesses navigate complexity unlock to growth achieve lasting transformation with a
              team of experienced consultations, We can combine for strategic instant.
            </p>

            <div className="border-l-2 border-accent pl-5">
              <h3 className="text-6xl font-bold leading-none tracking-[-0.05em] text-primary md:text-7xl">150+</h3>
              <p className="mt-2 text-sm font-bold text-primary">Successful Projects Delivered</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/webp/growth-planning-optimized.webp"
              alt="Northstar Team"
              className="h-[360px] w-full rounded-xl object-cover md:h-[420px] md:rounded-2xl"
            />
          </div>

          <div className="flex flex-col items-start gap-10 lg:col-span-4 lg:pl-10">
            <div className="w-full max-w-[220px] rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <Pin className="mb-6 h-5 w-5 rotate-45 fill-accent text-accent" />
              <ul className="space-y-4 text-sm font-medium text-primary">
                <li>Strategic Planning</li>
                <li>Operational Excellence</li>
                <li>Market Expansion</li>
                <li>Risk Management</li>
              </ul>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-primary"
            >
              Book A Free Call
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
