// Fonction globale ScrollEffects pour compatibilité avec les scripts du template
if (typeof window !== "undefined") {
  window.ScrollEffects = function () {
    console.log("ScrollEffects called from global script");

    // Fonction de base qui sera remplacée par le hook React
    if (typeof window.gsap !== "undefined") {
      window.gsap.defaults({ overwrite: "auto" });
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
      window.gsap.config({ nullTargetWarn: false });
    }

    // Ajouter les classes de base
    const body = document.body;
    if (
      document.querySelector(".showcase-gallery") ||
      document.querySelector(".showcase-lists")
    ) {
      body.classList.add("has-slider");
    } else {
      body.classList.remove("has-slider");
    }
  };
}

export {};
