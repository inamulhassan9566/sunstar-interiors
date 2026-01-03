import { useGSAPFadeIn } from '@/hooks/useGSAP';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do you provide modular kitchen designs?',
    answer: 'Yes, modular kitchen design is our core specialty. We offer fully customized modular kitchens with premium finishes, smart storage solutions, and ergonomic layouts. Our designs range from L-shaped, U-shaped, parallel, and island kitchens, tailored to your space and lifestyle. Each kitchen is crafted with high-quality materials including marine plywood, soft-close mechanisms, and premium hardware.',
  },
  {
    question: 'Do you handle complete home interiors?',
    answer: 'Absolutely! We provide end-to-end interior design solutions for your entire home. This includes living rooms, bedrooms, dining areas, home offices, wardrobes, and more. Our designers create cohesive designs that reflect your personal style while ensuring functionality and comfort throughout your home.',
  },
  {
    question: 'Do you work in multiple cities in India?',
    answer: 'Yes, we operate across 12+ major cities in India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, and Kochi. Our pan-India presence allows us to serve clients nationwide with the same level of quality and professionalism.',
  },
  {
    question: 'What is the typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. A modular kitchen typically takes 35-45 days from design approval to installation. Full home interiors for a 2-3 BHK apartment usually take 60-90 days. We provide detailed timelines during consultation and pride ourselves on on-time delivery, with project tracking updates throughout the process.',
  },
  {
    question: 'Do you provide 3D design before execution?',
    answer: 'Yes, we provide detailed 3D visualizations and walkthroughs before any execution begins. This allows you to experience your space virtually and make any adjustments before work starts. Our 3D renders are highly realistic, showing accurate materials, colors, lighting, and proportions so you know exactly what to expect.',
  },
  {
    question: 'Do you help in material selection?',
    answer: 'Definitely! Material selection is a crucial part of our design process. Our designers guide you through various options for laminates, veneers, countertops, hardware, fabrics, and finishes. We work with premium brands and can arrange showroom visits or samples at your home. Our expertise helps you choose materials that balance aesthetics, durability, and budget.',
  },
  {
    question: 'What warranty do you offer?',
    answer: 'We offer an industry-leading 10-year warranty on our modular furniture and installations. This covers manufacturing defects, hardware functionality, and structural integrity. Our after-sales team is always available for any maintenance or support needs throughout the warranty period.',
  },
  {
    question: 'How do I get a cost estimate?',
    answer: 'Getting a cost estimate is simple. Book a free consultation through our website or call us directly. Our designer will visit your space, understand your requirements and preferences, and provide a detailed quotation within 3-5 working days. The estimate includes design fees, materials, labor, and installation—no hidden costs.',
  },
];

const FAQ = () => {
  const titleRef = useGSAPFadeIn();
  const accordionRef = useGSAPFadeIn(0.2);

  return (
    <section className="section-padding bg-muted">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our interior design services.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl border border-border px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
