import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChatWidget } from "@/components/chat-widget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sembask - Blog",
  description:
    "Olá, eu sou Lucas Sembarski Higert! Desenvolvedor de software apaixonado por criar soluções. Você pode conferir um pouco mais sobre mim acessando abaixo, ou conversando com meu agente IA.",
  openGraph: {
    title: "Lucas Sembarski Higert - Desenvolvedor de Software",
    description:
      "Olá, eu sou Lucas Sembarski Higert! Desenvolvedor de software apaixonado por criar soluções. Você pode conferir um pouco mais sobre mim acessando abaixo, ou conversando com meu agente IA.",
    url: "https://lucas-sembarski.vercel.app",
    siteName: "Lucas Sembarski Higert",
    images: [
      {
        url: "https://sembask.com/lucas-foto-my-blog.jpg",
        alt: "Lucas Sembarski Higert - Desenvolvedor de Software",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
        <div className="relative w-full max-w-[300px] aspect-square mx-auto md:mx-0">
          <div className="border border-border rounded-lg overflow-hidden">
            <Image
              src="/lucas-foto-my-blog.jpg?height=300&width=300"
              alt="Foto de perfil"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Olá, eu sou{" "}
            <span className="text-primary">Lucas Sembarski Higert!</span> 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Você pode conferir um pouco mais sobre mim acessando abaixo, ou
            conversando com meu agente IA.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* funcionalidade de blog oculta por enquanto */}
            {/* <Button asChild>
              <Link href="/blog">Meu Blog</Link>
            </Button> */}
            <Button variant="outline" asChild>
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/tecnologias">Tecnologias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Meus Projetos 🚀</h2>
          <Button variant="ghost" asChild>
            <Link href="/projetos">Ver todos</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Tomorrow"
            description="Tomorrow é um aplicativo web projetado para criar e compartilhar tarefas reescritas com a IA do OpenAI."
            icon="📝"
            link="https://github.com/sembask/tomorrow"
          />
          <ProjectCard
            title="Sistema de Blog"
            description="Plataforma de blog minimalista construída com Next.js e Tailwind CSS."
            icon="λ"
            link="/projetos/blog"
          />
          <ProjectCard
            title="Compilador Experimental"
            description="Um compilador incremental/single-pass para estudo e experimentação."
            icon="λ"
            link="/projetos/compilador"
          />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Posts Recentes ✍️</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">Ver todos</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/post-1" className="group">
            <div className="border border-border rounded-lg p-6 transition-colors group-hover:border-primary">
              <p className="text-sm text-muted-foreground mb-2">
                12 Abril, 2023
              </p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Introdução à Programação Funcional
              </h3>
              <p className="text-muted-foreground">
                Uma visão geral sobre os princípios da programação funcional e
                como aplicá-los em projetos reais.
              </p>
            </div>
          </Link>
          <Link href="/blog/post-2" className="group">
            <div className="border border-border rounded-lg p-6 transition-colors group-hover:border-primary">
              <p className="text-sm text-muted-foreground mb-2">
                5 Março, 2023
              </p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Construindo UIs Minimalistas
              </h3>
              <p className="text-muted-foreground">
                Como criar interfaces de usuário elegantes e minimalistas que
                melhoram a experiência do usuário.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}
