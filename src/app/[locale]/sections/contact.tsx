import Link from 'next/link'

export function Contact() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-8">Contato</h2>
      <div className="space-y-3">
        <p>
          Tem uma ideia, oportunidade, precisa de um orçamento ou simplesmente
          deseja conversar?
        </p>
        <p>
          Você pode me encontrar no{' '}
          <Link
            href="https://www.linkedin.com/in/gabrieldesiderio/"
            className="underline"
            target="_blank"
          >
            LinkedIn
          </Link>{' '}
          ou{' '}
          <a href="mailto:gabrieldesd7@gmail.com" className="underline">
            enviar um e-mail para gabrieldesd7@gmail.com
          </a>
          .
        </p>
        <p>Ficarei feliz com o seu contato :)</p>
      </div>
    </section>
  )
}
