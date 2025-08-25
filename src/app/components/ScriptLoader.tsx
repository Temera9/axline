// src/components/ScriptLoader.tsx
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __clapatScriptsLoaded?: boolean
  }
}

export default function ScriptLoader() {
  useEffect(() => {
    // Empêcher le double chargement (dev/StrictMode et re-montages)
    if (typeof window !== 'undefined' && window.__clapatScriptsLoaded) {
      return
    }

    const markLoaded = () => {
      window.__clapatScriptsLoaded = true
    }

    // Fonction pour charger un script de manière dynamique
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Ne pas réajouter si déjà présent
        const existing = Array.from(document.getElementsByTagName('script')).find(s => s.src === new URL(src, window.location.origin).href)
        if (existing) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    // Charger les scripts dans l'ordre après que le DOM soit prêt
    const loadAllScripts = async () => {
      try {
        // Attendre que le DOM soit complètement rendu
        await new Promise(resolve => setTimeout(resolve, 100))

        // Charger jQuery en premier
        await loadScript('/js/jquery.min.js')
        
        // Charger les bibliothèques externes
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js')
        
        // Charger les scripts personnalisés dans l'ordre
        await loadScript('/js/clapat.js')
        await loadScript('/js/plugins.js')
        await loadScript('/js/common.js')
        await loadScript('/js/contact.js')
        await loadScript('/js/scripts.js')

        markLoaded()
        console.log('Tous les scripts ont été chargés avec succès')
      } catch (error) {
        console.error('Erreur lors du chargement des scripts:', error)
      }
    }

    loadAllScripts()
  }, [])

  return null // Ce composant ne rend rien visuellement
}