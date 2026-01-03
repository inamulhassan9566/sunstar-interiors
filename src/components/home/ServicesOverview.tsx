import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Home, Warehouse, Building2, Wrench, Box } from 'lucide-react';
import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';

const services = [
  {
    icon: ChefHat,
    title: 'Modular Kitchens',
    description: 'Sleek, functional kitchen designs with premium finishes and smart storage solutions.',
  },
  {
    icon: Home,
    title: 'Full Home Interior',
    description: 'Complete interior solutions from living rooms to bedrooms, tailored to your lifestyle.',
  },
  {
    icon: Warehouse,
    title: 'Wardrobes & Storage',
    description: 'Custom wardrobes and storage systems maximizing space with elegant design.',
  },
  {
    icon: Building2,
    title: 'Commercial Interior',
    description: 'Professional workspace design for offices, retail, and hospitality sectors.',
  },
  {
    icon: Wrench,
    title: 'Renovation',
    description: 'Transform existing spaces with modern updates and complete makeovers.',
  },
  {
    icon: Box,
    title: '3D Visualization',
    description: 'Experience your dream space before execution with realistic 3D renders.',
  },
];

const ServicesOverview = () => {
  const titleRef = useGSAPFadeIn();
  const cardsRef = useGSAPStagger();

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design solutions to transform your spaces.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary text-sm font-medium group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
