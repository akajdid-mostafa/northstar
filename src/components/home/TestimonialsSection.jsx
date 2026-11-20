const testimonials = [
  {
    text: 'Communication was fantastic. We were kept in the loop at every stage of the project, with regular updates and clear reporting.',
    name: 'Annette Black',
    role: 'Construction worker',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: "One of the best investments we've made as a company.",
    name: 'Jane Cooper',
    role: 'Mechanic',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: 'Sharp strategy helped us turn a struggling department into a high-performing unit and boost team productivity, and refocus our entire operation on what truly matters.',
    name: 'Arlene McCoy',
    role: 'Janitor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'They provided clarity where we only saw chaos. Their strategic insight unlock new growth opportunities.',
    name: 'Cameron Williamson',
    role: 'Stocking associate',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    text: 'Their team went above and beyond to deliver results that exceeded our expectations. We saw a 40% increase in efficiency within the first quarter.',
    name: 'Robert Fox',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    text: 'A game-changer for our business. Highly recommended for any company looking to scale.',
    name: 'Leslie Alexander',
    role: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 gs-reveal leading-tight">
        Proven What Our Clients <span className="font-serif-italic text-accent">Say</span>
      </h2>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 text-left">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl break-inside-avoid gs-reveal inline-block w-full"
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-3 md:mb-4 font-serif">&ldquo;</p>
            <p className="text-gray-700 mb-5 md:mb-6 font-medium text-sm md:text-base">{t.text}</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-bold text-sm">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
