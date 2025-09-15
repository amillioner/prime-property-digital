import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Download,
  Calendar,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.call"),
      info: "+998712301331",
      action: t("contact.info.callNow")
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      info: "info@verandaresidences.uz",
      action: t("contact.info.sendEmail")
    },
    {
      icon: MapPin,
      title: t("contact.info.visit"),
      info: "Mirzo Ulugbek, Tashkent, Uzbekistan",
      action: t("contact.info.getDirections")
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      info: t("contact.info.officeHours"),
      action: t("contact.info.scheduleVisit")
    }
  ];

  const quickActions = [
    {
      icon: Download,
      title: t("contact.quickActions.brochure"),
      description: t("contact.quickActions.brochureDesc"),
      action: t("contact.quickActions.download")
    },
    {
      icon: Calendar,
      title: t("contact.quickActions.visit"),
      description: t("contact.quickActions.visitDesc"),
      action: t("contact.quickActions.bookVisit")
    },
    {
      icon: MessageSquare,
      title: t("contact.quickActions.chat"),
      description: t("contact.quickActions.chatDesc"),
      action: t("contact.quickActions.startChat")
    }
  ];

  return (
    <section id="contact" className="py-section bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                {t("contact.form.title")}
              </CardTitle>
              <p className="text-muted-foreground">
                {t("contact.form.subtitle")}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" type="tel" placeholder="+971 50 123 4567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Property Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select apartment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-bedroom">1 Bedroom Apartment</SelectItem>
                      <SelectItem value="2-bedroom">2 Bedroom Apartment</SelectItem>
                      <SelectItem value="3-bedroom">3 Bedroom Penthouse</SelectItem>
                      <SelectItem value="multiple">Multiple Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-1.5m">AED 1M - 1.5M</SelectItem>
                      <SelectItem value="1.5-2m">AED 1.5M - 2M</SelectItem>
                      <SelectItem value="2-3m">AED 2M - 3M</SelectItem>
                      <SelectItem value="3m+">AED 3M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.title} className="p-4 hover-lift shadow-card">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{item.info}</p>
                          <Button variant="link" size="sm" className="p-0 h-auto text-primary">
                            {item.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
              {quickActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <Card key={action.title} className="p-4 hover-lift shadow-card cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{action.title}</h4>
                          <p className="text-muted-foreground text-sm">{action.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          {action.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-gold text-white p-6">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">{t("contact.callback.title")}</h3>
                <p className="mb-4 text-white/90">
                  {t("contact.callback.description")}
                </p>
                <Button variant="premium" className="border-white text-white hover:bg-white hover:text-primary">
                  {t("contact.callback.request")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
