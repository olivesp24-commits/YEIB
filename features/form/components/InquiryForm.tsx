"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageSquareText } from "lucide-react";

export function InquiryForm() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="bg-[var(--color-mint-cream)] text-[var(--color-evergreen)] min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-[var(--color-tiger-orange)]/5 rounded-bl-full -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
              className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-[var(--color-evergreen)]/10 flex items-center justify-center mx-auto mb-6 text-[var(--color-tiger-orange)]"
            >
              <MessageSquareText size={28} />
            </motion.div>
            <h1 className="font-[var(--font-asul)] text-4xl md:text-5xl font-bold mb-6">
              General Inquiry
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-evergreen)]/80 max-w-2xl mx-auto">
              Have a question about YEIB Investment Fund? Send us a message and our dedicated team will get back to you promptly.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-[var(--color-evergreen)]/5">
            <motion.form 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8" 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Your inquiry has been successfully submitted! We will be in touch shortly.");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="flex flex-col gap-2 group">
                  <label htmlFor="firstName" className="font-semibold text-sm group-focus-within:text-[var(--color-tiger-orange)] transition-colors">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-2 focus:ring-[var(--color-tiger-orange)]/20 bg-gray-50 text-base transition-all"
                    placeholder="Enter your first name"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col gap-2 group">
                  <label htmlFor="lastName" className="font-semibold text-sm group-focus-within:text-[var(--color-tiger-orange)] transition-colors">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-2 focus:ring-[var(--color-tiger-orange)]/20 bg-gray-50 text-base transition-all"
                    placeholder="Enter your last name"
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 group">
                <label htmlFor="email" className="font-semibold text-sm group-focus-within:text-[var(--color-tiger-orange)] transition-colors">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-2 focus:ring-[var(--color-tiger-orange)]/20 bg-gray-50 text-base transition-all"
                  placeholder="name@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 group">
                <label htmlFor="inquiryType" className="font-semibold text-sm group-focus-within:text-[var(--color-tiger-orange)] transition-colors">Inquiry Type</label>
                <select 
                  id="inquiryType" 
                  className="px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-2 focus:ring-[var(--color-tiger-orange)]/20 bg-gray-50 text-base transition-all cursor-pointer"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="media">Media & Press</option>
                  <option value="general">General Question</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 group">
                <label htmlFor="message" className="font-semibold text-sm group-focus-within:text-[var(--color-tiger-orange)] transition-colors">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-2 focus:ring-[var(--color-tiger-orange)]/20 bg-gray-50 resize-none text-base transition-all"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button type="submit" size="lg" className="w-full mt-2 bg-[var(--color-evergreen)] hover:bg-[var(--color-evergreen)]/90 text-white rounded-xl py-6 flex items-center justify-center gap-2 group text-base overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  Submit Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
