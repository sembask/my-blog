import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Chat Comigo</h1>
        <p className="text-muted-foreground">
          Olá! Este é um assistente virtual que pode responder perguntas sobre mim, minha experiência, projetos e
          habilidades. Sinta-se à vontade para perguntar qualquer coisa!
        </p>
      </div>

      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <ChatInterface />
      </div>
    </div>
  )
}
