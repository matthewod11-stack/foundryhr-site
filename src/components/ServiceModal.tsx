'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import type { Service } from '@/lib/data';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: ServiceModalProps) {
  if (!service) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="p-4 bg-warm-50 rounded-xl">
            <service.icon className="w-8 h-8 text-warm-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              {service.title}
            </h2>
            <p className="text-stone-600">{service.shortDescription}</p>
          </div>
        </div>

        {/* The Challenge */}
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-3 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-warm-400" />
            The Challenge
          </h3>
          <p className="text-stone-600 leading-relaxed pl-10">
            {service.challenge}
          </p>
        </div>

        {/* My Approach */}
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-3 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-sage-400" />
            My Approach
          </h3>
          <ul className="space-y-3 pl-10">
            {service.approach.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-stone-600">
                <span className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The Result */}
        <div className="bg-stone-50 -mx-8 px-8 py-6 border-t border-b border-stone-100">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">
            The Result
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.results.map((result, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                <span className="text-stone-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-stone-500 text-sm">
            Ready to modernize your people ops?
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-600 text-white rounded-lg font-medium hover:bg-warm-700 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Modal>
  );
}
