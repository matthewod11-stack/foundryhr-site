'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'matthew.od11@gmail.com',
    href: 'mailto:matthew.od11@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mattod88',
    href: 'https://linkedin.com/in/mattod88',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/HRSkills',
    href: 'https://github.com/HRSkills',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '631-805-6376',
    href: 'tel:+16318056376',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-warm-500 rounded-full" />
              <span className="text-sm font-medium text-warm-600 uppercase tracking-wide">
                Let&apos;s Talk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Ready to modernize your people operations?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether you&apos;re a founder figuring out your first HR hire, a startup
              scaling fast and feeling the pain, or just curious about AI-powered
              HR—I&apos;d love to chat.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-stone-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>

            {/* Primary CTA */}
            <a
              href="mailto:matthew.od11@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-warm-600 text-white rounded-xl font-medium hover:bg-warm-700 transition-colors shadow-lg shadow-warm-600/20 group"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-5 bg-white rounded-xl border border-stone-200 hover:border-warm-300 hover:shadow-lg hover:shadow-warm-100/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-stone-100 rounded-lg group-hover:bg-warm-50 transition-colors">
                    <contact.icon className="w-5 h-5 text-stone-600 group-hover:text-warm-600 transition-colors" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-warm-500 transition-colors" />
                </div>
                <div className="text-sm text-stone-500 mb-1">{contact.label}</div>
                <div className="font-medium text-stone-800 group-hover:text-warm-600 transition-colors break-all">
                  {contact.value}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
