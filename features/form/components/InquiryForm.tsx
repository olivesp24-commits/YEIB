"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function InquiryForm() {
  return (
    <section className="bg-[var(--color-mint-cream)] text-[var(--color-evergreen)] min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="font-[var(--font-asul)] text-4xl md:text-5xl font-bold mb-6">
              General Inquiry
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-evergreen)]/80">
              Have a question about YEIB Investment Fund? Send us a message and our team will get back to you.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--color-evergreen)]/10">
            <form className="flex flex-col gap-6" onSubmit={(e) => {
              e.preventDefault();
              alert("Your inquiry has been successfully submitted! We will be in touch shortly.");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-semibold text-sm">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-semibold text-sm">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-sm">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="inquiryType" className="font-semibold text-sm">Inquiry Type</label>
                <select 
                  id="inquiryType" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50"
                >
                  <option value="">Select an option</option>
                  <option value="media">Media & Press</option>
                  <option value="general">General Question</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold text-sm">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 bg-[var(--color-evergreen)] hover:bg-[var(--color-evergreen)]/90 text-white">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
