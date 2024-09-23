import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <header className="mb-20 space-y-5">
      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
      <nav className="flex items-center justify-between gap-8 leading-lose">
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/">Stack</Link>
        </div>
        <div className="flex items-center gap-2">
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
        </div>
      </nav>
    </header>
  )
}
