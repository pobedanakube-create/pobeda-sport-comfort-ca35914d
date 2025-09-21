import { useEffect, useRef, useState } from "react";
import gymInterior from "@/assets/gym-interior.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about-club" 
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">{/* Container updated for better responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">{/* Improved responsive spacing */}
          {/* Левая колонка - текст */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{/* Responsive text sizing */}
                О клубе
                <span className="block w-20 h-1 bg-gradient-accent mt-4 rounded-full"></span>
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">СК Победа</strong> — это больше чем просто спортивный клуб. 
                  Это место, где создается особая атмосфера уюта и поддержки, где каждый чувствует себя 
                  как дома.
                </p>
                
                <p>
                  Наш клуб расположен в самом сердце спального района, что делает его невероятно 
                  удобным для ежедневных тренировок. Мы гордимся тем, что создали пространство, 
                  где современное оборудование сочетается с <span className="text-primary font-medium">теплой, дружелюбной атмосферой</span>.
                </p>
                
                <p>
                  Один большой многофункциональный зал оборудован всем необходимым для тренировок 
                  любого уровня. Здесь есть место как для начинающих, делающих первые шаги в мире 
                  фитнеса, так и для опытных спортсменов, стремящихся к новым достижениям.
                </p>
                
                <p className="text-primary font-medium">
                  "В СК Победа мы ценим каждого клиента и стремимся сделать ваш путь к здоровому 
                  образу жизни максимально комфортным и результативным."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4">{/* Responsive grid for features */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground">Уютная атмосфера</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground">Современное оборудование</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground">Близость к дому</span>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - фотография */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card">
                <img
                  src={gymInterior}
                  alt="Интерьер спортивного клуба СК Победа"
                  loading="lazy"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fitness-secondary/20 to-transparent"></div>
                
                {/* Декоративный элемент */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-medium text-foreground">
                      Многофункциональный зал с современным оборудованием
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Все для комфортных тренировок в одном месте
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;