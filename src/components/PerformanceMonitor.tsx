import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Performance optimization: Preload critical images
    const criticalImages = [
      '/assets/hero-gym.jpg',
      '/assets/gym-interior.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    // Optimize touch events for mobile
    const optimizeTouch = { passive: true };
    document.addEventListener('touchstart', () => {}, optimizeTouch);
    document.addEventListener('touchmove', () => {}, optimizeTouch);

    return () => {
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;