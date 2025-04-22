import { TechCard } from "@/components/tech-card";

export default function TecnologiasPage() {
  const categories = [
    {
      name: "Tech Stack",
      techs: [
        { name: "C#", level: 95, icon: "🟣" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "💻" },
        { name: "JavaScript", level: 90, icon: "💻" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🐘" },
        { name: "Cypress", level: 75, icon: "🟢" },
      ],
    },
    {
      name: "Ferramentas & Analytics",
      techs: [
        { name: "Git", level: 85, icon: "🔄" },
        { name: "Data Dog", level: 75, icon: "📊" },
        { name: "Google Analytics", level: 75, icon: "📊" },
        { name: "Figma", level: 70, icon: "🎭" },
      ],
    },
    {
      name: "Devops & Cloud",
      techs: [
        { name: "Azure Devops", level: 80, icon: "📘" },
        { name: "Docker", level: 55, icon: "🐳" },
        { name: "AWS", level: 50, icon: "☁️" },
      ],
    },
    {
      name: "Outros",
      techs: [
        { name: "SEO", level: 65, icon: "🔍" },
        { name: "Cucumber", level: 75, icon: "🥒" },
        { name: "Gherkin", level: 50, icon: "☁️" },
        { name: "EF Core", level: 50, icon: "☁️" },
        { name: "Google ADS", level: 50, icon: "☁️" },
        { name: "Meta ADS", level: 50, icon: "☁️" },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Minhas Tecnologias</h1>
        <p className="text-muted-foreground">
          Ferramentas, linguagens e frameworks que utilizo no meu dia a dia de
          desenvolvimento.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.techs.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 border border-border rounded-lg bg-card">
        <h2 className="text-xl font-semibold mb-4">
          Quer saber mais sobre minhas habilidades?
        </h2>
        <p className="mb-4">
          Experimente o chat abaixo para fazer perguntas sobre minha experiência
          com essas tecnologias ou visite a{" "}
          <a href="/chat" className="text-primary underline underline-offset-4">
            página de chat
          </a>{" "}
          para uma experiência completa.
        </p>
      </div>
    </div>
  );
}
