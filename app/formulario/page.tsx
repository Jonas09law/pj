"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function FormularioPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1447704859720679445/yKGw2oMtr44lUxI1J-QrTer4A9vzS8pBxirKzQ4kjq7I2tHJvbadaRMzAZEgg5HHXc6Q"

      const message = {
        embeds: [
          {
            title: "📋 Nova Submissão de Formulário - Polícia Judiciária",
            color: 0x5865f2,
            fields: [
              {
                name: "👤 Nome",
                value: formData.nome || "Não fornecido",
                inline: true,
              },
              {
                name: "📧 Email",
                value: formData.email || "Não fornecido",
                inline: true,
              },
              {
                name: "📞 Telefone",
                value: formData.telefone || "Não fornecido",
                inline: true,
              },
              {
                name: "📌 Assunto",
                value: formData.assunto || "Não fornecido",
                inline: false,
              },
              {
                name: "💬 Mensagem",
                value: formData.mensagem || "Não fornecido",
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "Polícia Judiciária - Sistema de Contactos",
            },
          },
        ],
      }

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })

      setIsSuccess(true)
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-48 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Contacto</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Entre em Contacto</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Preencha o formulário e entraremos em contacto consigo brevemente
              </p>
            </div>

            {isSuccess ? (
              <Card className="p-16 bg-card text-center border-border">
                <div className="flex justify-center mb-8">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Mensagem Enviada!</h2>
                <p className="text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
                  Agradecemos o seu contacto. A sua mensagem foi recebida e será analisada pela nossa equipa.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-xl"
                  size="lg"
                >
                  Enviar Nova Mensagem
                </Button>
              </Card>
            ) : (
              <Card className="p-12 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nome" className="text-foreground">
                        Nome Completo (IC) *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Introduza o seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="bg-background border-border h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground">
                        Discord (OCC) *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        placeholder=".vxtz."
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="telefone" className="text-foreground">
                        Telefone (IC)
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="+351 912 345 678"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="bg-background border-border h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="assunto" className="text-foreground">
                        Assunto *
                      </Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        type="text"
                        placeholder="Assunto da mensagem"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                        className="bg-background border-border h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="mensagem" className="text-foreground">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Escreva a sua mensagem aqui..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl text-base"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>A Enviar...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Enviar Mensagem
                        </span>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center pt-2">* Campos obrigatórios</p>
                </form>
              </Card>
            )}

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground">+351 21 381 7000</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">geral.pj@skyline.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
