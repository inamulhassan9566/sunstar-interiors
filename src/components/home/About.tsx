import { useGSAPFadeIn, useGSAPSlideIn } from '@/hooks/useGSAP';
import projectLiving from '@/assets/project-living.jpg';

const About = () => {
  const titleRef = useGSAPFadeIn();
  const imageRef = useGSAPSlideIn('left');
  const contentRef = useGSAPSlideIn('right', 0.2);

  return (
    <section className="section-padding bg-sage-light">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Crafting Beautiful Living Spaces
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={projectLiving}
                alt="Elegant living room interior designed by Sunstar Modular Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-background rounded-2xl p-6 shadow-medium">
              <p className="font-display text-4xl font-bold text-primary">14+</p>
              <p className="text-muted-foreground text-sm mt-1">Years of Excellence</p>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Where Vision Meets Exceptional Craftsmanship
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Sunstar Modular Kitchen, we believe that great design transforms lives. Since 2010, we've been creating stunning modular kitchens and complete home interiors that blend functionality with aesthetic excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of expert designers and skilled craftsmen work closely with each client to understand their unique vision, delivering spaces that are not just beautiful but truly reflect their personality and lifestyle.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { icon: '✓', text: 'Premium Quality Materials' },
                { icon: '✓', text: '10 Year Warranty' },
                { icon: '✓', text: 'On-Time Delivery' },
                { icon: '✓', text: 'Pan-India Service' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    {item.icon}
                  </span>
                  <span className="text-foreground text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
