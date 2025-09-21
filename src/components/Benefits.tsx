import { MapPin, Clock, Users, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Удобное расположение",
      description: "Рядом с домом в спальном районе — экономьте время на дорогу и тренируйтесь чаще"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Работаем с раннего утра до позднего вечера — выбирайте удобное время"
    },
    {
      icon: Users,
      title: "Профессиональные тренеры",
      description: "Опытные специалисты помогут достичь ваших фитнес-целей безопасно и эффективно"
    },
    {
      icon: Award,
      title: "Доступные цены",
      description: "Качественные услуги по разумной стоимости — фитнес доступен каждому"
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">{/* Responsive padding */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-primary mb-4">{/* Responsive heading */}
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему тысячи клиентов выбирают СК Победа для своих тренировок
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">{/* Better responsive grid */}
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mb-6 mx-auto w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <IconComponent 
                    size={32} 
                    className="text-fitness-secondary group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 rounded-full bg-fitness-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-fitness-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description}
                </p>
                
                <div className="mt-4 w-12 h-0.5 bg-gradient-accent mx-auto opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;