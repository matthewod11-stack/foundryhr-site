'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { creativeProjects, creativeFooter } from '@/lib/data';
import ProjectCarousel from '@/components/ProjectCarousel';

export default function Creative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="creative" ref={ref} className="py-24 bg-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/50 rounded-full mb-6">
            <span className="text-sm text-stone-500">
              What I make when I&apos;m not building teams or shipping code
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ProjectCarousel projects={creativeProjects} />
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-stone-500 mt-8"
        >
          {creativeFooter}
        </motion.p>
      </div>
    </section>
  );
}
