import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import EnquiryPopup from "./EnquiryPopup";
import veranda1 from "@/assets/veranda1.jpg";
import veranda2 from "@/assets/veranda2.jpg";
import veranda3 from "@/assets/veranda3.jpg";
import veranda4 from "@/assets/veranda4.jpg";
import veranda5 from "@/assets/veranda5.jpg";
import veranda6 from "@/assets/veranda6.jpg";
import veranda7 from "@/assets/veranda7.jpg";
import veranda8 from "@/assets/veranda8.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
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
  
  return (
    <>
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel 
            images={carouselImages}
            showDots={true}
            autoplay={true}
            className="w-full h-full"
          />
        </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-white text-sm font-medium">
              {t("hero.exclusiveOffer")} - {t("hero.limitedTime")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-2xl animate-slide-in-right font-light drop-shadow-md">
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-6 max-w-2xl animate-slide-in-right drop-shadow-md">
            {t("hero.description")}
          </p>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-8 animate-slide-in-right">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-white/90 text-lg drop-shadow-md">
              Mirzo Ulugbek, Tashkent • Premium Location
            </span>
          </div>

          {/* Price Badge */}
          <div className="bg-gradient-gold rounded-lg p-4 mb-8 max-w-sm animate-scale-in shadow-luxury">
            <p className="text-white text-sm font-medium">{t("pricing.startingFrom")}</p>
            <p className="text-white text-3xl font-bold">$71,500</p>
            <p className="text-white/90 text-sm">1-3 {t("pricing.bedroom")} {t("contact.form.interest")}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="hero" size="xl" onClick={() => setIsEnquiryOpen(true)} className="shadow-luxury">
              {t("hero.enquireNow")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="premium" size="xl" className="border-white text-white hover:bg-white hover:text-foreground shadow-luxury">
              {t("contact.quickActions.bookVisit")}
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">15 {t("location.minutes")}</p>
              <p className="text-white/90 drop-shadow-md">{t("location.places.airport")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">10 {t("location.minutes")}</p>
              <p className="text-white/90 drop-shadow-md">{t("location.places.metro")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">50+</p>
              <p className="text-white/90 drop-shadow-md">{t("amenities.title")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <EnquiryPopup 
      isOpen={isEnquiryOpen}
      onClose={() => setIsEnquiryOpen(false)}
    />
  </>
  );
};

export default HeroSection;