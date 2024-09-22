import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <header className="mb-20 space-y-5">
      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
      <nav className="flex items-center justify-between gap-8 leading-lose">
        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Stack</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/gabrieldesiderio/">
            <LinkedInLogoIcon className="size-5" />
          </Link>
          <Link href="https://github.com/gabrieldesiderio">
            <GitHubLogoIcon className="size-5" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
