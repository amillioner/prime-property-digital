import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Windsor Residences Dubai - Luxury Apartments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-white text-sm font-medium">
              Award-Winning Luxury Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Windsor
            <span className="block text-primary-glow">Residences</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl animate-slide-in-right font-light">
            Experience Unparalleled Luxury Living in the Heart of Dubai
          </p>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-8 animate-slide-in-right">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-white/80 text-lg">
              Dubai Marina • Premium Location
            </span>
          </div>

          {/* Price Badge */}
          <div className="bg-gradient-gold rounded-lg p-4 mb-8 max-w-sm animate-scale-in">
            <p className="text-white text-sm font-medium">Starting From</p>
            <p className="text-white text-3xl font-bold">AED 1.2M</p>
            <p className="text-white/80 text-sm">1-3 Bedroom Apartments</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="hero" size="xl">
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="premium" size="xl" className="border-white text-white hover:bg-white hover:text-foreground">
              Schedule Site Visit
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">15 Min</p>
              <p className="text-white/80">to Dubai Mall</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">10 Min</p>
              <p className="text-white/80">to Airport</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">50+</p>
              <p className="text-white/80">Premium Amenities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;