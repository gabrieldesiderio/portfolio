'use client'

import { useTheme } from 'next-themes'

import Particles from '../ui/particles'

export function BackgroundParticles() {
  const { resolvedTheme } = useTheme()

  console.log('resolved theme', resolvedTheme)

  return (
    <Particles
      quantityDesktop={350}
      quantityMobile={100}
      ease={80}
      color={resolvedTheme === 'dark' ? '#FFFFFF' : '#000000'}
      refresh
    />
  )
}
