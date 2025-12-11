import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CONSENT_KEY = "sk_pobeda_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Небольшая задержка для плавного появления
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      accepted: true,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const declineConsent = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      accepted: false,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-fitness-secondary/98 backdrop-blur-md rounded-2xl shadow-2xl border border-primary/20 p-6 relative">
          {/* Кнопка закрытия */}
          <button
            onClick={declineConsent}
            className="absolute top-3 right-3 p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Иконка */}
            <div className="hidden sm:flex w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl items-center justify-center flex-shrink-0">
              <span className="text-2xl">🔒</span>
            </div>

            {/* Текст */}
            <div className="flex-1 pr-6 md:pr-0">
              <h3 className="text-white font-bold text-lg mb-2">
                Защита персональных данных
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Мы используем файлы cookie и обрабатываем персональные данные в соответствии с{" "}
                <a 
                  href="/Политика конфиденциальности.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary underline underline-offset-2 transition-colors"
                >
                  Политикой конфиденциальности
                </a>
                {" "}и Федеральным законом №152-ФЗ «О персональных данных». Продолжая использовать сайт, вы даёте согласие на обработку ваших персональных данных.
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto flex-shrink-0">
              <Button
                onClick={acceptConsent}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Принять
              </Button>
              <Button
                onClick={declineConsent}
                className="bg-white/20 border-2 border-white/50 text-white hover:bg-white/30 font-medium px-6 py-2 rounded-full transition-all duration-300"
              >
                Отклонить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;


