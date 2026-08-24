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

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      const cleanUrl = window.location.origin;
      navigator.clipboard.writeText(cleanUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const groups = [
    "Stray Kids", "BTS", "SEVENTEEN", "NCT", "THE BOYZ",
    "BLACKPINK", "TWICE", "Red Velvet", "Other"
  ];

  return (
    <div className="w-full max-w-md mt-6 md:mt-8">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleEmailSubmit}
            className="flex flex-col gap-3"
          >
            {/* Luxury Glass Capsule Input */}
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-white/20 via-choeae-pink/30 to-holo-violet/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 focus-within:shadow-[0_0_30px_rgba(255,143,184,0.35)] focus-within:from-choeae-pink/50 focus-within:to-holo-violet/50">
              <div className="flex items-center bg-[#130f1e]/95 backdrop-blur-xl rounded-full pl-5 pr-1.5 py-1.5 border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-pearl placeholder:text-moon-grey/60 text-sm md:text-base focus:outline-none pr-3"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-pearl via-[#FFF0F5] to-pearl text-midnight-plum px-6 py-3 rounded-full font-sora font-bold text-sm hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,249,247,0.3)] hover:shadow-[0_0_30px_rgba(255,143,184,0.5)] transition-all duration-300 whitespace-nowrap disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "..." : "Join CHOEAE ✦"}
                </button>
              </div>
            </div>

            {/* Early access notice with micro-badge */}
            <div className="flex items-center gap-2 px-3 pt-1 text-xs text-moon-grey/90 font-medium">
              <span className="text-choeae-pink text-sm">♡</span>
              <span>Early collectors get first access to drops & launch rewards.</span>
            </div>
          </motion.form>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="font-sora text-2xl font-bold text-pearl">You&apos;re in. <span className="text-choeae-pink">♡</span></h3>
            <div>
              <p className="text-pearl/90 text-sm mb-4 font-medium">Who&apos;s your choeae? Choose your favorite group:</p>
              <div className="flex flex-wrap gap-2.5">
                {groups.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleGroupSubmit(g)}
                    className="px-4 py-2.5 rounded-full border border-white/15 text-sm font-medium text-pearl bg-white/[0.06] hover:bg-choeae-pink/20 hover:border-choeae-pink hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
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
            className="flex flex-col gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="font-sora text-2xl font-bold text-pearl">Who is your bias in <span className="text-holo-violet">{group}</span>?</h3>
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-white/20 via-choeae-pink/30 to-holo-violet/30">
              <div className="flex items-center bg-[#130f1e]/95 backdrop-blur-xl rounded-full pl-5 pr-1.5 py-1.5 border border-white/10">
                <input
                  type="text"
                  placeholder="Name of your bias"
                  value={bias}
                  onChange={(e) => setBias(e.target.value)}
                  required
                  className="w-full bg-transparent text-pearl placeholder:text-moon-grey/60 text-sm md:text-base focus:outline-none pr-3"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-choeae-pink text-midnight-plum px-6 py-3 rounded-full font-sora font-bold text-sm hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,143,184,0.4)] transition-all whitespace-nowrap disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "..." : "Complete ✦"}
                </button>
              </div>
            </div>
          </motion.form>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 text-center items-center py-6 px-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="font-sora text-3xl font-bold text-pearl">Welcome to CHOEAE <span className="text-holo-violet">✦</span></h3>
            <p className="text-moon-grey text-sm">Your collector profile is registered.</p>
            <button 
              type="button"
              onClick={handleCopy}
              className={`mt-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                copied 
                  ? "border-choeae-pink text-choeae-pink bg-choeae-pink/10 shadow-[0_0_20px_rgba(255,143,184,0.3)]" 
                  : "border-white/20 text-pearl hover:bg-white/10 hover:border-white/40"
              }`}
            >
              {copied ? "Link copied! ✦" : "Invite another collector"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
