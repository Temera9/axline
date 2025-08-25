// src/components/MagicCursor.tsx
'use client'

export default function MagicCursor() {
  return (
    <div id="magic-cursor">
      <div id="ball">
        <div id="ball-drag-x"></div>
        <div id="ball-drag-y"></div>
        <div id="ball-loader"></div>
      </div>
    </div>
  )
}