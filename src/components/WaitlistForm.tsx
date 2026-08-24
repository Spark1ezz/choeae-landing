"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GOOGLE_SHEET_URL } from "@/lib/config";

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [bias, setBias] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToSheet = async (data: { email: string; group?: string; bias?: string }) => {
    if (!GOOGLE_SHEET_URL) return;
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString(),
          ...data,
        }),
      });
    } catch (err) {
      console.error("Failed to send data to Google Sheet:", err);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await sendToSheet({ email, group: "Pending...", bias: "Pending..." });
    setLoading(false);
    setStep(2);
  };

  const handleGroupSubmit = (selectedGroup: string) => {
    setGroup(selectedGroup);
    setStep(3);
  };

  const handleBiasSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bias) return;
    setLoading(true);
    await sendToSheet({ email, group, bias });
    setLoading(false);
    setStep(4);
  };

  const groups = [
    "Stray Kids", "BTS", "SEVENTEEN", "NCT", "THE BOYZ",
    "BLACKPINK", "TWICE", "Red Velvet", "Other"
  ];

  return (
    <div className="w-full max-w-md mt-3 md:mt-5">
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
                className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-pearl placeholder:text-moon-grey focus:outline-none focus:border-choeae-pink/50 transition-colors shadow-inner"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-pearl text-midnight-plum px-6 rounded-full font-sora font-semibold hover:scale-105 transition-transform disabled:opacity-50"
              >
                {loading ? "..." : "Join CHOEAE"}
              </button>
            </div>
            <p className="text-xs text-moon-grey font-medium px-4">
              Early collectors get first access to drops, community rewards and launch giveaways.
            </p>
            <p className="text-[10px] text-moon-grey/50 px-4 mt-1 tracking-wide">
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
            className="flex flex-col gap-5"
          >
            <h3 className="font-sora text-2xl md:text-3xl font-semibold">You&apos;re in. <span className="text-choeae-pink">♡</span></h3>
            <div>
              <p className="text-pearl/90 text-sm md:text-base mb-4 font-medium">Who&apos;s your choeae? Choose your favorite group:</p>
              <div className="flex flex-wrap gap-2.5">
                {groups.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleGroupSubmit(g)}
                    className="px-4 py-2.5 rounded-full border border-white/20 text-sm font-medium text-pearl bg-white/10 hover:bg-choeae-pink/20 hover:border-choeae-pink hover:text-white transition-all shadow-md active:scale-95"
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
                className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-pearl placeholder:text-moon-grey focus:outline-none focus:border-choeae-pink/50 transition-colors shadow-inner"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-choeae-pink text-midnight-plum px-6 rounded-full font-sora font-semibold hover:scale-105 transition-transform disabled:opacity-50"
              >
                {loading ? "..." : "Complete"}
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
            <button 
              type="button"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="mt-4 px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Invite another collector
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
