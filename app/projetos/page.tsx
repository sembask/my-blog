import { ProjectCard } from "@/components/project-card";

export default function ProjetosPage() {
  const projetos = [
    {
      id: "Tomorrow",
      title: "Projeto Tomorrow",
      description:
        "Tomorrow é um aplicativo web projetado para criar e compartilhar tarefas reescritas com a IA do OpenAI.",
      icon: "λ",
    },
    {
      id: "my-blog",
      title: "Sistema de Blog / Portfólio",
      description:
        "Plataforma de blog minimalista construída com Next.js e Tailwind CSS. Suporta markdown e possui temas claro e escuro.",
      icon: "📝",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <p className="text-muted-foreground">
          Uma coleção dos meus projetos pessoais e profissionais. (Ainda em
          construção)
        </p>
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
  );
}
