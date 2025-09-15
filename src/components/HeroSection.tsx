import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import EnquiryPopup from "./EnquiryPopup";
import heroImage from "@/assets/hero-veranda.jpg";
import facade1 from "@/assets/facade-1.webp";
import facade2 from "@/assets/facade-2.webp";
import facade3 from "@/assets/facade-3.webp";
import verandaMain from "@/assets/veranda-main.webp";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const carouselImages = [
    verandaMain,
    heroImage,
    facade1,
    facade2,
    facade3
  ];
  
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center">
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-white text-sm font-medium">
              {t("hero.exclusiveOffer")} - {t("hero.limitedTime")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {t("hero.title")}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl animate-slide-in-right font-light">
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-6 max-w-2xl animate-slide-in-right">
            {t("hero.description")}
          </p>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-8 animate-slide-in-right">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-white/80 text-lg">
              Mirzo Ulugbek, Tashkent • Premium Location
            </span>
          </div>

          {/* Price Badge */}
          <div className="bg-gradient-gold rounded-lg p-4 mb-8 max-w-sm animate-scale-in">
            <p className="text-white text-sm font-medium">{t("pricing.startingFrom")}</p>
            <p className="text-white text-3xl font-bold">$71,500</p>
            <p className="text-white/80 text-sm">1-3 {t("pricing.bedroom")} {t("contact.form.interest")}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="hero" size="xl" onClick={() => setIsEnquiryOpen(true)}>
              {t("hero.enquireNow")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="premium" size="xl" className="border-white text-white hover:bg-white hover:text-foreground">
              {t("contact.quickActions.bookVisit")}
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">15 {t("location.minutes")}</p>
              <p className="text-white/80">{t("location.places.airport")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">10 {t("location.minutes")}</p>
              <p className="text-white/80">{t("location.places.metro")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">50+</p>
              <p className="text-white/80">{t("amenities.title")}</p>
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
    
    <EnquiryPopup 
      isOpen={isEnquiryOpen}
      onClose={() => setIsEnquiryOpen(false)}
    />
  </>
  );
};

export default HeroSection;