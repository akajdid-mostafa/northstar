import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const services = [
  {
    slug: 'wealth-finance',
    number: '[01]',
    title: 'Wealth Finance',
    img: '/images/webp/services-optimized.webp',
    desc: 'Helping organizations identify vulnerabilities and safeguard assets with proactive, data-driven risk strategies.',
    items: ['Comprehensive Risk Audits', 'Compliance & Regulatory Alignment'],
  },
  {
    slug: 'risk-assessment',
    number: '[02]',
    title: 'Risk Assessment',
    img: '/images/webp/risk-assessment-optimized.webp',
    desc: 'Identifying operational blind spots and mitigating potential threats before they impact your bottom line.',
    items: ['Proactive Threat Analysis', 'Crisis Management & Prevention'],
  },
  {
    slug: 'team-strategy',
    number: '[03]',
    title: 'Team Strategy',
    img: '/images/webp/case-study-optimized.webp',
    desc: 'Building high-performing teams through cultural alignment, leadership development, and collaboration coaching.',
    items: [],
  },
  {
    slug: 'growth-planning',
    number: '[04]',
    title: 'Growth Planning',
    img: '/images/webp/growth-planning-optimized.webp',
    desc: 'Mapping a clear route for scaling, identifying new market opportunities, and optimizing sales funnels.',
    items: [],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const listRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const triggers = itemsRef.current
      .filter(Boolean)
      .map((item, index) =>
        ScrollTrigger.create({
          trigger: item,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        })
      );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [isDesktop]);

  return (
    <section className="px-4 py-12 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-8 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end md:gap-0">
          <h2 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Driving Growth Through Strategic <span className="font-serif-italic text-accent">Excellence</span>
          </h2>

          <a
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-primary text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium hover:bg-accent transition text-sm md:text-base"
          >
            See All Service <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Services List */}
          <div ref={listRef}>
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className={`service-item flex flex-col justify-center border-b border-gray-200 py-8 transition-colors duration-500 md:py-10 lg:min-h-[60vh] ${!isDesktop || activeIndex === i ? 'active' : ''
                  }`}
              >
                <h3
                  className={`service-title flex items-center gap-2 text-xl font-semibold transition-colors duration-500 sm:gap-3 sm:text-2xl md:gap-4 md:text-3xl lg:text-4xl ${activeIndex === i ? 'text-accent' : 'text-primary'
                    }`}
                >
                  <span className="text-[10px] font-normal text-gray-400 sm:text-xs md:text-sm">{service.number}</span>
                  {service.title}
                </h3>
                <div className={`service-content ${!isDesktop || activeIndex === i ? 'active' : ''}`}>
                  <div className="pt-3 text-sm text-gray-600 sm:pt-4 md:pt-6 md:text-base lg:text-lg">
                    <p className="mb-4 max-w-lg leading-relaxed text-gray-500 sm:mb-6">{service.desc}</p>
                    {service.items.length > 0 && (
                      <ul className="mb-6 space-y-2 sm:mb-8 md:space-y-3">
                        {service.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs font-medium text-primary sm:gap-3 sm:text-sm md:text-base">
                            <Check className="h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4 md:h-5 md:w-5" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Mobile Image - shown inline when active */}
                    <div className="mb-6 lg:hidden">
                      <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md sm:h-[250px] md:h-[300px]">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>


                    <a
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-primary"
                    >
                      Explore Service
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover:text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image Container - Desktop only */}
          <div className="relative hidden lg:block lg:sticky lg:top-28">
            <div className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-2xl xl:h-[500px]">
              {services.map((service, i) => (
                <img
                  key={i}
                  src={service.img}
                  alt={service.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${activeIndex === i ? 'scale-100 opacity-100 blur-0' : 'scale-110 opacity-0 blur-sm'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

