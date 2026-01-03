import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useGSAPFadeIn } from '@/hooks/useGSAP';
import { useToast } from '@/hooks/use-toast';

import projectBedroom from '@/assets/project-bedroom.jpg';

gsap.registerPlugin(ScrollTrigger);

const serviceTypes = [
  'Modular Kitchen',
  'Full Home Interior',
  'Wardrobe & Storage',
  'Commercial Interior',
  'Renovation',
  'Other',
];

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune',
  'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi',
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    serviceType: '',
    message: '',
  });

  const bannerRef = useRef<HTMLDivElement>(null);
  const titleRef = useGSAPFadeIn();
  const formRef = useGSAPFadeIn(0.2);
  const infoRef = useGSAPFadeIn(0.3);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent Successfully!',
      description: 'Our team will contact you within 24 hours.',
    });

    setFormData({
      name: '',
      phone: '',
      city: '',
      serviceType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sunstar Modular Kitchen - Book Free Consultation</title>
        <meta name="description" content="Get in touch with Sunstar Modular Kitchen for premium interior design services. Book a free consultation, call us, or visit our design center in Mumbai." />
        <link rel="canonical" href="https://sunstarmodular.com/contact" />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
          <div ref={bannerRef} className="absolute inset-0 scale-110">
            <img
              src={projectBedroom}
              alt="Contact Sunstar Modular Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-background">
                Contact Us
              </h1>
              <p className="text-background/80 mt-4 text-lg max-w-xl mx-auto px-4">
                Let's discuss your dream interior project
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div ref={formRef}>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-8">
                  Book Your Free Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={15}
                      pattern="[0-9+\-\s]+"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      maxLength={50}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                      Type of Service *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div ref={infoRef} className="space-y-8">
                <div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact Info</span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-8">
                    Get In Touch
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href="mailto:hello@sunstarmodular.com" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@sunstarmodular.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        Design Center, MG Road<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755889203676!2d72.82502731490225!3d19.044829987105744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sMG%20Road%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunstar Modular Kitchen Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India Map Section */}
        <section className="section-padding bg-sage-light">
          <div className="container-premium">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Presence</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
                Serving Across India
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We deliver premium interior design services in major cities across India.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-background hover:shadow-soft transition-shadow"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
