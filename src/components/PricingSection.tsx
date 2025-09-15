import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Home, Building } from "lucide-react";

const PricingSection = () => {
  const { t } = useTranslation();
  const pricingTiers = [
    {
      icon: Home,
      title: `1 ${t("pricing.bedroom")}`,
      subtitle: t("pricing.features.premium"),
      price: "$180,000",
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
      price: "$280,000",
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
      price: "$450,000",
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
    <section id="pricing" className="py-section bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
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

        {/* Payment Plans */}
        <div className="mt-16 bg-white rounded-2xl shadow-luxury p-8">
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
    </section>
  );
};

export default PricingSection;