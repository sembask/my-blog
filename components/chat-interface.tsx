"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/spinner";
import { Send, User, Bot } from "lucide-react";
import { Message, useAssistant } from "@ai-sdk/react";

export function ChatInterface() {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: "/api/assistant" });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m: Message) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-3 max-w-[80%] ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              } p-3 rounded-lg`}
            >
              <div className="flex-shrink-0 mt-1">
                {m.role === "user" ? (
                  <User className="h-5 w-5" />
                ) : (
                  <Bot className="h-5 w-5" />
                )}
              </div>
              <div>{m.content}</div>
            </div>
          </div>
        ))}
        {status === "in_progress" && (
          <div className="flex justify-start">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg flex gap-3">
              <Bot className="h-5 w-5" />
              <Spinner />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border p-4">
        <form onSubmit={submitMessage} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Digite sua pergunta..."
            disabled={status === "in_progress"}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={status === "in_progress" || !input.trim()}
          >
            {status === "in_progress" ? (
              <Spinner />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
