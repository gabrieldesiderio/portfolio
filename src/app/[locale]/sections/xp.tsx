import { useTranslations } from 'next-intl'

export function Xp() {
  const t = useTranslations('home.xp')
  const keys = [0, 1, 2, 3, 4] as const

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <ul className="space-y-6">
        {keys.map((key) => (
          <li key={key}>
            <div className="flex items-center justify-between">
              <h3 className="sm:text-lg font-semibold">
                {t(`items.${key}.name`)}
              </h3>
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {t(`items.${key}.period`)}
              </span>
            </div>
            <p className="text-sm">
              {t(`items.${key}.city`)} -{' '}
              <span className="text-muted-foreground">
                {t(`items.${key}.position`)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
