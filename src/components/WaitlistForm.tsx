"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [bias, setBias] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleGroupSubmit = (selectedGroup: string) => {
    setGroup(selectedGroup);
    setStep(3);
  };

  const handleBiasSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bias) setStep(4);
  };

  const groups = [
    "Stray Kids", "BTS", "SEVENTEEN", "NCT", "THE BOYZ",
    "BLACKPINK", "TWICE", "Red Velvet", "Other"
  ];

  return (
    <div className="w-full max-w-md mt-10">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleEmailSubmit}
            className="flex flex-col gap-4"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-pearl placeholder:text-moon-grey focus:outline-none focus:border-choeae-pink/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-pearl text-midnight-plum px-6 rounded-full font-sora font-semibold hover:scale-105 transition-transform"
              >
                Join CHOEAE
              </button>
            </div>
            <p className="text-xs text-moon-grey font-medium px-4">
              Early collectors get first access to drops, community rewards and launch giveaways.
            </p>
            <p className="text-[10px] text-moon-grey/50 px-4 mt-2 tracking-wide">
              CHOEAE 최애 — your favorite, your collection.
            </p>
          </motion.form>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-sora text-3xl font-semibold">You&apos;re in. <span className="text-choeae-pink">♡</span></h3>
            <div>
              <p className="text-moon-grey mb-4">Who&apos;s your choeae? Choose your favorite group:</p>
              <div className="flex flex-wrap gap-2">
                {groups.map((g) => (
                  <button
                    key={g}
                    onClick={() => handleGroupSubmit(g)}
                    className="px-4 py-2 rounded-full border border-white/10 text-sm hover:border-choeae-pink hover:text-choeae-pink transition-colors bg-white/5"
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleBiasSubmit}
            className="flex flex-col gap-6"
          >
            <h3 className="font-sora text-2xl font-semibold">Who is your bias in {group}?</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Name of your bias"
                value={bias}
                onChange={(e) => setBias(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-pearl placeholder:text-moon-grey focus:outline-none focus:border-choeae-pink/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-choeae-pink text-midnight-plum px-6 rounded-full font-sora font-semibold hover:scale-105 transition-transform"
              >
                Complete
              </button>
            </div>
          </motion.form>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 text-center items-center py-6"
          >
            <h3 className="font-sora text-3xl font-semibold">Welcome to CHOEAE <span className="text-holo-violet">✦</span></h3>
            <p className="text-moon-grey">Your profile is ready.</p>
            <button className="mt-4 px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
              Invite another collector
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
