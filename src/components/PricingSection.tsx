import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Home, Building, MapPin, Star } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import veranda1 from "@/assets/veranda1.jpg";
import veranda2 from "@/assets/veranda2.jpg";
import veranda3 from "@/assets/veranda3.jpg";
import veranda4 from "@/assets/veranda4.jpg";
import veranda5 from "@/assets/veranda5.jpg";
import veranda6 from "@/assets/veranda6.jpg";
import veranda7 from "@/assets/veranda7.jpg";
import veranda8 from "@/assets/veranda8.jpg";

const PricingSection = () => {
  const { t } = useTranslation();
  
  const carouselImages = [
    veranda1,
    veranda2,
    veranda3,
    veranda4,
    veranda5,
    veranda6,
    veranda7,
    veranda8
  ];
  
  const pricingTiers = [
    {
      icon: Home,
      title: `1 ${t("pricing.bedroom")}`,
      subtitle: t("pricing.features.premium"),
      price: "$71,500 - $82,500", // 65-75 sqm * $1100
      size: "65 - 75 " + t("pricing.sqm"),
      features: [
        t("pricing.features.view"),
        t("pricing.features.premium"),
        t("pricing.features.balcony"),
        t("pricing.features.storage"),
        "Modern Kitchen",
        "24/7 Concierge"
      ],
      popular: false
    },
    {
      icon: Building,
      title: `2 ${t("pricing.bedroom")}`,
      subtitle: t("pricing.features.premium"),
      price: "$115,500 - $132,000", // 105-120 sqm * $1100
      size: "105 - 120 " + t("pricing.sqm"),
      features: [
        t("pricing.features.view"),
        t("pricing.features.parking"),
        t("pricing.features.balcony"),
        t("pricing.features.storage"),
        "Master Suite",
        "Guest Bathroom",
        "Premium Kitchen Island",
        "Dual Balconies"
      ],
      popular: true
    },
    {
      icon: Crown,
      title: `3 ${t("pricing.bedroom")}`,
      subtitle: "Luxury Penthouses",
      price: "$159,500 - $181,500", // 145-165 sqm * $1100
      size: "145 - 165 " + t("pricing.sqm"),
      features: [
        "Penthouse Views",
        t("pricing.features.parking"),
        "Maid's Room",
        "Private Elevator Access",
        "Premium Italian Kitchen",
        "3 Private Balconies",
        "Home Office Space",
        "VIP Concierge Services"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative min-h-screen flex flex-col">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <ImageCarousel 
          images={carouselImages}
          showDots={true}
          autoplay={true}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center py-20">
        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">15 {t("location.minutes")}</p>
            <p className="text-white/90">{t("location.places.airport")}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">10 {t("location.minutes")}</p>
            <p className="text-white/90">{t("location.places.metro")}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-white/90">{t("amenities.title")}</p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card 
                key={tier.title}
                className={`relative bg-white/95 backdrop-blur-md hover-lift transition-all duration-300 ${
                  tier.popular 
                    ? 'border-primary shadow-gold scale-105' 
                    : 'border-white/20 shadow-luxury'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-bold">
                      {t("pricing.features.popular")}
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {tier.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{tier.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">{tier.price}</p>
                    <p className="text-muted-foreground">{tier.size}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={tier.popular ? "luxury" : "premium"} 
                    className="w-full"
                    size="lg"
                  >
                    {t("pricing.learnMore")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>

      {/* Payment Plans */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-luxury p-8">
            <div className="text-center mb-8">
              <h3 className="text-heading font-bold text-foreground mb-4">
                {t("pricing.paymentPlan")}
              </h3>
              <p className="text-muted-foreground">
                {t("pricing.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">10%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("pricing.downPayment")}</h4>
                <p className="text-sm text-muted-foreground">On reservation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">40%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("pricing.installments")}</h4>
                <p className="text-sm text-muted-foreground">During construction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">50%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("pricing.handover")}</h4>
                <p className="text-sm text-muted-foreground">On handover</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">0%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Commission</h4>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;