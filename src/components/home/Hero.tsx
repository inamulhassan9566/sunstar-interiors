import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import heroImage from '@/assets/hero-kitchen.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        contentRef.current?.querySelectorAll('.animate-item'),
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Luxury modular kitchen with sage green cabinets and marble countertops"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container-premium relative z-10 pt-24">
        <div className="max-w-2xl">
          <span className="animate-item inline-block px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
            Premium Interior Design
          </span>
          
          <h1 className="animate-item font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
            Designing Spaces That{' '}
            <span className="text-gradient">Inspire</span> Everyday Living
          </h1>
          
          <p className="animate-item text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Transform your home with Sunstar Modular Kitchen. India's leading modular kitchen and luxury home interior designers delivering premium craftsmanship since 2010.
          </p>
          
          <div className="animate-item flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary group">
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-outline">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
