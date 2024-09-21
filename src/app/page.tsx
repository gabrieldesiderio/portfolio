import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="space-y-16">
      <section>
        <h1 className="text-2xl font-semibold mb-3">
          Olá, eu sou o Gabriel 👋
        </h1>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Apaixonado por tecnologia e negócios, acredito que a verdadeira magia
          acontece quando ideias se transformam em soluções inovadoras. Para
          mim, cada desafio é uma oportunidade de crescimento e aprendizado, e é
          essa mentalidade que impulsiona minha carreira. Estou sempre em busca
          de novos horizontes para aplicar minha criatividade e conhecimento,
          transformando conceitos em realidades que impactam positivamente o
          mundo ao meu redor.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-8">Experiências</h2>
        <ul className="space-y-6">
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Khipo</h3>
              <span className="text-muted-foreground text-sm">
                Jul 2024 - atual
              </span>
            </div>
            <p className="text-sm">
              São Paulo, BR -{' '}
              <span className="text-muted-foreground">
                Desenvolvedor full stack
              </span>
            </p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Joyjet</h3>
              <span className="text-muted-foreground text-sm">
                Fev 2022 - Jul 2024
              </span>
            </div>
            <p className="text-sm">
              Paris, FR -{' '}
              <span className="text-muted-foreground">
                Desenvolvedor full stack
              </span>
            </p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Studio Visual</h3>
              <span className="text-muted-foreground text-sm">
                Nov 2022 - Fev 2022
              </span>
            </div>
            <p className="text-sm">
              São Paulo, BR -{' '}
              <span className="text-muted-foreground">
                Team Lead & Tech Lead
              </span>
            </p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Mobister</h3>
              <span className="text-muted-foreground text-sm">
                Mar 2019 - Nov 2021
              </span>
            </div>
            <p className="text-sm">
              Natal, BR -{' '}
              <span className="text-muted-foreground">Squad Lead</span>
            </p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Nova M3</h3>
              <span className="text-muted-foreground text-sm">
                Mai 2018 - Dez 2018
              </span>
            </div>
            <p className="text-sm">
              Natal, RN -{' '}
              <span className="text-muted-foreground">Desenvolvedor web</span>
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-8">Educação</h2>
        <ul className="space-y-6">
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Cursos livres</h3>
              <span className="text-muted-foreground text-sm">
                2022 - atual
              </span>
            </div>
            <p className="text-sm">Rocketseat</p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Tecnólogo em Gestão de Tecnologia da Informação
              </h3>
              <span className="text-muted-foreground text-sm">2019 - 2022</span>
            </div>
            <p className="text-sm">Universidade Potiguar</p>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Técnico em Informática</h3>
              <span className="text-muted-foreground text-sm">2012 - 2015</span>
            </div>
            <p className="text-sm">
              EEEP Professora Maria Célia Pinheiro Falcão
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-8">Habilidades</h2>
        <div className="flex flex-wrap gap-1.5">
          <Badge>Javascript</Badge>
          <Badge>Typescript</Badge>
          <Badge>Nodejs</Badge>
          <Badge>Nestjs</Badge>
          <Badge>Fastify</Badge>
          <Badge>Reactjs</Badge>
          <Badge>Next.js</Badge>
          <Badge>React Native</Badge>
          <Badge>Expo</Badge>
          <Badge>PHP</Badge>
          <Badge>Laravel</Badge>
          <Badge>Blade</Badge>
          <Badge>WordPress</Badge>
          <Badge>Sage</Badge>
          <Badge>Bedrock</Badge>
          <Badge>MySQL</Badge>
          <Badge>Postgres</Badge>
          <Badge>Docker</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Boostrap</Badge>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-8">Projetos</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-lg font-semibold">QR Code Generator</h3>
            <p className="text-sm">
              Projeto construído para gerar QR Codes de forma dinâmica a partir
              de uma URL inserida pelo usuário.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Tailwind ADMIN</h3>
            <p className="text-sm">
              UI construída com tailwindcss utilizando o conceito de Composition
              Pattern.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Kanban Board</h3>
            <p className="text-sm">
              Um quadro kanban para gerenciamento de tarefas.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Forum API</h3>
            <p className="text-sm">
              Um serviço de fórum, utilizando os conceitos de Clean
              Architecture, SOLID e DDD.
            </p>
          </li>
        </ul>
      </section>
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
    </main>
  )
}
