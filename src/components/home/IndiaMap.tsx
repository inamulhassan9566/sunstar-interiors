import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';
import { MapPin } from 'lucide-react';

const cities = [
  'Chennai',
  'Kanchipuram',
  'Thiruvannamalai',
  'Vellore / Ambur / Arcot belt',
  'Villupuram',
  'Pondicherry',
  'Coimbatore',
  'Dindigul',
  'Madurai',
  'Ramanathapuram (Ramnad)',
  'Tirunelveli',
  'Kanyakumari',
  'Udipi (KA)',
  'Chittoor',
  'Tirumala',
  'Thiruvananthapuram',
];

const IndiaMap = () => {
  const titleRef = useGSAPFadeIn();
  const mapRef = useGSAPFadeIn(0.2);
  const citiesRef = useGSAPStagger();

  return (
    <section className="section-padding bg-sage-light overflow-hidden">
      <div className="container-premium">

        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Reach
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Projects Delivered Across South India
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transforming homes and commercial spaces in major cities across the region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* MAP ONLY — NO MARKERS */}
          <div ref={mapRef} className="relative aspect-square max-w-lg mx-auto w-full">
            <img
              src="/src/assets/tamilnadu.png"
              alt="Tamil Nadu Map"
              className="w-full h-full object-contain"
            />
          </div>

          {/* CITY LIST */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Serving 12+ Cities
            </h3>

            <div ref={citiesRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 p-3 rounded-xl bg-background hover:shadow-soft transition-shadow"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">{city}</span>
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
