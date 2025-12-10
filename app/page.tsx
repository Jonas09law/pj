import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Scale, Globe, Users, FileSearch, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
  <img
    src="/pj.png"
    alt="Skyline logo"
    className="h-4 w-4 object-contain"
  />
  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
    SKYLINE
  </span>
</div>

            <h1 className="text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-none tracking-tight">
              POLÍCIA
              <br />
              <span className="text-primary">JUDICIÁRIA</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Coadjuvando a administração da justiça, prevenindo e investigando a criminalidade, em especial a mais
              grave e organizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14 rounded-xl"
              >
                <Link href="/formulario">Entre em Contacto</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 text-base px-8 h-14 rounded-xl bg-transparent"
              >
                <Link href="/direcao">Direção Nacional</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>



      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Missão e Competências
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed text-center">
                A Polícia Judiciária é um órgão de polícia criminal especializado, dotado de autonomia administrativa,
                organizado hierarquicamente na dependência do Ministério da Justiça. Tem por missão coadjuvar a
                administração da justiça, prevenindo e investigando a criminalidade, em especial a mais grave e
                organizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">Áreas de Atuação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combate especializado à criminalidade em múltiplas frentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Lock className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Crime Organizado</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investigação e desmantelamento de organizações criminosas nacionais e transnacionais.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <FileSearch className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Crimes Económicos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Combate à corrupção, fraude, branqueamento de capitais e criminalidade informática.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Shield className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Crimes Violentos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Homicídios, sequestros, extorsão e criminalidade violenta de alta complexidade.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Scale className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Tráfico de Estupefacientes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desarticulação de redes internacionais de tráfico e grandes organizações criminosas.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Globe className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Terrorismo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prevenção e investigação de atividades terroristas e extremismo violento.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Users className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Cooperação Internacional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Articulação com organismos internacionais de polícia criminal e segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Precisa de Assistência?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Entre em contacto connosco para mais informações ou para reportar uma situação.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 h-14 rounded-xl"
            >
              <Link href="/formulario">Contactar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
