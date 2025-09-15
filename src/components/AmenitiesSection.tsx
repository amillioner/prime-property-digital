import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const amenities = [
    {
      icon: Waves,
      title: t("amenities.items.pool.title"),
      description: t("amenities.items.pool.description"),
      image: poolImage
    },
    {
      icon: Dumbbell,
      title: t("amenities.items.gym.title"),
      description: t("amenities.items.gym.description"),
      image: gymImage
    },
    {
      icon: Heart,
      title: t("amenities.items.spa.title"),
      description: t("amenities.items.spa.description")
    },
    {
      icon: Baby,
      title: t("amenities.items.kidsArea.title"),
      description: t("amenities.items.kidsArea.description")
    },
    {
      icon: Trees,
      title: t("amenities.items.gardens.title"),
      description: t("amenities.items.gardens.description")
    },
    {
      icon: Car,
      title: t("amenities.items.parking.title"),
      description: t("amenities.items.parking.description")
    },
    {
      icon: Gamepad2,
      title: t("amenities.items.gaming.title"),
      description: t("amenities.items.gaming.description")
    },
    {
      icon: Wifi,
      title: t("amenities.items.wifi.title"),
      description: t("amenities.items.wifi.description")
    },
    {
      icon: ShoppingBag,
      title: t("amenities.items.retail.title"),
      description: t("amenities.items.retail.description")
    },
    {
      icon: Users,
      title: t("amenities.items.community.title"),
      description: t("amenities.items.community.description")
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