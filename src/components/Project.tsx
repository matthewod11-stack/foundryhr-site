'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Cpu, Play, Pause } from 'lucide-react';
import { projectStory } from '@/lib/data';

export default function Project() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const videoInView = useInView(videoRef, { margin: '-50px' });
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  // Pause video when out of viewport for performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (videoInView && isVideoPlaying) {
      video.play().catch(() => setVideoError(true));
    } else {
      video.pause();
    }
  }, [videoInView, isVideoPlaying]);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section
      id="project"
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Video Background Section */}
      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Video/Poster Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
            >
              <source src="/videos/hr-command-center.mp4" type="video/mp4" />
            </video>
          ) : (
            // Fallback gradient background when video fails
            <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800" />
          )}
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Cpu className="w-4 h-4 text-warm-400" />
              <span className="text-sm font-medium text-white/90">
                Featured Project
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              HR Command Center
            </h2>
            <p className="text-lg text-stone-300">
              I&apos;m not just someone who uses AI tools in HR.{' '}
              <span className="text-warm-400 font-medium">
                I&apos;m building what I think the next generation of HR tech should
                look like.
              </span>
            </p>
          </motion.div>

          {/* Floating Card with Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-stone-800 mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2" />
                  <span className="text-stone-600">
                    <strong className="text-stone-800">Chat-First Interface</strong> — Natural language commands for all HR workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2" />
                  <span className="text-stone-600">
                    <strong className="text-stone-800">25 Custom AI Skills</strong> — Performance reviews, comp analysis, PIPs, and more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2" />
                  <span className="text-stone-600">
                    <strong className="text-stone-800">Multi-Provider AI</strong> — Claude, OpenAI, and Gemini with automatic failover
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2" />
                  <span className="text-stone-600">
                    <strong className="text-stone-800">Production Infrastructure</strong> — Auth, RBAC, rate limiting, testing
                  </span>
                </li>
              </ul>
              <div className="flex justify-center">
                <a
                  href="https://hrcommandcenter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors text-sm"
                >
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Video control */}
          {!videoError && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              onClick={toggleVideo}
              className="absolute bottom-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
            >
              {isVideoPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </motion.button>
          )}
        </div>
      </div>

    </section>
  );
}
