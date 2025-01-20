"use client"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Building2, Calculator, PiggyBank, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient relative">
          {/* Blur circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 opacity-[0.12] blur-[100px]"></div>
            <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-orange-500 opacity-[0.12] blur-[100px]"></div>
          </div>

          <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-orange-500/10 p-2 ring-1 ring-orange-500/20">
                <Building2 className="h-6 w-6 text-orange-500" />
              </div>
              
              <h1 className="mt-8 max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Optimisez vos investissements immobiliers
              </h1>
              
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Des outils avancés pour calculer, analyser et maximiser la rentabilité de vos projets immobiliers.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button size="lg" className="button-gradient animate-glow group" asChild>
                  <Link href="/tools/profitability" className="gap-2">
                    Commencer maintenant
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500/20 hover:bg-orange-500/10" asChild>
                  <Link href="/tools">
                    Découvrir les outils
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="gradient-bg py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nos outils principaux
            </h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Calculateur de rentabilité */}
              <div className="glass-card card-hover-effect relative rounded-2xl p-8">
                <div className="absolute right-4 top-4">
                  <Calculator className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Calcul de rentabilité
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Analysez la rentabilité de vos investissements avec précision et prenez des décisions éclairées.
                </p>
                <Button variant="ghost" className="mt-4 hover:bg-orange-500/10 hover:text-orange-500" asChild>
                  <Link href="/tools/profitability" className="gap-2 group">
                    Calculer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Capacité d'emprunt */}
              <div className="glass-card card-hover-effect relative rounded-2xl p-8">
                <div className="absolute right-4 top-4">
                  <PiggyBank className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Capacité d&apos;emprunt
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Estimez votre capacité d&apos;emprunt maximale et planifiez vos projets en conséquence.
                </p>
                <Button variant="ghost" className="mt-4 hover:bg-orange-500/10 hover:text-orange-500" asChild>
                  <Link href="/tools/borrowing-capacity" className="gap-2 group">
                    Calculer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Frais de notaire */}
              <div className="glass-card card-hover-effect relative rounded-2xl p-8">
                <div className="absolute right-4 top-4">
                  <FileText className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Frais de notaire
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Calculez rapidement les frais de notaire pour votre acquisition immobilière.
                </p>
                <Button variant="ghost" className="mt-4 hover:bg-orange-500/10 hover:text-orange-500" asChild>
                  <Link href="/tools/notary-fees" className="gap-2 group">
                    Calculer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="container relative">
            <div className="mx-auto max-w-2xl rounded-3xl bg-orange-500/10 px-8 py-16 text-center ring-1 ring-orange-500/20 backdrop-blur-sm">
              <h2 className="mx-auto max-w-md text-3xl font-bold tracking-tight text-white">
                Prêt à optimiser vos investissements ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Commencez dès maintenant à analyser vos projets immobiliers avec nos outils professionnels.
              </p>
              <Button size="lg" className="mt-10 button-gradient" asChild>
                <Link href="/tools/profitability">
                  Commencer l&apos;analyse
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background/95">
        <div className="container mx-auto py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Boîte à outils de l&apos;investissement immobilier. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}