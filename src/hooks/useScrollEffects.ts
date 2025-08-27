'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Scrollbar: any;
    isMobile: () => boolean;
    $: any;
  }
}

export const useScrollEffects = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fonction pour vérifier si c'est un mobile
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    // Ajouter la fonction à window pour compatibilité
    window.isMobile = isMobile;

    const initScrollEffects = () => {
      // Configuration GSAP si disponible
      if (window.gsap) {
        window.gsap.defaults({ overwrite: "auto" });
        if (window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }
        window.gsap.config({ nullTargetWarn: false });
      }

      const sliders = [
        '.showcase-gallery',
        '.showcase-lists'
      ];

      const body = document.body;
      let hasSlider = false;

      sliders.forEach(slider => {
        if (document.querySelector(slider)) {
          hasSlider = true;
          return false;
        }
      });

      if (hasSlider) {
        body.classList.add('has-slider');
      } else {
        body.classList.remove('has-slider');
      }

      // Activation du three.js app après délai
      setTimeout(() => {
        const threeapp = document.getElementById("app");
        if (threeapp) {
          threeapp.className += " active";
          document.body.appendChild(threeapp);
        }
      }, 1500);

      // Activation du slider three.js si présent
      if (document.getElementById('showcase-slider')) {
        setTimeout(() => {
          const threeSlider = document.getElementById("canvas-slider");
          if (threeSlider) {
            threeSlider.className += " active";
            document.body.appendChild(threeSlider);
          }
        }, 1500);
      }

      // Configuration des pages projet
      if (!body.classList.contains("project-nav-text")) {
        if (document.getElementById('project-nav')) {
          const mainContent = document.getElementById('main-content');
          const mainPageContent = document.getElementById('main-page-content');
          if (mainContent) mainContent.classList.add('solid-color');
          if (mainPageContent) mainPageContent.classList.add('project-page');
        }
      }

      // Configuration des pages portfolio
      if (document.querySelector('.portfolio')) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) mainContent.classList.add('portfolio-page');
      }

      // Configuration du smooth scroll
      let enableSmoothScrollMobile = true;
      if (isMobile()) {
        if (!enableSmoothScrollMobile) {
          document.body.classList.remove("smooth-scroll");
        }
      }

      // Initialisation du smooth scrollbar si disponible
      if (document.body.classList.contains("smooth-scroll") && window.Scrollbar) {
        const ScrollArea = document.querySelector('#content-scroll');
        
        if (ScrollArea && !isMobile()) {
          try {
            // Configuration du scrollbar
            const scrollbar = window.Scrollbar.init(ScrollArea, {
              damping: 0.1,
              renderByPixel: true,
              continuousScrolling: true,
              syncCallbacks: true,
            });

            // Configuration GSAP ScrollTrigger avec le scrollbar
            if (window.ScrollTrigger) {
              window.ScrollTrigger.scrollerProxy("#content-scroll", {
                scrollTop(value?: number) {
                  if (arguments.length && value !== undefined) {
                    scrollbar.scrollTop = value;
                  }
                  return scrollbar.scrollTop;
                },
                getBoundingClientRect() {
                  return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                  };
                }
              });

              scrollbar.addListener(window.ScrollTrigger.update);
              window.ScrollTrigger.addEventListener("refresh", () => scrollbar.update());
            }
          } catch (error) {
            console.warn('Scrollbar initialization failed:', error);
          }
        }
      }

      // Animation d'entrée
      if (window.gsap) {
        window.gsap.set('.has-animation', { opacity: 0, y: 50 });
        window.gsap.to('.has-animation', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5
        });
      }
    };

    // Attendre que les scripts externes soient chargés
    const checkAndInit = () => {
      if (document.readyState === 'complete') {
        initScrollEffects();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();

    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);
};

// Export de la fonction pour compatibilité avec les anciens scripts
export const ScrollEffects = () => {
  useScrollEffects();
};
