import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, Award, GraduationCap, Briefcase } from "lucide-react"

export default function DirecaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-48 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Liderança</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Direção Nacional</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça a liderança que orienta a Polícia Judiciária de SkyLine
              </p>
            </div>

            <Card className="overflow-hidden bg-card border-border mb-12">
              <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                <div className="bg-muted/30 p-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="aspect-square w-full max-w-[300px] rounded-2xl overflow-hidden bg-muted relative z-10 border border-border">
                    <img
                      src="/diretornacional.jpg"
                      alt="Diretor Nacional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-12 lg:p-16">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-foreground mb-3 tracking-tight">Dr. Marcelo Souza</h2>
                    <p className="text-xl text-primary font-semibold">Diretor Nacional da Polícia Judiciária</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
                          Perfil Profissional
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Com uma vasta experiência no combate ao crime organizado e à criminalidade complexa, o Dr. Marcelo
                        Souza lidera a Polícia Judiciária com uma visão moderna e estratégica, focada na inovação
                        tecnológica e na cooperação internacional.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">Carreira</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Ao longo da sua carreira, tem desempenhado funções de liderança em áreas críticas da
                        investigação criminal, incluindo o combate ao terrorismo, ao tráfico de estupefacientes e à
                        criminalidade económico-financeira. A sua experiência internacional inclui colaboração com
                        organismos como a Europol, Interpol e outras forças policiais europeias.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
                          Formação Académica
                        </h3>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Licenciatura em Direito pela Universidade de SkyLine</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Pós-Graduação em Ciências Policiais pelo ISCPSI</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Formação especializada em investigação criminal e segurança internacional</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-sm">direcao.nacional@skyline.xyz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tornar a Polícia Judiciária numa referência europeia em investigação criminal e inovação
                    tecnológica.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-3">Prioridades</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Combate ao crime organizado, modernização tecnológica e cooperação internacional.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-3">Valores</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Profissionalismo, integridade, rigor e respeito pelos direitos humanos.
                  </p>
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
