import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Home, Building } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      icon: Home,
      title: "1 Bedroom",
      subtitle: "Premium Apartments",
      price: "AED 1.2M",
      size: "650 - 750 sq ft",
      features: [
        "Prime Marina Views",
        "Modern Kitchen",
        "Premium Finishes",
        "Balcony Access",
        "Built-in Wardrobes",
        "24/7 Concierge"
      ],
      popular: false
    },
    {
      icon: Building,
      title: "2 Bedroom",
      subtitle: "Family Residences",
      price: "AED 1.8M",
      size: "1,050 - 1,200 sq ft",
      features: [
        "Panoramic City Views",
        "Master Suite",
        "Guest Bathroom",
        "Spacious Living Area",
        "Premium Kitchen Island",
        "Dual Balconies",
        "Walk-in Closet",
        "Premium Amenities Access"
      ],
      popular: true
    },
    {
      icon: Crown,
      title: "3 Bedroom",
      subtitle: "Luxury Penthouses",
      price: "AED 2.8M",
      size: "1,450 - 1,650 sq ft",
      features: [
        "Exclusive Penthouse Views",
        "3 Master Suites",
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
    <section id="pricing" className="py-section bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of premium apartments designed for modern luxury living
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card 
                key={tier.title}
                className={`relative hover-lift transition-all duration-300 ${
                  tier.popular 
                    ? 'border-primary shadow-gold scale-105' 
                    : 'border-border shadow-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
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
                    Request Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Payment Plans */}
        <div className="mt-16 bg-white rounded-2xl shadow-luxury p-8">
          <div className="text-center mb-8">
            <h3 className="text-heading font-bold text-foreground mb-4">
              Flexible Payment Plans
            </h3>
            <p className="text-muted-foreground">
              Easy payment options designed to make your dream home accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">10%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Booking</h4>
              <p className="text-sm text-muted-foreground">On reservation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">40%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Construction</h4>
              <p className="text-sm text-muted-foreground">During construction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">50%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Completion</h4>
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
    </section>
  );
};

export default PricingSection;