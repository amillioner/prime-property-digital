import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Crown
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  const quickLinks = [
    { label: t("navigation.home"), href: "#home" },
    { label: t("navigation.pricing"), href: "#pricing" },
    { label: t("navigation.amenities"), href: "#amenities" },
    { label: t("navigation.location"), href: "#location" },
    { label: t("navigation.contact"), href: "#contact" }
  ];

  const services = [
    t("footer.services.sales"),
    t("footer.services.consultation"),
    t("footer.services.visits"),
    t("footer.services.payment"),
    t("footer.services.support"),
    t("footer.services.management")
  ];

  const legalLinks = [
    { label: t("footer.privacy"), href: "#" },
    { label: t("footer.terms"), href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Verdana</h3>
                <p className="text-sm text-white/70 -mt-1">RESIDENCES</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/90">+998712301331</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/90">info@verdanaresidences.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/90">{t("common.address")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-primary transition-colors duration-300 hover-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-3 text-white/80">
              {services.map((service, index) => (
                <li key={index}>• {service}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t("footer.stayConnected")}</h4>
            <p className="text-white/80">
              {t("footer.newsletter")}
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary"
              />
              <Button variant="luxury" size="sm" className="w-full">
                {t("footer.subscribe")}
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/80 mb-4">{t("footer.followUs")}</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-gold transition-all duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 Verdana Residences. {t("footer.rights")}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-primary text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-white/60 text-xs">
              RERA Registration: <span className="text-primary">1234567890</span> | 
              Developer License: <span className="text-primary">DLD-987654321</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;