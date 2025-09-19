import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const HeroBanner = () => {
  return (
    <section 
      className="hero-banner"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--fitness-overlay)), hsl(var(--fitness-overlay))), url(${heroImage})`
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          СК Победа — ваш спортивный клуб рядом с домом
        </h1>
        
        <p className="hero-subtitle">
          Уютный спортивный клуб в спальном районе с современным оборудованием, 
          профессиональными тренерами и доступными ценами
        </p>
        
        <Button 
          className="hero-button"
          size="lg"
        >
          Записаться на тренировку
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default HeroBanner;