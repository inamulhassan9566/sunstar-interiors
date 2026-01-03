import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useGSAPFadeIn } from '@/hooks/useGSAP';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Sunstar transformed our kitchen beyond our expectations. The attention to detail and quality of materials is exceptional. The team was professional and delivered on time.',
    project: 'Modular Kitchen',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'From design consultation to final installation, the experience was seamless. Our living room looks like a page from a design magazine. Highly recommend their services!',
    project: 'Full Home Interior',
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Bangalore',
    rating: 5,
    text: 'The 3D visualization helped us see exactly what our space would look like. The end result was even better than the renders. Excellent craftsmanship and customer service.',
    project: 'Master Bedroom',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'We renovated our entire 3BHK flat with Sunstar. The project was completed within budget and the 10-year warranty gives us complete peace of mind.',
    project: 'Complete Renovation',
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    location: 'Chennai',
    rating: 5,
    text: 'Outstanding work on our office interiors. The space is now more functional and aesthetically pleasing. Our clients are always impressed!',
    project: 'Commercial Interior',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const titleRef = useGSAPFadeIn();
  const carouselRef = useGSAPFadeIn(0.2);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div ref={carouselRef} className="max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative bg-sage-light rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="font-display text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
