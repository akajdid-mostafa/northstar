import { Puzzle, Rocket } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 gs-reveal leading-tight">
          Our Proven Process to<br />Drive Your <span className="font-serif-italic text-accent">Success</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gs-reveal">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-gray-100">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent"></div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Discover &amp; Diagnose</h3>
            <p className="text-gray-500 text-sm md:text-base">Uncover challenges, opportunities, and root causes with clarity.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-gray-100 transform rotate-45">
              <Puzzle className="w-4 h-4 md:w-5 md:h-5 text-accent -rotate-45" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Strategize &amp; Plan</h3>
            <p className="text-gray-500 text-sm md:text-base">Build actionable roadmaps aligned with your business goals.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-gray-100">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Execute &amp; Optimize</h3>
            <p className="text-gray-500 text-sm md:text-base">Implement solutions and monitor progress for continuous improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
