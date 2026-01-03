import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';
import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Mumbai', top: '58%', left: '22%' },
  { name: 'Delhi', top: '28%', left: '35%' },
  { name: 'Bangalore', top: '72%', left: '32%' },
  { name: 'Chennai', top: '70%', left: '42%' },
  { name: 'Hyderabad', top: '58%', left: '36%' },
  { name: 'Pune', top: '55%', left: '26%' },
  { name: 'Kolkata', top: '45%', left: '62%' },
  { name: 'Ahmedabad', top: '45%', left: '20%' },
  { name: 'Jaipur', top: '35%', left: '28%' },
  { name: 'Lucknow', top: '35%', left: '45%' },
  { name: 'Chandigarh', top: '22%', left: '32%' },
  { name: 'Kochi', top: '82%', left: '30%' },
];

const IndiaMap = () => {
  const titleRef = useGSAPFadeIn();
  const mapRef = useGSAPFadeIn(0.2);
  const citiesRef = useGSAPStagger();

  return (
    <section className="section-padding bg-sage-light overflow-hidden">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Reach</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Projects Delivered Across India
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transforming homes and commercial spaces in major cities across the country.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div ref={mapRef} className="relative aspect-square max-w-lg mx-auto w-full">
            {/* India Map Outline (Simplified SVG) */}
            <svg
              viewBox="0 0 400 450"
              fill="none"
              className="w-full h-full"
              aria-label="Map of India showing project locations"
            >
              <path
                d="M200 30 L250 40 L290 60 L330 90 L350 130 L355 170 L340 210 L350 250 L360 300 L340 350 L300 380 L260 400 L220 420 L180 410 L140 380 L100 340 L80 290 L70 240 L60 190 L70 140 L90 100 L130 60 L170 40 Z"
                fill="hsl(var(--primary-light))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                className="opacity-60"
              />
            </svg>

            {/* City Markers */}
            {cities.map((city, index) => (
              <div
                key={city.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: city.top, left: city.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-glow" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {city.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cities List */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Serving 12+ Cities
            </h3>
            <div ref={citiesRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-2 p-3 rounded-xl bg-background hover:shadow-soft transition-shadow"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">{city.name}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              Don't see your city? Contact us—we're expanding our reach every month!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;
