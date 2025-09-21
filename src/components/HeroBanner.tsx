import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroBanner = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="hero-banner min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--fitness-overlay)), hsl(var(--fitness-overlay))), url(${heroImage})`
      }}
    >
      <div className="hero-content max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          СК Победа — ваш спортивный клуб рядом с домом
        </h1>
        
        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Уютный спортивный клуб в спальном районе с современным оборудованием, 
          профессиональными тренерами и доступными ценами
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="hero-button w-full sm:w-auto bg-gradient-accent hover:bg-primary/90 text-fitness-secondary hover:scale-105 transition-all duration-300"
            size="lg"
            onClick={scrollToBooking}
          >
            Записаться на тренировку
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
            onClick={() => window.open('tel:+79105298282')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Позвонить сейчас
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/30 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;