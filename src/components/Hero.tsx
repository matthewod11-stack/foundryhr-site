'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { heroPanels } from '@/lib/data';
import { useCountUp } from '@/lib/animations';

function StatCounter({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 1500, 0, isVisible);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-warm-600">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-stone-500 mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  // Track which panel is active based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const panelWidth = container.offsetWidth;
      const newActivePanel = Math.round(scrollLeft / panelWidth);
      setActivePanel(newActivePanel);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect when user has scrolled past the hero section
  useEffect(() => {
    const handleWindowScroll = () => {
      const heroHeight = window.innerHeight;
      setHasScrolledPastHero(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const scrollToPanel = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById('consulting');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Panel 1: Opening */}
        <div className="flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center gradient-warm noise-overlay relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl px-8 text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight">
              The future of HR is forged at the intersection of{' '}
              <span className="text-gradient">people and technology</span>
            </h1>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 right-12 flex items-center gap-2 text-stone-500"
          >
            <span className="text-sm">Scroll</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-warm-300/20 blur-3xl pointer-events-none" />
        </div>

        {/* Panel 2: Perspective */}
        <div className="flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center gradient-subtle relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-8 text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight">
              That perspective shapes{' '}
              <span className="text-gradient">the companies I advise and the tools I build.</span>
            </h2>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-sage-400" />
          <div className="absolute bottom-1/4 left-20 w-3 h-3 rounded-full bg-warm-400" />
        </div>

        {/* Panel 3: Profile + Stats */}
        <div
          ref={statsRef}
          className="flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center gradient-subtle relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-8 text-center"
          >
            {/* Photo and name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              {/* Profile photo */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-warm-200 shadow-xl">
                <Image
                  src="/images/matt.jpeg"
                  alt="Matt O'Donnell"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-warm-500 animate-pulse" />
                <span className="text-sm font-medium text-warm-700">
                  AI-First HR Leader
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-stone-800">
                Matt O&apos;Donnell
              </h2>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-16"
            >
              {heroPanels[2].stats?.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isVisible={statsInView}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-sage-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-warm-200/30 blur-3xl pointer-events-none" />
        </div>

        {/* Panel 4: Transition to vertical */}
        <div className="flex-shrink-0 w-screen h-screen snap-start flex flex-col items-center justify-center bg-stone-100 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-stone-600 mb-8">
              Scroll down to explore
            </h3>

            {/* Animated scroll indicator */}
            <motion.button
              onClick={scrollToContent}
              className="p-4 rounded-full bg-warm-500 text-white shadow-lg shadow-warm-500/30 hover:bg-warm-600 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              href="#consulting"
              className="inline-flex items-center gap-2 px-6 py-3 bg-warm-600 text-white rounded-lg font-medium hover:bg-warm-700 transition-colors shadow-lg shadow-warm-600/20"
            >
              Work With Me
            </a>
            <a
              href="#project"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-700 rounded-lg font-medium hover:bg-stone-50 transition-colors border border-stone-200"
            >
              See What I&apos;ve Built
            </a>
          </motion.div>
        </div>
      </div>

      {/* Panel indicators */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-opacity duration-300 ${
          hasScrolledPastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToPanel(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activePanel === index
                ? 'bg-warm-500 w-6'
                : 'bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Go to panel ${index + 1}`}
          />
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
