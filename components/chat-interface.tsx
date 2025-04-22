"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, User, Bot } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Sou um assistente virtual que pode responder perguntas sobre o dono deste site. Pergunte sobre projetos, experiência, habilidades técnicas ou qualquer outra coisa!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Função para simular uma resposta do assistente
  // Em um ambiente real, isso seria substituído por uma chamada à API do GPT
  const simulateResponse = async (question: string) => {
    setIsLoading(true)

    // Simula um atraso para parecer mais natural
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Respostas pré-definidas baseadas em palavras-chave
    let response =
      "Desculpe, não tenho informações específicas sobre isso. Você poderia perguntar sobre projetos, habilidades técnicas ou experiência profissional?"

    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("react") || lowerQuestion.includes("frontend")) {
      response =
        "Tenho bastante experiência com React e desenvolvimento frontend. Trabalho com React há mais de 3 anos e já desenvolvi diversos projetos utilizando Next.js, Tailwind CSS e outras tecnologias modernas de frontend."
    } else if (lowerQuestion.includes("projeto")) {
      response =
        "Desenvolvi vários projetos interessantes! Alguns dos mais recentes incluem um sistema de blog com Next.js, uma aplicação de e-commerce com React e Node.js, e um dashboard analítico com visualização de dados. Você pode ver mais detalhes na seção de Projetos do site."
    } else if (lowerQuestion.includes("experiência") || lowerQuestion.includes("trabalho")) {
      response =
        "Tenho experiência em desenvolvimento web fullstack, com foco em tecnologias JavaScript. Já trabalhei em empresas de tecnologia e como freelancer em diversos projetos. Minha especialidade é criar interfaces de usuário intuitivas e sistemas eficientes."
    } else if (lowerQuestion.includes("habilidade") || lowerQuestion.includes("tecnologia")) {
      response =
        "Minhas principais habilidades técnicas incluem JavaScript/TypeScript, React, Next.js, Node.js, e bancos de dados como MongoDB e PostgreSQL. Também tenho experiência com ferramentas de análise como Google Analytics. Você pode ver mais detalhes na seção de Tecnologias do site."
    }

    setIsLoading(false)
    return response
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "" || isLoading) return

    // Adiciona a mensagem do usuário
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Obtém a resposta
    const response = await simulateResponse(input)

    // Adiciona a resposta do assistente
    const assistantMessage: Message = { role: "assistant", content: response }
    setMessages((prev) => [...prev, assistantMessage])
  }

  // Rola para o final da conversa quando novas mensagens são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex gap-3 max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              } p-3 rounded-lg`}
            >
              <div className="flex-shrink-0 mt-1">
                {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </div>
              <div>{message.content}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua pergunta..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
