"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src="/pj.png"
                alt="Logo PJ"
                className="h-10 w-10 object-contain transition-all duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight tracking-tight">
                POLÍCIA JUDICIÁRIA
              </span>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group uppercase tracking-wide"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/direcao"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group uppercase tracking-wide"
            >
              Direção
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/formulario"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group uppercase tracking-wide"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-muted/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              >
                Início
              </Link>
              <Link
                href="/direcao"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              >
                Direção
              </Link>
              <Link
                href="/formulario"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}