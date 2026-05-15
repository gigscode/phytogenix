'use client';

import { motion } from 'framer-motion';
import { 
  Dna, 
  FlaskConical, 
  LineChart, 
  ClipboardCheck 
} from 'lucide-react';

const steps = [
  {
    title: "Sourcing & Identification",
    description: "Ethically sourcing rare botanicals and using AI to identify active molecular compounds.",
    icon: Dna,
    color: "bg-emerald-500"
  },
  {
    title: "Laboratory Analysis",
    description: "High-precision chromatography and molecular testing to ensure purity and potency.",
    icon: FlaskConical,
    color: "bg-blue-500"
  },
  {
    title: "Predictive Modeling",
    description: "Simulating biological interactions using proprietary AI algorithms before clinical trials.",
    icon: LineChart,
    color: "bg-purple-500"
  },
  {
    title: "Clinical Validation",
    description: "Multi-phase human trials with real-time participant monitoring and data synthesis.",
    icon: ClipboardCheck,
    color: "bg-yellow-500"
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4"
          >
            The Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Our Research Lifecycle
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="bg-white border border-border p-8 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 ${step.color} rounded-none flex items-center justify-center mb-6 text-white shadow-lg shadow-current/20 group-hover:rotate-12 transition-transform`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-muted/20 group-hover:text-emerald-500/10 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
