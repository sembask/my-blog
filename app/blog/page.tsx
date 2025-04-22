import Link from "next/link";

export default function BlogPage() {
  // Mock temporário
  const posts = [
    {
      id: "post-1",
      title: "Introdução à Programação Funcional",
      date: "12 Abril, 2023",
      excerpt:
        "Uma visão geral sobre os princípios da programação funcional e como aplicá-los em projetos reais.",
      tags: ["Programação Funcional", "JavaScript", "Teoria"],
    },
    {
      id: "post-2",
      title: "Construindo UIs Minimalistas",
      date: "5 Março, 2023",
      excerpt:
        "Como criar interfaces de usuário elegantes e minimalistas que melhoram a experiência do usuário.",
      tags: ["UI/UX", "Design", "Minimalismo"],
    },
    {
      id: "post-3",
      title: "Otimização de Compiladores",
      date: "20 Fevereiro, 2023",
      excerpt:
        "Técnicas avançadas para otimização de compiladores e melhoria de desempenho.",
      tags: ["Compiladores", "Otimização", "Linguagens"],
    },
    {
      id: "post-4",
      title: "Teoria dos Tipos na Prática",
      date: "15 Janeiro, 2023",
      excerpt:
        "Como a teoria dos tipos pode melhorar a segurança e a manutenção do seu código.",
      tags: ["Teoria dos Tipos", "TypeScript", "Programação"],
    },
  ];

  return (
    <div className="dark space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Compartilhando conhecimentos sobre programação, design e tecnologia.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <article className="border border-border rounded-lg p-6 transition-colors group-hover:border-primary">
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
