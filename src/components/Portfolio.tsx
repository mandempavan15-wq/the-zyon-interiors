import { motion } from 'motion/react';

export function Portfolio() {
  const projects = [
    {
      title: "Modern Minimal Living",
      tag: "Living Room",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200", // Image 1 (used in hero, re-using as conceptual match)
      className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto h-full"
    },
    {
      title: "Elegant Dining Space",
      tag: "Dining + Staircase",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", // Image 2
      className: "aspect-[4/3] md:aspect-auto min-h-[300px]"
    },
    {
      title: "Premium Living Experience",
      tag: "Luxury Living Room",
      img: "https://images.unsplash.com/photo-1598928506311-c55dd580e6cb?auto=format&fit=crop&q=80&w=800", // Image 3
      className: "aspect-[4/3] md:aspect-auto min-h-[300px]"
    },
    {
      title: "Luxury Dining Design",
      tag: "Designer Dining",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800", // Image 4
      className: "aspect-[4/3] md:aspect-auto min-h-[300px]"
    },
    {
      title: "Cozy Modern Bedroom",
      tag: "Bedroom",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800", // Image 5
      className: "aspect-[4/3] md:aspect-auto min-h-[300px] md:col-span-2"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-beige border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-sage mb-4 block">Our Work</span>
          <h2 className="text-[36px] md:text-[48px] font-serif font-normal text-brand-ink leading-[1.1]">
            Transformations that <br className="hidden md:block"/>
            <span className="text-brand-gold">speak for themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 md:h-[900px]">
          {projects.map((item, idx) => (
            <motion.a
              href="#contact"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative rounded-[12px] overflow-hidden group block ${item.className}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-[10px] uppercase font-bold tracking-[2px] text-white/80 block mb-2">{item.tag}</span>
                <h3 className="font-serif text-[24px] text-white">{item.title}</h3>
                
                <div className="mt-4 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[11px] font-bold tracking-[1px] uppercase text-brand-gold">View Project &rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="#contact" className="btn-primary inline-flex uppercase tracking-[1px]">
             Book a consultation for your home
           </a>
        </div>
      </div>
    </section>
  );
}
