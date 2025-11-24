'use client';

import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import type { Job } from '@/lib/data';

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  if (!job) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="p-4 bg-stone-100 rounded-xl">
            <Building2 className="w-8 h-8 text-stone-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-stone-800">{job.company}</h2>
              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
                  aria-label={`Visit ${job.company} website`}
                >
                  <ExternalLink className="w-4 h-4 text-stone-500" />
                </a>
              )}
            </div>
            <div className="text-warm-600 font-medium text-lg">{job.role}</div>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {job.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-warm-50 text-warm-700 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* The Story */}
        <div className="prose prose-stone max-w-none">
          {job.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-stone-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="bg-stone-50 -mx-8 px-8 py-6 border-t border-b border-stone-100">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">
            Key Highlights
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {job.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-warm-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-stone-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo placeholder */}
        <div className="bg-stone-100 rounded-xl p-8 text-center">
          <p className="text-stone-400 text-sm">
            Team photos and project screenshots coming soon
          </p>
        </div>
      </div>
    </Modal>
  );
}
