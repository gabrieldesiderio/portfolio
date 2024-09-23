import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('home.about')

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{t('title')}</h1>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        {t('summary')}
      </p>
    </section>
  )
}
