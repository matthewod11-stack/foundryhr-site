'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Music, Film, ExternalLink } from 'lucide-react';
import { creativeProjects } from '@/lib/data';
import type { CreativeProject } from '@/lib/data';

interface ProjectCarouselProps {
  projects: CreativeProject[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [goToNext, goToPrev]);

  const currentProject = projects[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative"
      tabIndex={0}
      role="region"
      aria-label="Creative projects carousel"
    >
      {/* Main carousel content */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-stone-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {/* Media embed */}
            <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-stone-100">
              {currentProject.type === 'music' ? (
                <iframe
                  src={`${currentProject.embedUrl}?utm_source=generator&theme=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify player for ${currentProject.title}`}
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={`${currentProject.embedUrl}?rel=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={`YouTube video: ${currentProject.title}`}
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Project info */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${
                    currentProject.type === 'music' ? 'bg-sage-50' : 'bg-warm-50'
                  }`}
                >
                  {currentProject.type === 'music' ? (
                    <Music
                      className={`w-6 h-6 ${
                        currentProject.type === 'music'
                          ? 'text-sage-600'
                          : 'text-warm-600'
                      }`}
                    />
                  ) : (
                    <Film className="w-6 h-6 text-warm-600" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800">
                    {currentProject.title}
                  </h4>
                  <p className="text-stone-500">{currentProject.description}</p>
                </div>
              </div>

              <a
                href={currentProject.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors group"
                aria-label={`Open ${currentProject.title} in new tab`}
              >
                <ExternalLink className="w-5 h-5 text-stone-500 group-hover:text-stone-700 transition-colors" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5 text-stone-600" />
        </button>

        {/* Pagination dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 h-2 bg-warm-500 rounded-full'
                  : 'w-2 h-2 bg-stone-300 hover:bg-stone-400 rounded-full'
              }`}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5 text-stone-600" />
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-stone-400 mt-4">
        Use arrow keys to navigate
      </p>
    </div>
  );
}
