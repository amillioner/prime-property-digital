import { Card, CardContent } from "@/components/ui/card";
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Utensils, 
  Gamepad2,
  Heart,
  Baby,
  Trees,
  Wifi,
  ShoppingBag,
  Users
} from "lucide-react";
import poolImage from "@/assets/amenity-pool.jpg";
import gymImage from "@/assets/amenity-gym.jpg";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Resort-Style Pool",
      description: "Temperature-controlled infinity pool with poolside service",
      image: poolImage
    },
    {
      icon: Dumbbell,
      title: "State-of-Art Gym",
      description: "24/7 fitness center with premium equipment and personal trainers",
      image: gymImage
    },
    {
      icon: Heart,
      title: "Wellness Spa",
      description: "Full-service spa with massage rooms and relaxation areas"
    },
    {
      icon: Baby,
      title: "Kids Play Area",
      description: "Safe and supervised children's playground and activity zone"
    },
    {
      icon: Trees,
      title: "Landscaped Gardens",
      description: "Beautifully maintained gardens with walking paths"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Covered parking with valet service for residents"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "On-site restaurant with world-class cuisine"
    },
    {
      icon: Gamepad2,
      title: "Gaming Lounge",
      description: "Modern gaming and entertainment center"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout"
    },
    {
      icon: ShoppingBag,
      title: "Retail Outlets",
      description: "Convenient shopping and services within the complex"
    },
    {
      icon: Users,
      title: "Community Hall",
      description: "Multipurpose hall for events and gatherings"
    }
  ];

  return (
    <section id="amenities" className="py-section bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with over 50 premium amenities designed for your comfort and lifestyle
          </p>
        </div>

        {/* Featured Amenities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {amenities.slice(0, 2).map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={amenity.title} className="overflow-hidden shadow-luxury hover-lift group">
                <div className="relative h-64">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{amenity.title}</h3>
                    <p className="text-white/90">{amenity.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* All Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.slice(2).map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={amenity.title} className="p-6 text-center hover-lift shadow-card group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Lifestyle Features */}
        <div className="mt-16 bg-white rounded-2xl shadow-luxury p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <h4 className="font-semibold text-foreground mb-2">Premium Amenities</h4>
              <p className="text-muted-foreground text-sm">Everything you need for luxury living</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <h4 className="font-semibold text-foreground mb-2">Concierge Service</h4>
              <p className="text-muted-foreground text-sm">Round-the-clock assistance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="font-semibold text-foreground mb-2">Satisfaction</h4>
              <p className="text-muted-foreground text-sm">Guaranteed luxury experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;