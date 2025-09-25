import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-fitness-secondary font-bold text-sm">П</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">СК Победа</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about-club')} 
              className="text-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              О клубе
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Галерея
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Контакты
            </button>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-fitness-accent/30 text-fitness-primary hover:bg-fitness-accent/10 hover:border-fitness-accent transition-all duration-300"
              onClick={() => scrollToSection('online-booking')}
            >
              Записаться онлайн
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-accent hover:bg-primary/90 text-fitness-secondary hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('booking')}
            >
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about-club')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                О клубе
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <div className="space-y-3 mt-4">
                <Button 
                  variant="outline"
                  className="w-full border-fitness-accent/30 text-fitness-primary hover:bg-fitness-accent/10" 
                  onClick={() => scrollToSection('online-booking')}
                >
                  Записаться онлайн
                </Button>
                <Button 
                  className="w-full bg-gradient-accent hover:bg-primary/90 text-fitness-secondary" 
                  onClick={() => scrollToSection('booking')}
                >
                  Записаться на тренировку
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;