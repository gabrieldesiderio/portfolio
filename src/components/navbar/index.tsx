import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { LangToggle } from './lang.toggle'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <header className="mb-10 sm:mb-20 sticky top-0 h-14 bg-background flex items-center justify-between gap-8 leading-lose shadow-sm">
      <nav className="flex items-center gap-2">
        <Link
          href="https://www.linkedin.com/in/gabrieldesiderio/"
          target="_blank"
          passHref
        >
          <Button variant="ghost" size="icon">
            <LinkedInLogoIcon className="size-5" />
          </Button>
        </Link>
        <Link
          href="https://github.com/gabrieldesiderio"
          target="_blank"
          passHref
        >
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon className="size-5" />
          </Button>
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <LangToggle />
      </div>
    </header>
  )
}
