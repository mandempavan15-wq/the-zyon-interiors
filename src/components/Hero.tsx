import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Video / Image wrapper */}
      <div className="absolute inset-0 z-0 bg-brand-ink">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Minimal beige living room" 
          className="w-full h-full object-cover opacity-60" /* Simulating rgba(0,0,0,0.35) overlay basically */
        />
        {/* You can replace the img with a video tag here when the user uploads their video */}
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px] w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-[#D84315] font-bold text-[11px] uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D84315]"></span>
            Limited slots available this month
          </div>
          
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-serif text-white leading-[1.1] text-balance">
            We design homes that feel like <span className="text-brand-gold">you belong</span>
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-white opacity-90 max-w-2xl leading-[1.6] font-light">
            Bespoke interiors crafted for modern living and timeless comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <a href="#contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4">
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a href="tel:+917288999123" className="glass-card text-white hover:bg-white/10 border-white/20 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-[13px] uppercase tracking-[1px]">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            
            <a href="https://wa.me/917288999123" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-[13px] uppercase tracking-[1px]">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
