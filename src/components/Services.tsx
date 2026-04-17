import { motion } from 'motion/react';
import { Home, Grid, PaintBucket, BedDouble, Hammer } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Interior Design",
      desc: "Complete home interiors tailored to your lifestyle."
    },
    {
      icon: <Grid className="w-6 h-6" />,
      title: "Modular Kitchen Design",
      desc: "Functional and elegant kitchen spaces."
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Living Room Interiors",
      desc: "Modern, welcoming, and premium layouts."
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Bedroom Interiors",
      desc: "Comfort-driven, cozy, and stylish designs."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Turnkey Interior Solutions",
      desc: "End-to-end service from design to execution."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-ink text-brand-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-sage mb-6 block">Expertise</span>
            <h2 className="text-[36px] md:text-[48px] font-serif font-normal leading-[1.1] max-w-xl">
              From concept to execution, we offer <span className="text-brand-gold">complete</span> interior solutions.
            </h2>
          </div>
          <p className="text-[16px] text-brand-ivory/70 max-w-sm leading-[1.6]">
            At The Zyon Interiors, you can enjoy a seamless transformation of your space without the hassle of managing contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="border border-white/10 p-8 rounded-[8px] hover:border-brand-sage/50 transition-colors"
            >
              <div className="text-brand-gold mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-[20px] mb-3">{service.title}</h3>
              <p className="text-brand-ivory/60 text-[14px] leading-[1.6]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
