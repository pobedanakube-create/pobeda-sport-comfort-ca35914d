import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Кардио зона" },
    { src: gallery2, alt: "Силовая зона" },
    { src: gallery3, alt: "Групповые занятия" },
    { src: gallery4, alt: "Персональные тренировки" },
    { src: gallery5, alt: "Раздевалка" },
    { src: gallery6, alt: "Ресепшн" },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">{/* Responsive padding */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-primary mb-4">{/* Responsive heading */}
            Галерея
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Посмотрите на наши современные залы и оборудование
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{/* Better responsive grid */}
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  loading="lazy"
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-fitness-accent transition-colors duration-200 z-10"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;