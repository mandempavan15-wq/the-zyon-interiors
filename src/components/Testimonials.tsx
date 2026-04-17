import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-beige/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="h-[500px] w-full max-w-md mx-auto rounded-[12px] overflow-hidden bg-[#e0e0d0]">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" 
                alt="Luxurious dining area" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-ink/60 mb-6 block">Client Stories</span>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] md:text-[36px] font-serif font-normal text-brand-ink leading-[1.4] mb-8">
                "The Zyon Interiors completely transformed our newly built house. They understood our need for elegant minimalism and delivered a home that feels both luxurious and incredibly welcoming. The entire process was seamless."
              </h2>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" 
                    alt="Sarah Mitchell" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-serif text-brand-ink text-lg font-normal mb-1">Sarah & James Mitchell</p>
                  <p className="text-[10px] uppercase font-bold tracking-[1px] text-brand-ink/60">Premium Villa Owners</p>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-16 flex items-center space-x-12 border-t border-brand-ink/5 pt-8">
              <div>
                <p className="text-[32px] font-serif text-brand-gold mb-1">50+</p>
                <p className="text-[11px] font-bold uppercase tracking-[1px] text-brand-ink/60">Homes Delivered</p>
              </div>
              <div>
                <p className="text-[32px] font-serif text-brand-gold mb-1">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-[1px] text-brand-ink/60">Client Satisfaction</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
