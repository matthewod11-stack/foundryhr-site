'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <div className="text-lg font-semibold text-stone-200 mb-1">
              Matt O&apos;Donnell
            </div>
            <div className="text-sm">
              AI-First HR Leader · Building Technology
            </div>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://linkedin.com/in/mattod88"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HRSkills"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://foundryhr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-400 transition-colors"
            >
              FoundryHR
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-center sm:text-right"
          >
            <div>© {currentYear} Matt O&apos;Donnell</div>
            <div className="text-stone-500">San Francisco, CA</div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-stone-800 text-center text-sm text-stone-500"
        >
          Built with Next.js, TypeScript, and Tailwind CSS
        </motion.div>
      </div>
    </footer>
  );
}
