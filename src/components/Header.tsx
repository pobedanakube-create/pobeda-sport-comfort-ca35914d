import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-fitness-secondary font-bold text-sm">П</span>
            </div>
            <span className="text-xl font-bold text-foreground">СК Победа</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about-club" className="text-foreground hover:text-primary transition-colors">О клубе</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#trainers" className="text-foreground hover:text-primary transition-colors">Тренеры</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;