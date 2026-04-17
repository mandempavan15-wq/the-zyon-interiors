import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Understand your needs, space, and budget."
    },
    {
      num: "02",
      title: "Design & 3D Visualization",
      desc: "Preview your home before execution."
    },
    {
      num: "03",
      title: "Execution & Delivery",
      desc: "On-time, high-quality completion."
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-ink text-brand-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="mb-20 text-center">
          <span className="text-[11px] tracking-[1px] uppercase text-brand-sage mb-4 block font-bold">The Journey</span>
          <h2 className="text-[36px] md:text-[48px] font-serif leading-[1.1] font-normal">
            A seamless <span className="text-brand-gold">process</span> from <br/>concept to reality.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Massive subtle number behind */}
              <div className="absolute -top-12 -left-4 text-8xl font-serif font-black text-brand-ivory/5 select-none z-0">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-[13px] font-sans tracking-[1px] font-bold text-brand-sage mr-4">{step.num}.</span>
                  <div className="h-px bg-brand-ivory/20 flex-grow"></div>
                </div>
                <h3 className="text-xl font-serif text-brand-ivory mb-4">{step.title}</h3>
                <p className="text-brand-ivory/60 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
