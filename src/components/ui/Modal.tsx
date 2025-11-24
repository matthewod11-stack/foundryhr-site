'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { modalBackdrop, modalContent } from '@/lib/animations';
import { useBodyScrollLock, useEscapeKey } from '@/lib/animations';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'md' | 'lg' | 'xl' | 'full';
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'lg',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Lock body scroll when modal is open
  useBodyScrollLock(isOpen);

  // Close on ESC key
  useEscapeKey(onClose, isOpen);

  // Store the previously focused element and restore on close
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus the modal after a short delay to let animation start
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  // Focus trap - keep focus within modal
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }, []);

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[90vw] max-h-[90vh]',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          <motion.div
            ref={modalRef}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            className={`
              relative w-full ${sizeClasses[size]}
              bg-white rounded-2xl shadow-2xl
              overflow-hidden outline-none
              max-h-[90vh] overflow-y-auto
            `}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-stone-500 group-hover:text-stone-700 transition-colors" />
            </button>

            {/* Title (if provided) */}
            {title && (
              <div className="px-8 pt-8 pb-4">
                <h2
                  id="modal-title"
                  className="text-2xl font-bold text-stone-800 pr-12"
                >
                  {title}
                </h2>
              </div>
            )}

            {/* Content */}
            <div className={title ? 'px-8 pb-8' : 'p-8'}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
