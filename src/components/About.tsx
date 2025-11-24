'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';
import { aboutContent } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/matt.jpeg"
                  alt="Matt O'Donnell"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-warm-200/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-warm-500 rounded-full" />
              <span className="text-sm font-medium text-warm-600 uppercase tracking-wide">
                About Matt
              </span>
            </div>

            <div className="space-y-6 mb-8">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-lg text-stone-600 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl"
            >
              <div className="p-2 bg-white rounded-lg">
                <Award className="w-5 h-5 text-warm-600" />
              </div>
              <span className="text-stone-600">{aboutContent.credentials}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
