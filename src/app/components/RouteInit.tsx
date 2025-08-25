'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    PageLoad?: () => void
    FirstLoad?: () => void
    LoadViaAjax?: () => void
  }
}

export default function RouteInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Nettoyer l'état loader potentiellement laissé par les scripts legacy
    document.body.classList.remove('show-loader')

    // Forcer la fermeture/masquage du préloader si présent
    const preloader = document.querySelector('.preloader-wrap') as HTMLElement | null
    const percentageWrapper = document.querySelector('.percentage-wrapper') as HTMLElement | null
    const percentage = document.querySelector('.percentage') as HTMLElement | null
    const preloaderIntro = document.querySelector('.preloader-intro span') as HTMLElement | null
    const trackbar = document.querySelector('.trackbar') as HTMLElement | null
    const headerContainer = document.getElementById('header-container')
    const main = document.getElementById('main')

    try {
      if (percentageWrapper) percentageWrapper.style.transform = 'translateX(0)'
      if (percentage) percentage.style.opacity = '0'
      if (preloaderIntro) preloaderIntro.style.opacity = '0'
      if (trackbar) trackbar.style.clipPath = 'inset(0% 0%)'
      if (preloader) {
        preloader.style.opacity = '0'
        preloader.style.visibility = 'hidden'
        preloader.style.transform = 'translateY(-100%)'
      }
      if (headerContainer) headerContainer.style.opacity = '1'
      if (main) main.style.opacity = '1'
      document.body.classList.add('header-visible')
    } catch {}

    // Certains scripts legacy exposent des fonctions globales d'init
    // On tente de relancer l'init principale s'il existe
    try {
      // Si la fonction PageLoad est exposée globalement, on la relance
      if (typeof window.PageLoad === 'function') window.PageLoad()
      if (typeof window.FirstLoad === 'function') {
        // Éviter de ré-attacher des handlers si déjà faits par FirstLoad
        // On n'appelle pas FirstLoad ici pour ne pas rebind les clics ajax
      }
      if (typeof window.LoadViaAjax === 'function') {
        // Non appelé en routing Next
      }
    } catch {
      // silencieux
    }
  }, [pathname])

  return null
}


