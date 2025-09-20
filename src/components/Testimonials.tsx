import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      photo: client1,
      rating: 5,
      text: "Отличный клуб! Удобное расположение рядом с домом и профессиональные тренеры. За полгода занятий достигла всех своих целей."
    },
    {
      id: 2,
      name: "Дмитрий Коваленко",
      photo: client2,
      rating: 5,
      text: "Современное оборудование и дружелюбная атмосфера. Тренеры всегда готовы помочь и составить индивидуальную программу."
    },
    {
      id: 3,
      name: "Елена Смирнова",
      photo: client3,
      rating: 4,
      text: "Хожу в СК Победа уже два года. Очень нравится, что можно заниматься в любое удобное время. Цены доступные."
    },
    {
      id: 4,
      name: "Алексей Волков",
      photo: client4,
      rating: 5,
      text: "Лучший спортклуб в районе! Чистота, порядок, новое оборудование. Персональные тренировки дают отличные результаты."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? "fill-fitness-accent text-fitness-accent"
            : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-fitness-primary mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши клиенты о тренировках в СК Победа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant bg-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-fitness-accent/20">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center space-x-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;