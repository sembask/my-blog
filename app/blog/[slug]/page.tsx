import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock temporário de dados do post
  const post = {
    slug: params.slug,
    title: "Introdução à Programação Funcional",
    date: "12 Abril, 2023",
    content: `
      <p>A programação funcional é um paradigma de programação que trata a computação como a avaliação de funções matemáticas e evita estados mutáveis e dados compartilhados.</p>
      
      <h2>Princípios Básicos</h2>
      <p>Alguns dos princípios fundamentais da programação funcional incluem:</p>
      <ul>
        <li><strong>Imutabilidade</strong>: Os dados não mudam após serem criados.</li>
        <li><strong>Funções Puras</strong>: Funções que sempre produzem o mesmo resultado para os mesmos argumentos e não têm efeitos colaterais.</li>
        <li><strong>Funções de Primeira Classe</strong>: Funções podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.</li>
        <li><strong>Composição de Funções</strong>: Construir funções complexas combinando funções mais simples.</li>
      </ul>
      
      <h2>Benefícios</h2>
      <p>A programação funcional oferece vários benefícios:</p>
      <ul>
        <li>Código mais previsível e fácil de testar</li>
        <li>Melhor suporte para programação paralela e concorrente</li>
        <li>Redução de bugs relacionados a estados mutáveis</li>
        <li>Código mais declarativo e expressivo</li>
      </ul>
      
      <h2>Exemplos em JavaScript</h2>
      <pre><code>
      // Função pura
      const add = (a, b) => a + b;
      
      // Imutabilidade
      const arr = [1, 2, 3];
      const newArr = [...arr, 4]; // Cria um novo array em vez de modificar o original
      
      // Funções de ordem superior
      const double = x => x * 2;
      const numbers = [1, 2, 3, 4];
      const doubled = numbers.map(double);
      </code></pre>
    `,
    tags: ["Programação Funcional", "JavaScript", "Teoria"],
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o blog
        </Link>
      </Button>

      <article className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
