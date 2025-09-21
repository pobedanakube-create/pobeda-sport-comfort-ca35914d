import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Близость к дому",
      description: "Удобное расположение в спальном районе — не нужно тратить время на дорогу",
      icon: "🏠"
    },
    {
      title: "Доступные цены",
      description: "Качественные услуги по справедливым ценам без переплат за лишние опции",
      icon: "💰"
    },
    {
      title: "Профессиональные тренеры",
      description: "Опытные специалисты помогут достичь ваших фитнес-целей безопасно и эффективно",
      icon: "👨‍🏫"
    },
    {
      title: "Современное оборудование",
      description: "Качественные тренажеры для тренировок всех уровней — от новичков до профи",
      icon: "🏋️"
    },
    {
      title: "Дружелюбная атмосфера",
      description: "Уютная обстановка без лишних сложностей, где ценят каждого клиента",
      icon: "😊"
    },
    {
      title: "Индивидуальный подход",
      description: "Групповые и персональные тренировки с учетом ваших потребностей и целей",
      icon: "🎯"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">{/* Responsive padding */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{/* Responsive heading */}
            Почему выбирают СК Победа?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создали пространство, где спорт становится частью вашей повседневной жизни
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{/* Better responsive grid */}
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;