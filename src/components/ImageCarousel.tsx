import { useState, useCallback, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  images: string[];
  showDots?: boolean;
  autoplay?: boolean;
  className?: string;
}

const ImageCarousel = ({ 
  images, 
  showDots = true, 
  autoplay = true,
  className = "" 
}: ImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugins = autoplay ? [
    Autoplay({
      delay: 5000,
    })
  ] : [];

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    onSelect(); // Set initial value

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className={`relative group ${className}`}>
      <Carousel 
        className="w-full h-full"
        plugins={plugins}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full flex items-center justify-center bg-black/10">
                <img
                  src={image}
                  alt={`Veranda Residences ${index + 1}`}
                  className="max-w-full max-h-full object-fill"
                />
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 border-white/30 text-white hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 border-white/30 text-white hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Carousel>

      {/* Dots Navigation */}
      {showDots && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;