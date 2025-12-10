import { useState, useEffect } from "react";
import { ExternalLink, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const Testimonials = () => {
  const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/org/pobeda/178117238176/reviews/";
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Статические отзывы как fallback
  const staticReviews = [
    {
      name: "Александр К.",
      image: client1,
      rating: 5,
      text: "Отличный зал! Хожу уже полгода, результаты превзошли все ожидания. Тренеры профессионалы своего дела.",
      date: "Ноябрь 2025"
    },
    {
      name: "Мария С.",
      image: client2,
      rating: 5,
      text: "Наконец-то нашла свой зал! Атмосфера дружелюбная, оборудование новое. Рекомендую!",
      date: "Октябрь 2025"
    },
    {
      name: "Дмитрий В.",
      image: client3,
      rating: 5,
      text: "Занимаюсь с персональным тренером. За 3 месяца отличные результаты!",
      date: "Сентябрь 2025"
    },
    {
      name: "Елена П.",
      image: client4,
      rating: 5,
      text: "Прекрасное место для тренировок! Чисто, современно, удобное расположение.",
      date: "Август 2025"
    }
  ];

  useEffect(() => {
    // Проверяем загрузку iframe через таймаут
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setIframeError(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [iframeLoaded]);

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

        {/* Виджет Яндекс Карт или статические отзывы */}
        {!iframeError ? (
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
                referrerPolicy="no-referrer-when-downgrade"
                allow="geolocation"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
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
        ) : (
          /* Статические отзывы как fallback */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
            {staticReviews.map((review, index) => (
              <div 
                key={index}
                className="group relative bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 hover:shadow-hero transition-all duration-500"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-primary" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={review.name}
              loading="lazy"
                      decoding="async"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
          </div>
        </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        )}

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
