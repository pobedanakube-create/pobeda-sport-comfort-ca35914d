import { ExternalLink, Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const Testimonials = () => {
  const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/org/pobeda/178117238176/reviews/";
  const YANDEX_ORG_URL = "https://yandex.ru/maps/org/pobeda/178117238176/";

  // Реальные отзывы с Яндекс Карт
  const reviews = [
    {
      name: "Екатерина Веселова",
      image: client1,
      rating: 5,
      text: "Приятный администратор, красивое, комфортное место ожидания. Дети очень любят тренера. Разные упражнения на группы мышц, приглашают детей на соревнования. Ходим год — дочка ходит с удовольствием!",
      date: "Январь 2025",
      source: "Яндекс Карты"
    },
    {
      name: "Татьяна Рябова",
      image: client2,
      rating: 5,
      text: "Недавно начали ходить на женский фитнес к тренеру Ольге Чугуновой — я в полном восторге! Всё прошло просто замечательно. Поначалу было много переживаний, но опасения оказались напрасны.",
      date: "Май 2025",
      source: "Яндекс Карты"
    },
    {
      name: "Ольга Каширина",
      image: client3,
      rating: 5,
      text: "Сын ходит в клуб 3 года. Огромная благодарность тренеру Виктору Абрашкину за воспитание смелого, сильного, выносливого мальчугана. Ребенок вешает на шею медали вместо залипания в гаджетах!",
      date: "Май 2025",
      source: "Яндекс Карты"
    },
    {
      name: "Ольга Кармазина",
      image: client4,
      rating: 5,
      text: "Дочь занимается в цирковой студии у Ольги. Тренер обращает внимание на способности каждого ребенка индивидуально, предложила попробовать перенести занятия в группу посильнее.",
      date: "Апрель 2024",
      source: "Яндекс Карты"
    },
    {
      name: "Эмма Туманян",
      image: client1,
      rating: 5,
      text: "Замечательный клуб с грамотной командой! Ребенок занимается со дня открытия. Тренер Виктор Абрашкин уделяет внимание каждому спортсмену. Появилась настоящая команда друзей и желание побеждать!",
      date: "Май 2025",
      source: "Яндекс Карты"
    }
  ];

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

        {/* Блок с рейтингом Яндекс */}
        <a 
          href={YANDEX_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 mb-10 p-4 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 max-w-md mx-auto group"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-3xl font-bold text-foreground">5.0</span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-accent text-accent" />
            ))}
          </div>
          <div className="text-left">
            <span className="text-sm text-muted-foreground block">на Яндекс Картах</span>
            <span className="text-xs text-primary group-hover:underline">Перейти →</span>
          </div>
        </a>

        {/* Карточки отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reviews.map((review, index) => (
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
              
              <p className="text-muted-foreground leading-relaxed mb-3">"{review.text}"</p>
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground/70">
                <MapPin size={12} />
                <span>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.open(YANDEX_REVIEWS_URL, '_blank')}
            >
              <Star className="w-4 h-4 mr-2 fill-white" />
              Читать все отзывы
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              onClick={() => window.open(YANDEX_ORG_URL, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Открыть на Яндекс Картах
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Оставьте свой отзыв — нам важно ваше мнение! 💪
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
