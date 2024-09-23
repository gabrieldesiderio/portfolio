import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useMessages, useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'

export function Projects() {
  const t = useTranslations('home.projects')
  const keys = ['0', '1', '2', '3'] as const

  const messages = useMessages()

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <ul className="space-y-6">
        {keys.map((key) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const skills = messages.home.projects.items[key].stack as string[]

          return (
            <li key={key}>
              <h3 className="sm:text-lg font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {skills.map((skill) => (
                  <Badge variant="secondary" key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-5">
                {t(`items.${key}.app`) && (
                  <Link
                    href={t(`items.${key}.app`)}
                    target="_blank"
                    className="flex items-center gap-1 font-medium text-sm text-muted-foreground hover:text-primary transition-colors"
                    passHref
                  >
                    App <ExternalLinkIcon />
                  </Link>
                )}
                {t(`items.${key}.repository`) && (
                  <Link
                    href={t(`items.${key}.repository`)}
                    target="_blank"
                    className="flex items-center gap-1 font-medium text-sm text-muted-foreground hover:text-primary transition-colors"
                    passHref
                  >
                    {t('codeButtonText')} <ExternalLinkIcon />
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
