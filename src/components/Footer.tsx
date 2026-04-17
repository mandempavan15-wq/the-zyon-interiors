import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-beige text-brand-ink pt-20 pb-10 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex flex-col items-start group mb-6 inline-block">
              <span className="font-serif text-[24px] font-bold tracking-[1px] uppercase">
                The Zyon Interiors
              </span>
            </a>
            <p className="text-[14px] text-brand-ink/70 max-w-sm leading-[1.6]">
              Luxury interior design studio specializing in bespoke, high-end residential projects. We bring elegance, warmth, and meticulous craftsmanship to every space.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-[1px] uppercase text-brand-sage mb-6 border-b border-black/10 pb-4">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#portfolio" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors">Client Testimonials</a></li>
              <li><a href="#" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-[1px] uppercase text-brand-sage mb-6 border-b border-black/10 pb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@zyoninteriors.com" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors block">
                  hello@zyoninteriors.com
                </a>
              </li>
              <li>
                <a href="tel:+917288999123" className="text-[13px] text-brand-ink/70 hover:text-brand-ink transition-colors block">
                  +91 72889 99123
                </a>
              </li>
              <li>
                <p className="text-[13px] text-brand-ink/70 leading-[1.6]">
                  Kondapur, Gachibowli<br/>
                  Hyderabad, Telangana
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[11px] uppercase tracking-[1px] text-brand-ink/50">
            &copy; {new Date().getFullYear()} The Zyon Interiors. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <a href="https://instagram.com/thezyoninteriors" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] uppercase tracking-[1px] text-brand-ink/50 hover:text-brand-ink transition-colors">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
