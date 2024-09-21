import Link from 'next/link'

export function Navbar() {
  return (
    <aside className="mb-20">
      <nav className="flex items-center gap-8 leading-lose">
        <Link href="/">Home</Link>
        <Link href="/">Stack</Link>
      </nav>
    </aside>
  )
}
