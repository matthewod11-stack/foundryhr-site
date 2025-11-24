'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { services, consultingBenefits } from '@/lib/data';
import ServiceModal from '@/components/ServiceModal';
import type { Service } from '@/lib/data';

export default function Consulting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section
        id="consulting"
        ref={ref}
        className="py-24 bg-stone-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-warm-50 to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/foundry-logo.png"
                  alt="FoundryHR"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-warm-600 tracking-wide">
                FoundryHR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              From scrappy to scalable
            </h2>
            <p className="text-lg text-stone-600">
              Early-stage startups don&apos;t need traditional HR. They need someone who
              understands engineering culture, speaks the language of founders, and
              knows how to build systems that grow with you.
            </p>
          </motion.div>

          {/* Services grid - now clickable */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group p-6 bg-white rounded-xl border border-stone-200 hover:border-warm-300 hover:shadow-lg hover:shadow-warm-100/50 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warm-50 rounded-lg group-hover:bg-warm-100 transition-colors">
                    <service.icon className="w-6 h-6 text-warm-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-stone-800 mb-2 group-hover:text-warm-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-3">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-warm-600 group-hover:text-warm-700 transition-colors">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Benefits and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Benefits list */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-stone-800 mb-6">
                What you get:
              </h3>
              <ul className="space-y-4">
                {consultingBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                    <span className="text-stone-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex-1 max-w-md w-full"
            >
              <div className="p-8 bg-gradient-to-br from-warm-600 to-warm-700 rounded-2xl text-white shadow-xl shadow-warm-600/30">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to modernize your people ops?
                </h3>
                <p className="text-warm-100 mb-6">
                  Let&apos;s talk about where you are, where you&apos;re going, and how
                  to build the systems to get you there.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-warm-700 rounded-lg font-medium hover:bg-warm-50 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
