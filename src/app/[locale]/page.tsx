import { BackgroundParticles } from '@/components/navbar/particles'

import { About } from './sections/about'
import { Academic } from './sections/academic'
import { Contact } from './sections/contact'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
import { Xp } from './sections/xp'

export default function Home() {
  return (
    <main className="space-y-16">
      <About />
      <Skills />
      <Xp />
      <Academic />
      <Projects />
      <Contact />

      <BackgroundParticles />
    </main>
  )
}
