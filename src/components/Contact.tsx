'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Calendar } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:matthew@foundryhr.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mattod88',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/matthewod11-stack',
  },
  {
    icon: Calendar,
    label: 'Book with Calendly',
    href: '#', // User will add Calendly link later
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 bg-stone-50" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-warm-500 rounded-full" />
            <span className="text-sm font-medium text-warm-600 uppercase tracking-wide">
              Let&apos;s Talk
            </span>
            <div className="w-12 h-1 bg-warm-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            Ready to modernize your people operations?
          </h2>
        </motion.div>

        {/* Contact icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') || contact.href === '#' ? '_blank' : undefined}
              rel={contact.href.startsWith('http') || contact.href === '#' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted && isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group p-6 bg-white rounded-2xl border border-stone-200 hover:border-warm-300 hover:shadow-lg hover:shadow-warm-100/50 transition-all duration-300"
              aria-label={contact.label}
            >
              <div className="p-4 bg-stone-100 rounded-xl group-hover:bg-warm-50 transition-colors">
                <contact.icon className="w-8 h-8 text-stone-600 group-hover:text-warm-600 transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
