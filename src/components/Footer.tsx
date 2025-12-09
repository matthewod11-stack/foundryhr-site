'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Calendar } from 'lucide-react';
import { contactInfo } from '@/lib/data';

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: contactInfo.calendly,
    label: 'Book a Call',
    icon: Calendar,
  },
  {
    href: contactInfo.linkedin,
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: contactInfo.github,
    label: 'GitHub',
    icon: Github,
  },
  {
    href: contactInfo.twitter,
    label: 'X (Twitter)',
    icon: XIcon,
  },
  {
    href: `mailto:${contactInfo.email}`,
    label: 'Email',
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-warm-400 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-stone-500">
            © {currentYear} Matt O&apos;Donnell
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
