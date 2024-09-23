import Link from 'next/link'
import { useLocale } from 'next-intl'

import { Button } from '../ui/button'

export function LangToggle() {
  const locale = useLocale()

  const options = ['pt', 'en']
  const link = options.filter((option) => option !== locale)[0]

  return (
    <Link href={link} passHref>
      <Button variant="ghost" size="icon">
        {locale === 'pt' ? <span>🇧🇷</span> : <span>🇺🇸</span>}
      </Button>
    </Link>
  )
}
