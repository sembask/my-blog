import { ProjectCard } from "@/components/project-card"

export default function ProjetosPage() {
  const projetos = [
    {
      id: "lambda",
      title: "Projeto Lambda",
      description:
        "Uma linguagem funcional com foco em simplicidade e facilidade de uso. Implementa um sistema de tipos estático similar ao Kotlin.",
      icon: "λ",
    },
    {
      id: "blog",
      title: "Sistema de Blog",
      description:
        "Plataforma de blog minimalista construída com Next.js e Tailwind CSS. Suporta markdown e possui temas claro e escuro.",
      icon: "📝",
    },
    {
      id: "compilador",
      title: "Compilador Experimental",
      description:
        "Um compilador incremental/single-pass para estudo e experimentação. Implementa otimizações avançadas e geração de código eficiente.",
      icon: "λ",
    },
    {
      id: "ui-lib",
      title: "Biblioteca de UI",
      description: "Conjunto de componentes de interface de usuário reutilizáveis com design minimalista e acessível.",
      icon: "🎨",
    },
    {
      id: "api",
      title: "API RESTful",
      description: "Backend escalável construído com Node.js e Express, seguindo princípios de design RESTful.",
      icon: "🔌",
    },
    {
      id: "app-mobile",
      title: "Aplicativo Mobile",
      description:
        "Aplicativo cross-platform desenvolvido com React Native, com foco em performance e experiência do usuário.",
      icon: "📱",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <p className="text-muted-foreground">Uma coleção dos meus projetos pessoais e profissionais.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            title={projeto.title}
            description={projeto.description}
            icon={projeto.icon}
            link={`/projetos/${projeto.id}`}
          />
        ))}
      </div>
    </div>
  )
}
