import { useTranslations } from 'next-intl'

export function Contact() {
  const t = useTranslations('home.contact')
  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <div
        className="space-y-3 text-muted-foreground content"
        dangerouslySetInnerHTML={{ __html: t.raw('content') }}
      />
    </section>
  )
}
