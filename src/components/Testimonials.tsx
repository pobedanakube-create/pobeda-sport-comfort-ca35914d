import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/org/pobeda/178117238176/reviews/";

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши клиенты о тренировках в СК Победа
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Блок с рейтингом */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl font-bold text-foreground">5.0</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-muted-foreground">на Яндекс Картах</span>
        </div>

        {/* Виджет Яндекс Карт с отзывами */}
        <div className="flex justify-center mb-8">
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '560px', 
              height: '800px', 
              overflow: 'hidden', 
              position: 'relative' 
            }}
          >
            <iframe 
              style={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid #e6e6e6', 
                borderRadius: '8px', 
                boxSizing: 'border-box' 
              }}
              src="https://yandex.ru/maps-reviews-widget/178117238176?comments"
              title="Отзывы о СК Победа на Яндекс Картах"
            />
            <a 
              href="https://yandex.ru/maps/org/pobeda/178117238176/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                boxSizing: 'border-box', 
                textDecoration: 'none', 
                color: '#b3b3b3', 
                fontSize: '10px', 
                fontFamily: 'YS Text, sans-serif', 
                padding: '0 16px', 
                position: 'absolute', 
                bottom: '8px', 
                width: '100%', 
                textAlign: 'center', 
                left: 0, 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                display: 'block', 
                maxHeight: '14px', 
                whiteSpace: 'nowrap' 
              }}
            >
              Победа на карте Калуги — Яндекс Карты
            </a>
          </div>
        </div>

        {/* Кнопка для перехода на все отзывы */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open(YANDEX_REVIEWS_URL, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Смотреть все отзывы на Яндекс Картах
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Оставьте свой отзыв — нам важно ваше мнение! 💪
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
