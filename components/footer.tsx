import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              
              {/* Substituição do ícone e do texto SKYLINE */}
              <img
                src="/pj.png"
                alt="Logo PJ"
                className="h-10 w-10 object-contain"
              />

              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-tight text-foreground">
                  POLÍCIA JUDICIÁRIA
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Órgão de polícia criminal especializado, dotado de autonomia
              administrativa, organizado hierarquicamente na dependência do
              Ministério da Justiça.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 text-foreground uppercase tracking-wide">
              Informações
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Missão e Competências
                </Link>
              </li>
              <li>
                <Link
                  href="/direcao"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Direção Nacional
                </Link>
              </li>
              <li>
                <Link
                  href="/formulario"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Formulário de Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Polícia Judiciária. Todos os direitos reservados.
            </p>
            <div className="flex gap-8">
              <Link
                href="https://discord.gg/skylinerppt"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Discord SkyLine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
