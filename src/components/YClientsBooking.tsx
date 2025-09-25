import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

const YClientsBooking = () => {
  return (
    <section id="online-booking" className="py-16 px-6 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-primary mb-4">
            Онлайн-запись на тренировку
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите удобное время и запишитесь на тренировку онлайн. Простая и быстрая форма записи.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Info Section */}
          <div className="lg:col-span-5 space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-fitness-primary flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Как записаться
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-fitness-accent rounded-full flex items-center justify-center text-fitness-secondary font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Выберите услугу</h4>
                    <p className="text-sm text-muted-foreground">Подберите подходящий тип тренировки</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-fitness-accent rounded-full flex items-center justify-center text-fitness-secondary font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Выберите время</h4>
                    <p className="text-sm text-muted-foreground">Найдите свободное время в расписании</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-fitness-accent rounded-full flex items-center justify-center text-fitness-secondary font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Подтвердите запись</h4>
                    <p className="text-sm text-muted-foreground">Заполните контактные данные</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <Clock className="h-8 w-8 text-fitness-accent mx-auto" />
                    <h4 className="font-semibold text-foreground">Удобное время</h4>
                    <p className="text-sm text-muted-foreground">09:00 - 22:00</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="h-8 w-8 text-fitness-accent mx-auto" />
                    <h4 className="font-semibold text-foreground">Индивидуально</h4>
                    <p className="text-sm text-muted-foreground">Персональный подход</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* YCLIENTS Iframe Section */}
          <div className="lg:col-span-7 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-fitness-primary">
                  Форма онлайн-записи
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Выберите услугу и удобное время для посещения
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full flex justify-center bg-gradient-to-b from-card/50 to-card">
                  <iframe
                    src="https://w123456.yclients.com/"
                    width="100%"
                    height="545"
                    style={{
                      border: 'none',
                      minHeight: '545px',
                      maxWidth: '100%'
                    }}
                    title="Онлайн-запись YCLIENTS"
                    loading="lazy"
                    className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Защищенная форма записи • Данные передаются по HTTPS
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-fitness-accent/10 rounded-lg p-6 max-w-2xl mx-auto border border-fitness-accent/20">
            <h3 className="text-lg font-semibold text-fitness-primary mb-2">
              Нужна помощь с записью?
            </h3>
            <p className="text-muted-foreground mb-4">
              Наши администраторы готовы помочь вам с записью по телефону
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+74951234567" 
                className="text-fitness-accent hover:text-fitness-accent/80 font-semibold transition-colors duration-300 hover:underline underline-offset-4"
              >
                +7 (495) 123-45-67
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                Ежедневно с 09:00 до 22:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YClientsBooking;