import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, Clock } from 'lucide-react';

export function Objections() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Expertise",
      description: "End-to-end management ensuring your vision is executed flawlessly. Zero hidden costs."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Bespoke Aesthetics",
      description: "We design specifically for your lifestyle, delivering a true balance of elegance and function."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Premium Execution",
      description: "High-quality materials and masterful craftsmanship across every square foot."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Transparent timelines and strict adherence to schedules so you can move in sooner."
    }
  ];

  return (
    <section className="py-24 bg-brand-ivory relative z-10 border-t border-brand-ink/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-[36px] md:text-[48px] font-serif text-brand-ink max-w-xl leading-[1.1] font-normal">
            Design that <span className="text-brand-gold">honors</span> your investment.
          </h2>
          <p className="text-[16px] text-brand-ink opacity-80 max-w-sm leading-[1.6]">
            We understand the stakes of a premium interior project. We exist to remove the friction and deliver absolute excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col border-l border-brand-ink/10 pl-6"
            >
              <div className="text-brand-sage mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-brand-ink mb-3">{feature.title}</h3>
              <p className="text-brand-light-ink text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
