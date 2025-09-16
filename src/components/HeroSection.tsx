import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import EnquiryPopup from "./EnquiryPopup";
import heroVeranda from "@/assets/hero-veranda.jpg";
import verdana2 from "@/assets/verdana2.webp";
import verdana3 from "@/assets/verdana3.webp";
import verdana4 from "@/assets/verdana4.webp";
import verdana5 from "@/assets/verdana5.webp";
import verdana6 from "@/assets/verdana6.webp";
import verdana7 from "@/assets/verdana7.webp";
import verdana8 from "@/assets/veranda8.webp";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const carouselImages = [
    heroVeranda,
    verdana2,
    verdana3,
    verdana5,
    verdana6,
    verdana7,
    verdana8
  ];
  
  return (
    <>
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel 
            images={carouselImages}
            showDots={true}
            autoplay={true}
            className="w-full h-full"
          />
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