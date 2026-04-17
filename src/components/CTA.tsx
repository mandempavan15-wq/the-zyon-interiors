export function CTA() {
  return (
    <section id="contact" className="py-32 bg-brand-ivory relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-sage/5 rounded-bl-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] text-center relative z-10">
        <h2 className="text-[40px] md:text-[56px] font-serif font-normal text-brand-ink mb-8 leading-[1.1]">
          Ready to elevate <br className="hidden md:block"/>
          <span className="text-brand-gold">your space?</span>
        </h2>
        
        <p className="text-[16px] text-brand-ink opacity-80 max-w-xl mx-auto mb-12 leading-[1.6]">
          Book a free consultation today. Let our experts understand your vision and show you how we can transform your house into a bespoke home.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" className="w-full sm:w-auto btn-secondary uppercase tracking-[1px] px-10">
            Book Free Consultation
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-brand-ink/20 text-brand-ink px-10 py-3 text-[13px] font-semibold tracking-[1px] uppercase hover:border-brand-ink transition-colors duration-300 rounded-sm">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
