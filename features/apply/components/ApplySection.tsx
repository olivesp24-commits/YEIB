"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ApplySection() {
  const processSteps = [
    {
      step: "01",
      title: "Check Eligibility",
      description: "Ensure your business meets the core criteria for YEIB funding, focusing on youth and women-led enterprises."
    },
    {
      step: "02",
      title: "Submit Intake Form",
      description: "Provide basic information about your business, sector, and capital requirements through the form below."
    },
    {
      step: "03",
      title: "Initial Evaluation",
      description: "Our team reviews your submission to determine the best funding mechanism (Direct, Intermediary, or Guarantee)."
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Shortlisted candidates will be contacted for a comprehensive review of their financial and operational history."
    }
  ];

  const eligibilityCriteria = [
    "Under age 35 (or management team ≥50% under 35)",
    "Registered business operating in Nigeria",
    "Clear revenue generation model",
    "Priority given to Agriculture, Trade, Creative, and ICT sectors"
  ];

  return (
    <section className="bg-[var(--color-mint-cream)] text-[var(--color-evergreen)] min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-tiger-orange)] text-[var(--color-tiger-orange)] text-xs font-bold tracking-widest uppercase mb-6">
              For Entrepreneurs
            </div>
            <h1 className="font-[var(--font-asul)] text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Apply for Funding.
            </h1>
            <p className="text-xl text-[var(--color-evergreen)]/80 font-medium leading-relaxed">
              We are looking for ambitious youth- and women-led MSMEs ready to scale. Review our process and submit your intake form below.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Process & Eligibility */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <FadeIn direction="up" delay={0.2}>
              <div>
                <h2 className="font-[var(--font-asul)] text-3xl font-bold mb-6">The Process</h2>
                <div className="flex flex-col gap-6">
                  {processSteps.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-[var(--color-tiger-orange)] font-[var(--font-asul)] font-bold text-2xl mt-1 opacity-80">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-[var(--color-evergreen)]/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-[var(--color-evergreen)] text-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-[var(--font-asul)] text-2xl font-bold mb-6">Basic Eligibility</h2>
                <ul className="flex flex-col gap-4">
                  {eligibilityCriteria.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[var(--color-tiger-orange)] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-white/90 text-sm font-medium leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-evergreen)]/10 shadow-sm">
                <h2 className="font-[var(--font-asul)] text-3xl font-bold mb-2">Intake Form</h2>
                <p className="text-[var(--color-evergreen)]/70 mb-8 font-medium text-sm">
                  Please fill out all required fields accurately. This helps us route your application to the correct funding track.
                </p>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Founder Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="applicantName" className="font-bold text-sm">Full Name</label>
                      <input 
                        type="text" 
                        id="applicantName" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="applicantAge" className="font-bold text-sm">Age</label>
                      <input 
                        type="number" 
                        id="applicantAge" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                        placeholder="e.g. 28"
                      />
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="businessName" className="font-bold text-sm">Business Name</label>
                      <input 
                        type="text" 
                        id="businessName" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                        placeholder="Registered business name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="businessSector" className="font-bold text-sm">Primary Sector</label>
                      <select 
                        id="businessSector" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                      >
                        <option value="">Select a sector</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="trade">Trade</option>
                        <option value="creative">Creative</option>
                        <option value="ict">ICT</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-bold text-sm">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                        placeholder="name@business.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-bold text-sm">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="fundingAmount" className="font-bold text-sm">Funding Amount Requested (NGN)</label>
                    <select 
                      id="fundingAmount" 
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 text-sm"
                    >
                      <option value="">Select range</option>
                      <option value="tier1">Under ₦5,000,000</option>
                      <option value="tier2">₦5,000,000 - ₦20,000,000</option>
                      <option value="tier3">₦20,000,000 - ₦50,000,000</option>
                      <option value="tier4">Above ₦50,000,000</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="pitch" className="font-bold text-sm">Brief Business Description</label>
                    <textarea 
                      id="pitch" 
                      rows={4}
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--color-tiger-orange)] focus:ring-1 focus:ring-[var(--color-tiger-orange)] bg-gray-50 resize-none text-sm"
                      placeholder="What does your business do, and what will the funding be used for?"
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-4 bg-[var(--color-tiger-orange)] hover:bg-[var(--color-tiger-orange)]/90 text-white flex items-center justify-center gap-2 group">
                    Submit Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
