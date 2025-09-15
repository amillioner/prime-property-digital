import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import EnquiryPopup from "./EnquiryPopup";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const navItems = [
    { label: t("navigation.home"), href: "#home" },
    { label: t("navigation.pricing"), href: "#pricing" },
    { label: t("navigation.amenities"), href: "#amenities" },
    { label: t("navigation.location"), href: "#location" },
    { label: t("navigation.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h2 className="font-bold text-xl text-foreground">Veranda</h2>
              <p className="text-xs text-muted-foreground -mt-1">RESIDENCES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium hover-gold"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="premium" size="sm">
              <Phone className="w-4 h-4" />
              {t("contact.info.callNow")}
            </Button>
            <Button variant="luxury" size="sm" onClick={() => setIsEnquiryOpen(true)}>
              {t("hero.enquireNow")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <LanguageSwitcher />
                <Button variant="premium" size="sm" className="w-full">
                  <Phone className="w-4 h-4" />
                  {t("contact.info.callNow")}
                </Button>
                <Button variant="luxury" size="sm" className="w-full" onClick={() => setIsEnquiryOpen(true)}>
                  {t("hero.enquireNow")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </nav>
  );
};

export default Navigation;