import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChefHat, Home, Warehouse, Building2, Wrench, Box } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';

import heroKitchen from '@/assets/hero-kitchen.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectWardrobe from '@/assets/project-wardrobe.jpg';
import projectOffice from '@/assets/project-office.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: ChefHat,
    title: 'Modular Kitchens',
    description: 'Transform your kitchen into a culinary masterpiece with our premium modular kitchen designs. We combine smart storage solutions, ergonomic layouts, and high-quality materials to create kitchens that are as functional as they are beautiful.',
    features: [
      'Custom cabinet configurations',
      'Premium hardware and soft-close mechanisms',
      'Countertop options: granite, quartz, marble',
      'Integrated appliance solutions',
      'Under-cabinet and ambient lighting',
      'Smart storage accessories',
    ],
    image: heroKitchen,
  },
  {
    id: 2,
    icon: Home,
    title: 'Full Home Interior',
    description: 'From concept to completion, we design and execute complete home interiors that reflect your personality and lifestyle. Our holistic approach ensures cohesive design across all rooms while maximizing functionality and comfort.',
    features: [
      'Living room design',
      'Bedroom and guest room interiors',
      'Dining area styling',
      'Home office solutions',
      'Balcony and utility design',
      'Lighting and electrical planning',
    ],
    image: projectLiving,
  },
  {
    id: 3,
    icon: Warehouse,
    title: 'Wardrobes & Storage',
    description: 'Maximize your space with custom wardrobes and storage solutions designed to fit your lifestyle. From walk-in closets to compact storage units, we create organized spaces that make daily life easier.',
    features: [
      'Walk-in closet design',
      'Sliding and hinged options',
      'Built-in lighting systems',
      'Accessory organizers',
      'Loft storage solutions',
      'Custom drawer configurations',
    ],
    image: projectWardrobe,
  },
  {
    id: 4,
    icon: Building2,
    title: 'Commercial Interior Design',
    description: 'Create inspiring workspaces that boost productivity and impress clients. Our commercial interior solutions cater to offices, retail spaces, restaurants, and hospitality venues with designs that align with your brand identity.',
    features: [
      'Office space planning',
      'Retail store design',
      'Restaurant and café interiors',
      'Reception and lobby design',
      'Meeting room solutions',
      'Brand integration',
    ],
    image: projectOffice,
  },
  {
    id: 5,
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces with our renovation services. Whether it\'s a complete makeover or targeted upgrades, we transform outdated interiors into modern, functional spaces.',
    features: [
      'Complete space renovation',
      'Kitchen and bathroom upgrades',
      'Structural modifications',
      'Flooring and ceiling work',
      'Electrical and plumbing updates',
      'Paint and finish work',
    ],
    image: projectLiving,
  },
  {
    id: 6,
    icon: Box,
    title: 'Space Planning & 3D Visualization',
    description: 'Experience your dream space before a single nail is hammered. Our 3D visualization services let you walk through your future interior, making it easy to perfect every detail before execution.',
    features: [
      'Detailed 2D floor plans',
      'Photorealistic 3D renders',
      'Virtual walkthroughs',
      'Material visualization',
      'Lighting simulation',
      'Design iterations',
    ],
    image: heroKitchen,
  },
];

const Services = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const titleRef = useGSAPFadeIn();

  useEffect(() => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Modular Kitchen & Interior Design - Sunstar</title>
        <meta name="description" content="Explore our interior design services: modular kitchens, full home interiors, wardrobes, commercial design, renovation, and 3D visualization. Premium quality across India." />
        <link rel="canonical" href="https://sunstarmodular.com/services" />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div ref={bannerRef} className="absolute inset-0 scale-110">
            <img
              src={projectWardrobe}
              alt="Premium interior design services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-background">
                Our Services
              </h1>
              <p className="text-background/80 mt-4 text-lg max-w-xl mx-auto px-4">
                Comprehensive interior design solutions for every space
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-premium">
            <div ref={titleRef} className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Offer</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
                Premium Interior Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                From modular kitchens to complete home interiors, we bring your vision to life with exceptional craftsmanship.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} service by Sunstar Modular Kitchen`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="btn-primary mt-8 inline-flex items-center group"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-premium text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
              Book a free consultation and let our experts help you create your dream space.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-primary font-medium hover:bg-background/90 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
