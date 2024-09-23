import { useTranslations } from 'next-intl'

export function Projects() {
  const t = useTranslations('home.projects')
  const keys = [0, 1, 2, 3] as const

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <ul className="space-y-6">
        {keys.map((key) => (
          <li key={key}>
            <h3 className="text-lg font-semibold">{t(`items.${key}.title`)}</h3>
            <p className="text-sm text-muted-foreground">
              {t(`items.${key}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
