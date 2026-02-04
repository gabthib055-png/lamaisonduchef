"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ToastMessage } from "./ToastProvider";

const variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const ToastViewport = ({ toasts }: { toasts: ToastMessage[] }) => {
  return (
    <div className="fixed right-5 top-6 z-[60] flex w-80 flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.22 }}
            className="surface-glass rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-sm font-semibold text-ink-900">{toast.title}</p>
            {toast.description ? (
              <p className="text-xs text-ink-700">{toast.description}</p>
            ) : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
