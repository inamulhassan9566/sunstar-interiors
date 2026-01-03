import { useState, useRef, useEffect } from 'react';
import { useGSAPFadeIn } from '@/hooks/useGSAP';
import beforeImage from '@/assets/before-kitchen.jpg';
import afterImage from '@/assets/after-kitchen.jpg';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useGSAPFadeIn();
  const sliderRef = useGSAPFadeIn(0.2);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Transformation</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Before & After
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Witness the remarkable transformations we create. Drag the slider to compare.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <img
              src={afterImage}
              alt="Kitchen after renovation with modern design"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt="Kitchen before renovation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-background shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background shadow-medium flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-6 border-transparent border-r-primary" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-primary" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-foreground/80 text-background text-sm rounded-full">
              Before
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
