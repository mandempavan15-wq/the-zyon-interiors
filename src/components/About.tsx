import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-ivory relative border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-sage mb-6 block">Our Philosophy</span>
            <h2 className="text-[36px] md:text-[48px] font-serif font-normal text-brand-ink leading-[1.1] mb-8">
              We believe your home should reflect <br className="hidden md:block"/>
              <span className="text-brand-gold">your personality</span> and lifestyle.
            </h2>
            <p className="text-[16px] text-brand-ink/80 leading-[1.8] max-w-lg mb-8">
              At The Zyon Interiors, we create spaces that combine elegance, comfort, and functionality—making every corner feel uniquely yours. Our team of expert designers curates bespoke environments that not only look stunning but feel deeply personal.
            </p>
            <a href="#contact" className="inline-block border-b border-brand-ink pb-1 font-bold text-[13px] uppercase tracking-[1px] text-brand-ink hover:text-brand-sage hover:border-brand-sage transition-colors">
              Speak with a designer
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 rounded-[12px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1200" 
                alt="Detail of a minimalist luxury home interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
