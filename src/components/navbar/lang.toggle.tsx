'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export function LangToggle() {
  const locale = useLocale()
  const [parent] = useAutoAnimate()

  const options = ['pt', 'en']
  const link = options.filter((option) => option !== locale)[0]

  return (
    <Link href={link} ref={parent}>
      {locale === 'pt' ? <span>🇧🇷</span> : <span>🇺🇸</span>}
    </Link>
  )
}
