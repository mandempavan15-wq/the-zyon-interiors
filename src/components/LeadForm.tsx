import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mgorkwzq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // WhatsApp Flow Redirect
        const waMessage = encodeURIComponent(`Hi, I just submitted a consultation request.\n\nName: ${formData.name}\nProject: ${formData.projectType}\nLocation: ${formData.location}`);
        window.open(`https://wa.me/917288999123?text=${waMessage}`, '_blank');
        
        // Reset form
        setFormData({ name: '', phone: '', location: '', projectType: '', message: '' });
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-ivory relative border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-[#D84315] font-bold text-[11px] uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D84315] animate-pulse"></span>
              Limited slots available this month
            </div>
            
            <h2 className="text-[36px] md:text-[48px] font-serif font-normal text-brand-ink leading-[1.1] mb-6">
              Ready to transform your home with <br className="hidden md:block"/>
              <span className="text-brand-gold">The Zyon Interiors?</span>
            </h2>
            
            <p className="text-[16px] text-brand-ink opacity-80 leading-[1.6] max-w-md mb-12">
              Book a free consultation today. Share your details, and our expert design team will contact you to discuss your project and vision.
            </p>
            
            <div className="space-y-6 border-l-2 border-brand-gold pl-6">
              <div>
                <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-ink/50 block mb-1">Call Us Immediately</span>
                <a href="tel:+917288999123" className="text-[18px] font-serif font-normal text-brand-ink hover:text-brand-gold transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +91 72889 99123
                </a>
              </div>
              <div>
                 <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-ink/50 block mb-1">Chat With Us</span>
                 <a href="https://wa.me/917288999123" target="_blank" rel="noreferrer" className="text-[18px] font-serif font-normal text-brand-ink hover:text-[#25D366] transition-colors flex items-center gap-2">
                   <MessageCircle className="w-5 h-5" /> +91 72889 99123
                 </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h3 className="font-serif text-[24px] text-brand-ink mb-8 relative z-10">Claim Your Free 3D Design</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      className="w-full bg-white/50 border border-black/10 rounded-[4px] px-4 py-3 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      className="w-full bg-white/50 border border-black/10 rounded-[4px] px-4 py-3 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Property Location (City/Area)" 
                      className="w-full bg-white/50 border border-black/10 rounded-[4px] px-4 py-3 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <select 
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-black/10 rounded-[4px] px-4 py-3 text-[14px] text-brand-ink/80 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors appearance-none"
                    >
                      <option value="" disabled>Select Project Type</option>
                      <option value="Villa Entire Home">Villa Entire Home</option>
                      <option value="2BHK / 3BHK Apartment">2BHK / 3BHK Apartment</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Living Room / Bedroom">Living Room / Bedroom Specific</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements... (Optional)" 
                    className="w-full bg-white/50 border border-black/10 rounded-[4px] px-4 py-3 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-secondary py-4 text-[14px] tracking-[1px] uppercase flex justify-center items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                >
                  {isSubmitting ? 'Processing...' : 'Book Free Consultation'}
                </button>
                <p className="text-[10px] text-center text-brand-ink/40 uppercase tracking-[1px] mt-4">
                  We respect your privacy. No spam.
                </p>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
