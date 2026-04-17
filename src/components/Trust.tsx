import { motion } from 'motion/react';

export function Trust() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "End-to-End Service" },
  ];

  return (
    <section className="bg-brand-beige border-y border-black/5 py-12 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-center text-center ${idx === 0 ? '' : 'pl-4 md:pl-0'}`}
            >
              <span className="font-serif text-[32px] md:text-[40px] text-brand-gold mb-2 leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[1px] text-brand-ink/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
