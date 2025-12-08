import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const YANDEX_MAP_URL = "https://yandex.ru/maps/org/pobeda/178117238176/?indoorLevel=1&ll=36.244812%2C54.584589&z=16.71";
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-secondary/5 to-background animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fitness-primary">
            Найдите нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Приходите к нам в спортивный клуб или свяжитесь любым удобным способом
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Яндекс Карта */}
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="h-[400px] lg:h-[500px] overflow-hidden border-border bg-card shadow-lg">
              <CardContent className="p-0 h-full">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=36.244812%2C54.584589&z=16&pt=36.244812%2C54.584589%2Cpm2rdm&l=map"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  allowFullScreen
                  title="СК Победа на Яндекс Картах"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </CardContent>
            </Card>
            
            {/* Ссылка на Яндекс Карты */}
            <div className="mt-4">
              <Button 
                variant="outline"
                className="w-full border-red-500 text-red-600 hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300"
                size="lg"
                onClick={() => window.open(YANDEX_MAP_URL, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть на Яндекс Картах
              </Button>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="h-fit border-border bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-8">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                      <MapPin size={20} className="text-fitness-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">Адрес</p>
                      <p className="text-muted-foreground">Калуга, Ул. Кибальчича, д.32</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                      <Phone size={20} className="text-fitness-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">Телефон</p>
                      <a 
                        href="tel:+79105298282" 
                        className="text-muted-foreground hover:text-fitness-primary transition-colors duration-300 underline-offset-4 hover:underline"
                      >
                        +7 910 529 82 82
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                      <Clock size={20} className="text-fitness-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 06:00 — 23:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                      <Mail size={20} className="text-fitness-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">Email</p>
                      <a 
                        href="mailto:pobedanakube@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-fitness-primary transition-colors duration-300 underline-offset-4 hover:underline"
                      >
                        pobedanakube@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-accent hover:bg-primary/90 text-fitness-secondary hover:scale-105 transition-all duration-300" 
                      size="lg"
                      onClick={() => window.open('tel:+79105298282')}
                    >
                      Позвонить сейчас
                    </Button>
                    
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
