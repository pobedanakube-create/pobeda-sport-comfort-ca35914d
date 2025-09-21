import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [36.2572, 54.5293], // Калуга координаты
      zoom: 14,
    });

    // Добавить маркер спортивного клуба
    new mapboxgl.Marker({ color: '#f97316' })
      .setLngLat([36.2572, 54.5293])
      .setPopup(new mapboxgl.Popup().setHTML('<div><strong>СК Победа</strong><br>Ул. Кибальчича, д.32</div>'))
      .addTo(map.current);

    // Добавить навигационные элементы
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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
          {/* Карта */}
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="h-[400px] lg:h-[500px] overflow-hidden border-border bg-card shadow-lg">
              <CardContent className="p-0 h-full">
                {!mapboxToken ? (
                  <div className="h-full flex flex-col items-center justify-center p-6 bg-muted/20">
                    <MapPin className="w-12 h-12 text-fitness-primary mb-4" />
                    <p className="text-center text-muted-foreground mb-4">
                      Для отображения интерактивной карты введите ваш Mapbox токен
                    </p>
                    <input
                      type="text"
                      placeholder="Введите Mapbox Public Token"
                      className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
                      onChange={(e) => setMapboxToken(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground text-center">
                      Получите токен на <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-fitness-primary hover:underline">mapbox.com</a>
                    </p>
                  </div>
                ) : (
                  <div ref={mapContainer} className="w-full h-full" />
                )}
              </CardContent>
            </Card>
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
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300" 
                      size="lg"
                      onClick={() => window.open('https://wa.me/79105298282', '_blank')}
                    >
                      Написать в WhatsApp
                    </Button>
                  </div>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Первая консультация — бесплатно!
                    </p>
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