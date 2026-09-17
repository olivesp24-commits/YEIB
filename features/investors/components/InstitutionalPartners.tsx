"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InstitutionalPartners() {
  const partners = [
    { name: "NSIA", role: "Co-Owner", logo: "/partner-logo/nsia-logo.png" },
    { name: "DBN", role: "Co-Owner", logo: "/partner-logo/dbn-logo.png" },
    { name: "CBN", role: "Strategic Partner", logo: "/partner-logo/cbn-logo.png" },
    { name: "AfDB", role: "Strategic Partner", logo: "/partner-logo/afdb-logo.png" },
    { name: "Ministry of Finance", role: "Strategic Partner", logo: "/partner-logo/coat-of-arm-logo.png" },
    { name: "UN Women", role: "Strategic Partner", logo: "/partner-logo/un-women-logo.png" }
  ];

  return (
    <section className="bg-white border-y border-[var(--color-evergreen)]/20 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)] uppercase tracking-tight">
              Backed By
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--color-evergreen)]/60 max-w-md font-medium"
          >
            A multi-country financial initiative anchored by Africa's leading sovereign and development institutions.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-evergreen)]/10"
        >
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group bg-white p-8 md:p-12 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:min-h-[250px] hover:bg-[var(--color-mint-cream)] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="text-[var(--color-tiger-orange)] text-xs font-bold uppercase tracking-widest mb-4 z-10 transition-opacity duration-300">
                {partner.role}
              </div>
              
              {/* Text Name (Visible by default, hidden on hover) */}
              <div className="font-[var(--font-asul)] text-2xl md:text-4xl font-bold text-[var(--color-evergreen)] tracking-tighter uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
                {partner.name}
              </div>

              {/* Logo (Hidden by default, visible on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none p-12">
                <div className="relative w-full h-full max-h-[80px]">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
