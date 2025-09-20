import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <Gallery />
        <Features />
        <ContactSection />
      </main>
      
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-fitness-secondary font-bold text-xs">П</span>
            </div>
            <span className="text-lg font-semibold">СК Победа</span>
          </div>
          <p className="text-secondary-foreground/80">
            Ваш спортивный клуб рядом с домом — здоровый образ жизни стал ближе!
          </p>
          <p className="text-sm text-secondary-foreground/60 mt-4">
            © 2024 СК Победа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
