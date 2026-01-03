import { Shield, Clock, Award, Headphones, CheckCircle, Truck } from 'lucide-react';
import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';

const features = [
  {
    icon: Award,
    title: 'Premium Finishes',
    description: 'We use only the finest materials and finishes, ensuring lasting beauty and durability.',
  },
  {
    icon: Shield,
    title: '10 Year Warranty',
    description: 'Our confidence in quality is backed by an industry-leading 10-year warranty on all work.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time. Every project is completed within the agreed timeline.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'From consultation to completion, a dedicated project manager guides you every step.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks at every stage ensure perfection in every detail.',
  },
  {
    icon: Truck,
    title: 'Pan-India Service',
    description: 'Our services extend across major cities in India with local expertise.',
  },
];

const WhyChooseUs = () => {
  const titleRef = useGSAPFadeIn();
  const gridRef = useGSAPStagger();

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Sunstar</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
            Why Choose Us
          </h2>
          <p className="text-background/70 mt-4 max-w-2xl mx-auto">
            Experience the Sunstar difference with our commitment to excellence, quality, and customer satisfaction.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
