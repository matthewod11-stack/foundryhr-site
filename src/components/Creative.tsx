'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Music, Film } from 'lucide-react';
import { creativeProjects } from '@/lib/data';
import type { CreativeProject } from '@/lib/data';

function CreativeTile({ project, index }: { project: CreativeProject; index: number }) {
  const hasImage = project.coverImage;

  return (
    <motion.a
      href={project.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
      aria-label={`${project.title} - ${project.description}`}
    >
      {/* Background - Image or Gradient */}
      {hasImage ? (
        <Image
          src={project.coverImage!}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      ) : (
        <div
          className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
            project.type === 'music'
              ? 'bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600'
              : 'bg-gradient-to-br from-warm-400 via-warm-500 to-warm-600'
          }`}
        />
      )}

      {/* Overlay - darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Type badge */}
      <div
        className={`absolute top-2 left-2 sm:top-3 sm:left-3 p-1.5 sm:p-2 rounded-md sm:rounded-lg backdrop-blur-sm ${
          project.type === 'music'
            ? 'bg-sage-500/80 text-white'
            : 'bg-warm-500/80 text-white'
        }`}
      >
        {project.type === 'music' ? (
          <Music className="w-3 h-3 sm:w-4 sm:h-4" />
        ) : (
          <Film className="w-3 h-3 sm:w-4 sm:h-4" />
        )}
      </div>

      {/* Title and description - slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">{project.title}</h3>
        <p className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function Creative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="creative" ref={ref} className="py-24 bg-stone-100">
      <div className="max-w-5xl mx-auto px-6">
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

        {/* 4-column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {creativeProjects.map((project, index) => (
            <CreativeTile key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
