'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { jobs, experiencePillars } from '@/lib/data';
import JobModal from '@/components/JobModal';
import type { Job } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section id="experience" ref={ref} className="py-24 bg-stone-50" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-sage-500 rounded-full" />
              <span className="text-sm font-medium text-sage-600 uppercase tracking-wide">
                Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Building HR functions in technical environments
            </h2>
            <p className="text-lg text-stone-600">
              I specialize in being the first HR hire at highly technical companies.
              I build the systems, earn the trust of engineers, and scale teams
              through ambiguity.
            </p>
          </motion.div>

          {/* Key differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-6 mb-16"
          >
            {experiencePillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200"
              >
                <div
                  className={`p-2 rounded-lg ${
                    index === 0
                      ? 'bg-warm-50'
                      : index === 1
                      ? 'bg-sage-50'
                      : 'bg-stone-100'
                  }`}
                >
                  <pillar.icon
                    className={`w-5 h-5 ${
                      index === 0
                        ? 'text-warm-600'
                        : index === 1
                        ? 'text-sage-600'
                        : 'text-stone-600'
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">{pillar.title}</h4>
                  <p className="text-sm text-stone-500">{pillar.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience timeline with visual connector */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-stone-200 hidden md:block" />

            <div className="space-y-3">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-5 w-4 h-4 bg-warm-500 rounded-full border-4 border-stone-50 hidden md:block z-10" />

                  {/* Card - clickable */}
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full text-left md:ml-12 group"
                  >
                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200 hover:border-warm-300 hover:shadow-lg hover:shadow-warm-100/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-warm-500 flex-shrink-0" />
                          <h3 className="text-base font-semibold text-stone-800 group-hover:text-warm-700 transition-colors">
                            {job.company}
                          </h3>
                          <span className="text-stone-400">·</span>
                          <span className="text-warm-600 font-medium text-sm">{job.role}</span>
                        </div>
                        <span className="text-xs text-stone-500 flex-shrink-0">{job.location}</span>
                      </div>
                      <p className="text-stone-600 text-sm">{job.shortDescription}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Job Modal */}
      <JobModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  );
}
