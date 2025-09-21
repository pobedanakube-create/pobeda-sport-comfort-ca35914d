import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({
  title = "СК Победа - Спортивный клуб рядом с домом | Калуга",
  description = "Уютный спортивный клуб в спальном районе Калуги с современным оборудованием, профессиональными тренерами и доступными ценами. Записывайтесь на первую бесплатную тренировку!",
  keywords = "спортивный клуб калуга, фитнес центр, тренажерный зал, персональные тренировки, групповые занятия, СК Победа",
  image = "/assets/hero-gym.jpg",
  url = "https://pobeda-sport.ru"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'СК Победа');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'СК Победа', true);
    updateMetaTag('og:locale', 'ru_RU', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured data for gym/fitness center
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Gym",
      "name": "СК Победа",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ул. Кибальчича, д.32",
        "addressLocality": "Калуга",
        "addressCountry": "RU"
      },
      "telephone": "+7 910 529 82 82",
      "email": "pobedanakube@gmail.com",
      "url": url,
      "image": image,
      "openingHours": "Mo-Su 06:00-23:00",
      "priceRange": "$$",
      "hasMap": "https://maps.google.com/?q=Калуга, Ул. Кибальчича, д.32"
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOHead;