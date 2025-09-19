import { Dumbbell, User, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Тренажерный зал",
      description: "Современное оборудование для силовых тренировок и кардио. Все необходимое для достижения ваших фитнес-целей в одном месте."
    },
    {
      icon: User,
      title: "Персональные тренировки",
      description: "Индивидуальные занятия с опытным тренером. Персональная программа тренировок, адаптированная под ваши цели и уровень подготовки."
    },
    {
      icon: Users,
      title: "Групповые занятия",
      description: "Мотивирующие групповые тренировки в дружеской атмосфере. Разнообразные программы для всех уровней подготовки."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            В СК Победа каждый найдет подходящий формат тренировок для достижения своих целей
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-hero hover:scale-105 transform"
              >
                <CardContent className="p-8 text-center space-y-6">
                  {/* Иконка */}
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent 
                        size={36} 
                        className="text-fitness-secondary group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    
                    {/* Декоративный элемент */}
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Декоративная линия */}
                  <div className="w-0 h-0.5 bg-gradient-accent mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Дополнительная информация */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-primary font-semibold">Первое посещение — бесплатно!</span> 
              Приходите на ознакомительную тренировку и почувствуйте атмосферу нашего клуба.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Без скрытых доплат</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Гибкие абонементы</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Профессиональная поддержка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;