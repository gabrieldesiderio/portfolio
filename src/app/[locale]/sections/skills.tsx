import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { data } from '@/lib/data'

export function Skills() {
  const t = useTranslations('home.skills')

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">{t('title')}</h2>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <Badge variant="secondary" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
