import { useState } from 'react';
import { useGSAPFadeIn } from '@/hooks/useGSAP';
import { useToast } from '@/hooks/use-toast';

const serviceTypes = [
  'Modular Kitchen',
  'Full Home Interior',
  'Wardrobe & Storage',
  'Commercial Interior',
  'Renovation',
  'Other',
];

const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    serviceType: '',
    message: '',
  });

  const titleRef = useGSAPFadeIn();
  const formRef = useGSAPFadeIn(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Consultation Request Sent!',
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
    <section className="section-padding" id="consultation">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={titleRef}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Get Started</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
              Book Your Free Consultation
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Ready to transform your space? Fill out the form and our design expert will reach out within 24 hours to schedule a free consultation.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Free design consultation at your home',
                'Personalized 3D visualization',
                'Transparent pricing with no hidden costs',
                'Flexible payment options available',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="bg-sage-light rounded-3xl p-8 md:p-10">
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
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>

              <p className="text-center text-muted-foreground text-xs">
                By submitting, you agree to receive calls and messages about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
