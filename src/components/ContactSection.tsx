import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ContactSection = () => {
  return <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Готовы начать тренировки?
          </h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами для записи на первую тренировку
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Адрес</p>
                  <p className="text-muted-foreground">Калуга, Ул. Кибальчича, д.32</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Телефон</p>
                  <p className="text-muted-foreground">+7 910 529 82 82</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  🕒
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Режим работы</p>
                  <p className="text-muted-foreground">Пн-Вс: 06:00 — 23:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Email</p>
                  <p className="text-muted-foreground">pobedanakube@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Запись на тренировку</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Позвоните нам или приходите лично — мы всегда рады новым клиентам и готовы 
                помочь подобрать оптимальную программу тренировок.
              </p>
              
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Позвонить сейчас
                </Button>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg">
                  Написать в WhatsApp
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Первая консультация — бесплатно!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;