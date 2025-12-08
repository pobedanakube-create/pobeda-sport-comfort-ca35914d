import { Button } from "@/components/ui/button";
import { Menu, X, Info, Dumbbell, Images, Phone } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-fitness-secondary via-fitness-secondary to-fitness-secondary/95 backdrop-blur-md border-b-2 border-primary/30 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img 
              src="/LOGO.png" 
              alt="СК Победа" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">
              СК Победа
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => scrollToSection('about-club')} 
              className="group relative px-4 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Градиентный фон при наведении */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-300 rounded-xl"></span>
              {/* Светящаяся рамка */}
              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(185,28,28,0.3)] transition-all duration-300"></span>
              {/* Контент */}
              <span className="relative z-10 flex items-center gap-2 text-white/80 group-hover:text-white font-medium">
                <Info size={16} className="text-primary/70 group-hover:text-accent transition-colors duration-300" />
                О клубе
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('services')} 
              className="group relative px-4 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-300 rounded-xl"></span>
              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(185,28,28,0.3)] transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2 text-white/80 group-hover:text-white font-medium">
                <Dumbbell size={16} className="text-primary/70 group-hover:text-accent transition-colors duration-300" />
                Услуги
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="group relative px-4 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-300 rounded-xl"></span>
              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(185,28,28,0.3)] transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2 text-white/80 group-hover:text-white font-medium">
                <Images size={16} className="text-primary/70 group-hover:text-accent transition-colors duration-300" />
                Галерея
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="group relative px-4 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-300 rounded-xl"></span>
              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(185,28,28,0.3)] transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2 text-white/80 group-hover:text-white font-medium">
                <Phone size={16} className="text-primary/70 group-hover:text-accent transition-colors duration-300" />
                Контакты
              </span>
            </button>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-6 py-2 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 border border-white/20"
              onClick={() => scrollToSection('booking')}
            >
              🎁 Получи скидку
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-accent transition-colors rounded-lg hover:bg-white/10"
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-fitness-secondary to-fitness-secondary/98 backdrop-blur-md border-b-2 border-primary/30 shadow-xl shadow-primary/20 animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-3">
              <button 
                onClick={() => scrollToSection('about-club')} 
                className="group flex w-full items-center gap-3 py-3 px-4 text-white/90 hover:text-white rounded-xl transition-all duration-300 font-medium bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/10 border border-white/10 hover:border-primary/40"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Info size={16} className="text-accent" />
                </span>
                О клубе
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="group flex w-full items-center gap-3 py-3 px-4 text-white/90 hover:text-white rounded-xl transition-all duration-300 font-medium bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/10 border border-white/10 hover:border-primary/40"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Dumbbell size={16} className="text-accent" />
                </span>
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="group flex w-full items-center gap-3 py-3 px-4 text-white/90 hover:text-white rounded-xl transition-all duration-300 font-medium bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/10 border border-white/10 hover:border-primary/40"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Images size={16} className="text-accent" />
                </span>
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group flex w-full items-center gap-3 py-3 px-4 text-white/90 hover:text-white rounded-xl transition-all duration-300 font-medium bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/10 border border-white/10 hover:border-primary/40"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone size={16} className="text-accent" />
                </span>
                Контакты
              </button>
              <div className="pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300" 
                  onClick={() => scrollToSection('booking')}
                >
                  🎁 Получи скидку на первую тренировку
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