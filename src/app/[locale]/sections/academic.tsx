import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'

export function Academic() {
  const t = useTranslations('home.academic')
  const keys = [0, 1] as const

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <ul className="space-y-6">
        {keys.map((key) => (
          <li key={key}>
            <Badge variant="outline" className="mb-1">
              {t(`items.${key}.level`)}
            </Badge>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <span className="text-muted-foreground text-sm">
                {t(`items.${key}.period`)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t(`items.${key}.company`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
