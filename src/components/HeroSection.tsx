import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import EnquiryPopup from "./EnquiryPopup";
import veranda1 from "@/assets/veranda1.webp";
import veranda2 from "@/assets/veranda2.webp";
import veranda3 from "@/assets/veranda3.webp";
import veranda4 from "@/assets/veranda4.webp";
import veranda5 from "@/assets/veranda5.webp";
import veranda6 from "@/assets/veranda6.webp";
import veranda7 from "@/assets/veranda7.webp";
import veranda8 from "@/assets/veranda8.webp";
import heroVeranda from "@/assets/hero-veranda.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import verandaMain from "@/assets/veranda-main.webp";
import amenityPool from "@/assets/amenity-pool.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const carouselImages = [
      heroVeranda,
      veranda2,
      veranda3,
      veranda5,
      veranda6,
      veranda7,
      veranda8
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