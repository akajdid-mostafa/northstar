import { Folder, Star, Users, Lightbulb } from 'lucide-react';

const stats = [
  {
    icon: <Folder className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />,
    bg: 'bg-blue-50',
    number: '150+',
    desc: 'Over 300+ clients complete high-impact projects.',
  },
  {
    icon: <Star className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />,
    bg: 'bg-purple-50',
    number: '98%',
    desc: 'Trusted by hundreds of clients who rate our work highly.',
  },
  {
    icon: <Users className="text-indigo-600 w-5 h-5 md:w-6 md:h-6" />,
    bg: 'bg-indigo-50',
    number: '50+',
    desc: 'Our ability to adapt and deliver impactful solutions across.',
  },
  {
    icon: <Lightbulb className="text-orange-600 w-5 h-5 md:w-6 md:h-6" />,
    bg: 'bg-orange-50',
    number: '10+',
    desc: 'Building on years of experience, we provide trusted guidance.',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gray-50 mt-10 md:mt-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto mb-6 gs-reveal leading-tight">
          With a 98% client <span className="font-serif-italic text-accent">satisfaction</span>, our strategies have
          led to $50M+ in revenue
        </h2>
        <p className="text-gray-500 mb-12 md:mb-16 max-w-2xl mx-auto gs-reveal text-sm md:text-base">
          Our strategic approach is designed to align with your business goals, helping you scale faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl text-left shadow-sm border border-gray-100 gs-reveal">
              <div className={`${stat.bg} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-6`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">{stat.number}</h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
