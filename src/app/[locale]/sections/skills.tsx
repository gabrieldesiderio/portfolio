import { Badge } from '@/components/ui/badge'

export function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">Habilidades</h2>
      <div className="flex flex-wrap gap-1.5">
        <Badge>Javascript</Badge>
        <Badge>Typescript</Badge>
        <Badge>Node.js</Badge>
        <Badge>NestJS</Badge>
        <Badge>Fastify</Badge>
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>React Native</Badge>
        <Badge>Expo</Badge>
        <Badge>PHP</Badge>
        <Badge>Laravel</Badge>
        <Badge>Blade</Badge>
        <Badge>WordPress</Badge>
        <Badge>Bedrock</Badge>
        <Badge>Sage</Badge>
        <Badge>MySQL</Badge>
        <Badge>Postgres</Badge>
        <Badge>Docker</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Boostrap</Badge>
      </div>
    </section>
  )
}
