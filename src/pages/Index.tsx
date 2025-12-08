import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import BookingForm from "@/components/BookingForm";
// import YClientsBooking from "@/components/YClientsBooking"; // временно отключено
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import SEOHead from "@/components/SEOHead";
import CookieConsent from "@/components/CookieConsent";
import { VERSION } from "@/lib/version";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <SEOHead />
      <PerformanceMonitor />
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <Gallery />
        <Testimonials />
        <Benefits />
        {/* <YClientsBooking /> временно отключено */}
        <BookingForm />
        <Features />
        <ContactSection />
      </main>
      
      <footer className="bg-secondary text-secondary-foreground py-12 animate-fade-in" style={{
      animationDelay: '0.5s'
    }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Логотип и описание */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <img 
                  src="/LOGO.png" 
                  alt="СК Победа" 
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-bold text-secondary-foreground">СК Победа</span>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                Ваш спортивный клуб рядом с домом — здоровый образ жизни стал ближе!
              </p>
            </div>

            {/* Полезные ссылки */}
            <div className="text-center">
              <h4 className="font-semibold text-secondary-foreground mb-4">Полезные ссылки</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-secondary-foreground/70 hover:text-fitness-primary transition-colors duration-300 text-sm hover:underline underline-offset-4">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-secondary-foreground/70 hover:text-fitness-primary transition-colors duration-300 text-sm hover:underline underline-offset-4">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-foreground/70 hover:text-fitness-primary transition-colors duration-300 text-sm hover:underline underline-offset-4">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-secondary-foreground/70 hover:text-fitness-primary transition-colors duration-300 text-sm hover:underline underline-offset-4">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>

            {/* Социальные сети */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-secondary-foreground mb-4">Мы в соцсетях</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a href="https://vk.com/pobeda_sport" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-fitness-primary hover:scale-110 transition-all duration-300 group">
                  <span className="text-secondary-foreground group-hover:text-white text-sm font-bold">ВК</span>
                </a>
                <a href="https://t.me/pobeda_sport" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-fitness-primary hover:scale-110 transition-all duration-300 group">
                  <span className="text-secondary-foreground group-hover:text-white text-sm font-bold">TG</span>
                </a>
              </div>
              <p className="text-secondary-foreground/70 text-xs">
                Следите за новостями и акциями
              </p>
            </div>
          </div>

          {/* Разделительная линия */}
          <div className="border-t border-secondary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-secondary-foreground/60">
                  © 2025 СК Победа. Все права защищены.
                </p>
                <p className="text-xs text-secondary-foreground/40 mt-1">
                  Версия {VERSION}
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
                <a href="/terms" className="text-secondary-foreground/60 hover:text-fitness-primary transition-colors duration-300 hover:underline underline-offset-4">
                  Пользовательское соглашение
                </a>
                <a href="/privacy" className="text-secondary-foreground/60 hover:text-fitness-primary transition-colors duration-300 hover:underline underline-offset-4">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Баннер согласия на обработку персональных данных */}
      <CookieConsent />
    </div>;
};
export default Index;