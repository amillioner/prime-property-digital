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