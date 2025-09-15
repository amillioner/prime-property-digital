import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Clock, 
  Plane, 
  ShoppingBag, 
  GraduationCap, 
  Building,
  Car,
  Train
} from "lucide-react";
import locationMap from "@/assets/location-map.jpg";

const LocationSection = () => {
  const { t } = useTranslation();
  const landmarks = [
    {
      icon: Plane,
      name: t("location.landmarks.airport"),
      time: "25 " + t("location.minutes"),
      color: "text-blue-500"
    },
    {
      icon: ShoppingBag,
      name: t("location.landmarks.megaPlanet"),
      time: "10 " + t("location.minutes"),
      color: "text-purple-500"
    },
    {
      icon: Building,
      name: t("location.landmarks.cityCenter"),
      time: "15 " + t("location.minutes"),
      color: "text-green-500"
    },
    {
      icon: ShoppingBag,
      name: t("location.landmarks.comprador"),
      time: "8 " + t("location.minutes"),
      color: "text-red-500"
    },
    {
      icon: Building,
      name: t("location.landmarks.businessDistrict"),
      time: "12 " + t("location.minutes"),
      color: "text-yellow-500"
    },
    {
      icon: GraduationCap,
      name: t("location.landmarks.university"),
      time: "5 " + t("location.minutes"),
      color: "text-indigo-500"
    }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: t("location.transportOptions.byCar"),
      description: t("location.transportOptions.byCarDesc")
    },
    {
      icon: Train,
      title: t("location.transportOptions.metroStation"),
      description: t("location.transportOptions.metroStationDesc")
    },
    {
      icon: MapPin,
      title: t("location.transportOptions.publicTransport"),
      description: t("location.transportOptions.publicTransportDesc")
    }
  ];

  return (
    <section id="location" className="py-section bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            {t("location.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("location.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <img
            src={locationMap}
            alt={t("location.mapAlt")}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-white font-medium">{t("location.address")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connectivity Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-heading font-bold text-foreground mb-6">
                {t("location.minutesAway")}
              </h3>
              <div className="space-y-4">
                {landmarks.map((landmark) => {
                  const IconComponent = landmark.icon;
                  return (
                    <div key={landmark.name} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${landmark.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{landmark.name}</p>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{landmark.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button variant="luxury" size="lg" className="w-full">
              {t("location.viewMap")}
            </Button>
          </div>
        </div>

        {/* Transport Options */}
        <div className="mt-16">
          <h3 className="text-heading font-bold text-foreground text-center mb-8">
            {t("location.transportationAccess")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Card key={option.title} className="p-6 text-center hover-lift shadow-card">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{option.title}</h4>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        </div>
    </section>
  );
};

export default LocationSection;