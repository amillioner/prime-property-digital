import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { X, Phone, Calendar, DollarSign, CheckCircle, Shield } from "lucide-react";

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });
      onClose();
      setFormData({ name: "", phone: "", email: "", consent: false });
    }, 2000);
  };

  const promises = [
    {
      icon: Phone,
      title: t("enquiry.instantCallback"),
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: t("enquiry.freeSiteVisit"),
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: t("enquiry.unmatchedPrice"),
      color: "text-primary"
    }
  ];

  const infoSections = [
    { title: t("enquiry.availableUnits"), icon: CheckCircle },
    { title: t("enquiry.paymentPlan"), icon: DollarSign },
    { title: t("enquiry.floorPlans"), icon: Shield }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Promises */}
          <div className="bg-gradient-to-br from-muted/50 to-muted/80 p-8 space-y-8">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-primary">
                  {t("enquiry.title")}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              <div className="bg-primary text-white px-6 py-3 rounded-lg text-center font-bold">
                {t("enquiry.wePromise")}
              </div>

              {promises.map((promise) => {
                const IconComponent = promise.icon;
                return (
                  <div key={promise.title} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${promise.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        {promise.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("enquiry.form.name")}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("enquiry.form.mobileNumber")}</Label>
                  <div className="flex">
                    <Select defaultValue="+998">
                      <SelectTrigger className="w-20 rounded-r-none">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+998">🇺🇿 +998</SelectItem>
                        <SelectItem value="+971">🇦🇪 +971</SelectItem>
                        <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("enquiry.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground">
                    {t("enquiry.form.consent")}
                  </Label>
                </div>

                <Button
                  type="submit"
                  variant="luxury"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : t("enquiry.form.submit")}
                </Button>
              </div>
            </form>

            {/* Info Section */}
            <div className="mt-8 p-6 border-2 border-primary/20 rounded-lg">
              <h3 className="text-lg font-bold text-center mb-4 text-primary">
                {t("enquiry.getInfo")}
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {infoSections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={section.title} className="space-y-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-foreground">{section.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryPopup;